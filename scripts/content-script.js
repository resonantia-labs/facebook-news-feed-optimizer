const profiles = {
  focus: {
    name: "Focus",
    mode: "exclude",
    components: {
      stories: true,
      reels: true,
      friendPosts: true,
      groupPosts: false,
      pagePosts: false,
      sponsoredPosts: true,
      friendSuggestions: true,
      postSuggestions: true,
      groupSuggestions: true,
    },
    filters: [
      {
        name: "Rao vặt",
        rules: [
          {
            name: "Rao vặt",
            type: "keywords",
            keywords: [
              "trả góp",
              "cần tiền",
              "bán gấp",
              "tiền gấp",
              "cần mua",
              "cần bán",
              "cho thuê",
              "cần cho thuê",
              "thanh lý",
              "săn sale",
              "giảm giá",
              "khuyến mãi",
            ],
          },
        ],
      },
      {
        name: "Mua bán, cho thuê chung cư",
        rules: [
          {
            name: "Mua bán, cho thuê chung cư",
            type: "keywords",
            keywords: [
              "cho thuê",
              "chuyển nhượng",
              "/tháng",
              "chính chủ",
              "cần nhượng",
              "phòng studio",
            ],
          },
        ],
      },
      {
        name: "Bất động sản",
        rules: [
          {
            name: "R1: Bất động sản",
            type: "keywords",
            keywords: [
              "bất động sản",
              "bds",
              "bđs",
              "mặt đường",
              "thổ cư",
              "chính chủ",
            ],
          },
        ],
      },
      {
        name: "Chụp ảnh, giao lưu ảnh",
        rules: [
          {
            name: "Giao lưu ảnh",
            type: "keywords",
            keywords: [
              "giao lưu ảnh",
              "mẫu ảnh",
              "chụp sản phẩm",
              "mẫu chụp",
              "thợ chụp ảnh",
              "freelance",
              "lookbook",
              "đi đâu chụp hình",
              "nhiếp ảnh",
              "chụp ảnh sản phẩm",
            ],
          },
        ],
      },
      {
        name: "Tuyển dụng, việc làm",
        rules: [
          {
            name: "Tuyển dụng, việc làm",
            type: "keywords",
            keywords: [
              "tuyển vị trí",
              "việc làm",
              "tuyển dụng",
              "remote job",
              "part time job",
            ],
          },
        ],
      },
      {
        name: "Chung cư, hội cư dân",
        rules: [
          {
            name: "Chung cư, hội cư dân",
            type: "keywords",
            keywords: [
              "smart city",
              "grand park",
              "cư dân",
              "eco park",
              "ecopark",
              "vinhomes",
              "masteri",
            ],
          },
        ],
      },
    ],
  },
  shopping: {
    name: "Shopping",
    mode: "include",
    components: {
      stories: false,
      reels: false,
      friendPosts: false,
      groupPosts: true,
      pagePosts: true,
      sponsoredPosts: false,
      friendSuggestions: false,
      postSuggestions: false,
      groupSuggestions: false,
    },
    filters: [
      {
        name: "Rao vặt",
        rules: [
          {
            name: "Rao vặt",
            type: "keywords",
            keywords: [
              "trả góp",
              "cần tiền",
              "bán gấp",
              "tiền gấp",
              "cần mua",
              "cần bán",
              "cho thuê",
              "cần cho thuê",
              "thanh lý",
              "săn sale",
              "giảm giá",
              "khuyến mãi",
            ],
          },
        ],
      },
      {
        name: "Mua bán, cho thuê chung cư",
        rules: [
          {
            name: "Mua bán, cho thuê chung cư",
            type: "keywords",
            keywords: [
              "cho thuê",
              "chuyển nhượng",
              "/tháng",
              "chính chủ",
              "cần nhượng",
              "phòng studio",
            ],
          },
        ],
      },
      {
        name: "Bất động sản",
        rules: [
          {
            name: "R1: Bất động sản",
            type: "keywords",
            keywords: [
              "bất động sản",
              "bds",
              "bđs",
              "mặt đường",
              "thổ cư",
              "chính chủ",
            ],
          },
        ],
      },
    ],
  },
  vinsmart: {
    name: "VinSmart",
    mode: "include",
    components: {
      stories: false,
      reels: false,
      friendPosts: true,
      groupPosts: true,
      pagePosts: true,
      sponsoredPosts: false,
      friendSuggestions: false,
      postSuggestions: false,
      groupSuggestions: false,
    },
    filters: [
      {
        name: "Chung cư, hội cư dân",
        rules: [
          {
            name: "Chung cư, hội cư dân",
            type: "keywords",
            keywords: [
              "smart city",
              "grand park",
              "cư dân",
              "eco park",
              "ecopark",
              "vinhomes",
              "masteri",
              "cộng đồng",
            ],
          },
        ],
      },
    ],
  },
  investment: {
    name: "Investment",
    mode: "include",
    components: {
      stories: false,
      reels: false,
      friendPosts: true,
      groupPosts: true,
      pagePosts: true,
      sponsoredPosts: false,
      friendSuggestions: false,
      postSuggestions: false,
      groupSuggestions: false,
    },
    filters: [
      {
        name: "Đầu tư, chứng khoán",
        rules: [
          {
            name: "Đầu tư, chứng khoán",
            type: "keywords",
            keywords: [
              "đầu tư",
              "chứng khoán",
              "cổ phiếu",
              "bitcoin",
              "vàng",
              "tỷ giá",
              "tài chính",
              "thị trường",
              "simplize",
              "vietstock",
              "cafef",
              "vn index",
              "vn-index",
              "dowjones",
              "lạm phát",
              "fed",
              "lãi suất",
              "ngân hàng",
              "dòng tiền",
              "nguồn vốn",
              "tăng trần",
              "giảm sàn",
              "up trend",
              "down trend",
              "sóng hồi",
              "phân tích cơ bản",
              "phân tích kỹ thuật",
              "góc nhìn",
            ],
          },
        ],
      },
    ],
  },
};

