// Handle profile change
const changeProfileButton = document.getElementById("changeProfileButton");
const onProfileChange = () => {
  // Get current selected profile
  const selectedProfileNode = document.querySelector('input[name="profile"]:checked');
  const profileName = selectedProfileNode.value;

  // setProfileSettingsVisable(profileName !== "none");

  (async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const { success, profile } = await chrome.tabs.sendMessage(tab.id, {
      name: 'CHANGE_PROFILE',
      data: {
        profile: profileName
      }
    });
    
    chrome.action.setBadgeText({
      text: profile.name,
    });
  })();
}
changeProfileButton.addEventListener('click', onProfileChange);

const setProfileSettingsVisable = isVisable => {
  const profileSettingsElement = document.getElementById("profileSettings");
  const displayValue = isVisable ? "block" : "none";
  profileSettingsElement.style.display = displayValue;
};

const renderProfileSettings = profile => {
  const selectedProfileNode = document.querySelector('input[name="profile"]:checked');
  const profileTitle = document.querySelector(`label[for="${selectedProfileNode.id}"]`)?.innerText;
  const profileSettingsTitleNode = document.getElementById("profileSettingsTitle");
  profileSettingsTitleNode.innerText = `${profileTitle} Profile Settings`;

  const filterMode = document.querySelector(`input[name="filterMode"][value="${profile.mode}"]`);
  filterMode.checked = true;

  // Facebook components
  for (component in profile.components) {
    const componentCheckbox = document.querySelector(`input[name="${component}"]`);
    if (!componentCheckbox) continue;
    componentCheckbox.checked = profile.components[component];
  }

  // Custom filters
  const customerFilterList = document.getElementById("customFilterList");
  customerFilterList.innerHTML = profile.filters
  .map(filter => {
    const keywords = filter.rules.flatMap(rule => rule.keywords).map(keyword => `<code class="text-sm text-rose-500">${keyword}</code>`);
    const classes = "block text-sm font-medium leading-6 text-gray-900"
    return `<li class="${classes}">${filter.name}: ${keywords.join(", ")}</li>`;
  })
  .join("");
}

// Handle profile select
const profileOptions = document.querySelectorAll('input[name="profile"]');
const onProfileSelect = () => {
  const selectedProfile = document.querySelector('input[name="profile"]:checked').value;

  (async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const { success, profile } = await chrome.tabs.sendMessage(tab.id, {
      name: 'GET_PROFILE',
      data: {
        profile: selectedProfile
      }
    });
  
    const isNoneProfle = selectedProfile === "none";
    setProfileSettingsVisable(!isNoneProfle);
    if (!isNoneProfle) renderProfileSettings(profile);
  })();
};
for (profileOption of profileOptions) {
  profileOption.addEventListener('click', onProfileSelect);
}