const termI18n = {
  sponsored: {
    en: 'Sponsored',
    vi: 'Được tài trợ',
  },
  suggested: {
    en: 'Suggested',
    vi: 'Gợi ý'
  },
}

const localStore = {
  currentProfile: null,
  profileKeywords: null,
  newsFeedObserver: null,
  debug: false,
};

const newsFeed = document.querySelector("span#ssrb_feed_start + div > div");

const shouldHidePost = (post, profile) => {
  const filterFunction =
    profile.mode === "exclude"
      ? shouldHidePostWithExcludeFilter
      : shouldHidePostWithIncludeFilter;
  return filterFunction(post, profile);
};

const shouldHidePostWithExcludeFilter = (post, profile) => {
  if (profile.components.sponsoredPosts && post.isSponsoredPost)
    return {
      matched: true, term: "sponsoredPosts"};
  if (profile.components.reels && post.isReel) return {
    matched: true, term: "reels"};
  if (profile.components.stories && post.isStory) return {
    matched: true, term: "stories"};
  if (profile.components.friendPosts && post.isFriendPost) return {
    matched: true, term: "friendPosts"};
  if (profile.components.groupPosts && post.isGroupPost) return {
    matched: true, term: "groupPosts"};
  if (profile.components.pagePosts && post.isPagePost) return {
    matched: true, term: "pagePosts"};
  if (profile.components.friendSuggestions && post.isFriendSuggestion)
    return {
      matched: true, term: "friendSuggestions"};
  if (profile.components.groupSuggestions && post.isGroupSuggestion)
    return {
      matched: true, term: "groupSuggestions"};
  if (profile.components.postSuggestions && post.isPostSuggestion)
    return {
      matched: true, term: "postSuggestions"};

  if (!localStore.profileKeywords) {
    localStore.profileKeywords = profile.filters.flatMap((filter) =>
      filter.rules.flatMap((rules) => rules.keywords)
    );
  }

  if (!post.postRawText) return {matched: false};

  for (const keyword of localStore.profileKeywords) {
    if (post.authorName?.toLowerCase().includes(keyword)) return {
      matched: true, term: keyword};
    if (post.postContent?.toLowerCase().includes(keyword)) return {
      matched: true, term: keyword};
  }

  return {matched: false};
};

const shouldHidePostWithIncludeFilter = (post, profile) => {
  const {matched: excludeMatched, term} = shouldHidePostWithExcludeFilter(post, profile);
  return {
    matched: !excludeMatched,
    term,
  }
};

const matchTerm = (text, term) => {
  for (localTerm of Object.values(termI18n[term])) {
    if (text.includes(localTerm)) return true;
  }

  return false;
}

const detectPost = (postHTMLNode) => {
  // Skip empty nodes
  if (!postHTMLNode.querySelector) return null;

  // Get author name & post content to check content type
  const postRawText = postHTMLNode.innerText;
  const authorName = postHTMLNode.querySelector("span > h4")?.innerText;
  const postContent = postHTMLNode.querySelector("div[dir='auto']")?.innerText;

  const isSuggestedPost = matchTerm(postRawText, "suggested");

  const useTag = postHTMLNode.querySelector("use");
  const postTypeCodeId = useTag && useTag.attributes["xlink:href"].value;
  const isSponsoredPost =
    postTypeCodeId &&
    matchTerm(document.querySelector(postTypeCodeId).textContent, "sponsored");

  const isReel = postRawText.includes("Reels");

  return {
    authorName,
    postContent,
    postRawText,
    isFriendPost: false,
    isGroupPost: false,
    isPagePost: false,
    isReel,
    isStory: false,
    isSponsoredPost,
    isFriendSuggestion: isSuggestedPost,
    isGroupSuggestion: isSuggestedPost,
    isPostSuggestion: isSuggestedPost,
  };
};

const filterPost = (postHTMLNode, profile) => {
  const post = detectPost(postHTMLNode);
  if (!post || !post.postRawText?.trim()) return;

  const {matched: filterMatched, term} = shouldHidePost(post, profile);
  if (filterMatched) 
    hidePost(postHTMLNode, post);

  let label = "";
  if (profile.mode === "exclude")
    label = filterMatched ? `Hide: Matched exclude filter for: ${term}` : `Show: Not match exclude filter`;
  else 
    label = filterMatched ? `Hide: Not match include filter` : `Show: Matched include filter for: ${term}`;
  decoratePost(postHTMLNode, filterMatched, label)
};

const hidePost = (postHTMLNode, post) => {
  if (localStore.debug) {
    console.log(
      "%cHided a post from: " + post.authorName,
      "background-color: yellow"
    );
    console.log("Content: ", post.postContent);
  } else postHTMLNode.style.display = "none";
};

const decoratePost = (postHTMLNode, isHide, label) => {
  const cardHTMLNode = postHTMLNode.childNodes[0].childNodes[0].childNodes[0];
  if (!cardHTMLNode) return;
  const indicatorColor = isHide ? "red" : "green";
  cardHTMLNode.style.border = `2px solid ${indicatorColor}`;

  const matchedLabelNode = document.createElement("p");
  matchedLabelNode.innerHTML = `<strong style="padding-left: 20px; color: ${indicatorColor}">${label}</strong>`;
  cardHTMLNode.appendChild(matchedLabelNode);
}

const filterPosts = (postNodes, profile) => {
  postNodes.forEach((postHTMLNode) => filterPost(postHTMLNode, profile));
};

const onPostChangeListener = (mutationList, observer) => {
  if (!localStore.currentProfile) return;

  for (const mutation of mutationList) {
    if (mutation.addedNodes.length === 0) continue;
    filterPosts(mutation.addedNodes, localStore.currentProfile);
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { name, data } = request;
  switch (name) {
    case "CHANGE_PROFILE":
      return handleChangeProfile(data, sendResponse);
    case "GET_PROFILE":
      return handleGetProfile(data, sendResponse);
  }
});

const handleChangeProfile = (data, callback) => {
  if (data.profile === "none") {
    localStore.currentProfile = null;
    localStore.newsFeedObserver.disconnect();
    // window.location.reload();
    return {
      success: true,
      profile: {
        name: "Off",
      },
    };
  }

  localStore.currentProfile = profiles[data.profile] || profiles.focus;
  localStore.profileKeywords = null;
  if (!localStore.newsFeedObserver) {
    localStore.newsFeedObserver = new MutationObserver(onPostChangeListener);
    localStore.newsFeedObserver.observe(newsFeed, { childList: true });
  }

  filterPosts(newsFeed.childNodes, localStore.currentProfile);
  // window.location.reload();
  callback({
    success: true,
    profile: localStore.currentProfile,
  });
};

const handleGetProfile = (data, callback) => {
  callback({
    success: true,
    profile: profiles[data.profile] || profiles.focus,
  });
};
