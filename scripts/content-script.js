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
            ]
          }
        ]
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
              "phòng studio"
            ]
          }
        ]
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
              "chính chủ"
            ]
          }
        ]
      },
      {
        name: "Mẫu ảnh, nháy và mẫu",
        rules: [
          {
            name: "Giao lưu ảnh",
            type: "keywords",
            keywords: [
              "giao lưu phó",
              "mẫu ảnh",
              "chụp sản phẩm",
              "mẫu chụp",
              "thợ chụp ảnh",
              "freelance",
              "lookbook",
              "đi đâu chụp hình",
              "nhiếp ảnh",
              "chụp ảnh sản phẩm"
            ]
          }
        ]
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
            ]
          }
        ]
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
            ]
          }
        ]
      },
    ]
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
      sponsoredPosts: true,
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
            ]
          }
        ]
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
              "phòng studio"
            ]
          }
        ]
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
              "chính chủ"
            ]
          }
        ]
      },
    ]
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
            ]
          }
        ]
      },
    ]
  },
};

const localStore = {
  currentProfile:  null,
  profileKeywords: null,
  newsFeedObserver: null,
};

const newsFeed = document.querySelector("span#ssrb_feed_start + div > div");

const shouldHidePost = (post, profile) => {
  const filterFunction = profile.mode === "exclude" ? shouldHidePostWithExcludeFilter : shouldHidePostWithIncludeFilter;
  return filterFunction(post, profile);
};

const shouldHidePostWithExcludeFilter = (post, profile) => {
  if (profile.components.sponsoredPosts && post.isSponsoredPost) return true;
  if (profile.components.reels && post.isReel) return true;
  if (profile.components.stories && post.isStory) return true;
  if (profile.components.friendPosts && post.isFriendPost) return true;
  if (profile.components.groupPosts && post.isGroupPost) return true;
  if (profile.components.pagePosts && post.isPagePost) return true;
  if (profile.components.friendSuggestions && post.isFriendSuggestion) return true;
  if (profile.components.groupSuggestions && post.isGroupSuggestion) return true;
  if (profile.components.postSuggestions && post.isPostSuggestion) return true;

  if (!localStore.profileKeywords) {
    // console.log("Set profile keywords: ");
    localStore.profileKeywords = profile.filters.flatMap(filter => filter.rules.flatMap(rules => rules.keywords));
    // console.log(localStore.profileKeywords);
  }

  if (!post.postRawText) return false;

  for (const keyword of localStore.profileKeywords) {
    if (post.authorName.toLowerCase().includes(keyword)) return true;
    if (post.postContent.toLowerCase().includes(keyword)) return true;
  }

  return false;
};

const shouldHidePostWithIncludeFilter = (post, profile) => {
  return !shouldHidePostWithExcludeFilter(post, profile);
};

const detectPost = postHTMLNode => {
   // Skip empty nodes
  if (!postHTMLNode.querySelector) return null;

  // Get author name & post content to check content type
  const postRawText = postHTMLNode.innerText;
  const authorName = postHTMLNode.querySelector("span > h4")?.innerText;
  const postContent = postHTMLNode.querySelector("div[dir='auto']")?.innerText;

  const postName = postHTMLNode
    .querySelector("span:has(use)")
    ?.innerText.replace(/[\n·]/g, "")
    .trim();
  const postIndicator = postHTMLNode
  .querySelector("div span:not(:has(*))")
  ?.innerText
  const isSuggestedPost = postIndicator && (postIndicator.includes("Suggest") || postIndicator.includes("Gợi ý"))
  const isSponsoredPost = postName === "";

  const isReel = postRawText.includes("Reels")

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
  }
}

const filterPost = (postHTMLNode, profile) => {
  const post = detectPost(postHTMLNode);
  if (!post || !post.postRawText?.trim()) return;

  if (shouldHidePost(post, profile)) {
    hidePost(postHTMLNode);
    console.log(
      "%cHided a post from: " + post.authorName,
      "background-color: yellow"
    );
    console.log("Content: ", post.postContent);
  }
};

const hidePost = (postHTMLNode) => {
  postHTMLNode.style.display = "none";
  postHTMLNode.style.textDecoration = "line-through";
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
    case 'CHANGE_PROFILE':
      return handleChangeProfile(data, sendResponse);
    case 'GET_PROFILE':
      return handleGetProfile(data, sendResponse);
  }
});

const handleChangeProfile = (data, callback) => {
  if (data.profile === "none") {
    console.log("stop")
    localStore.currentProfile = null;
    localStore.newsFeedObserver.disconnect();
    return {
      success: true,
      profile: {
        name: "Off"
      }
    };
  }

  localStore.currentProfile = profiles[data.profile] || profiles.focus;
  localStore.profileKeywords = null;
  if (!localStore.newsFeedObserver) {
    localStore.newsFeedObserver = new MutationObserver(onPostChangeListener);
    localStore.newsFeedObserver.observe(newsFeed, { childList: true });
  }

  filterPosts(newsFeed.childNodes, localStore.currentProfile);

  callback({
    success: true,
    profile: localStore.currentProfile
  });
};

const handleGetProfile = (data, callback) => {
  callback({
    success: true,
    profile: profiles[data.profile] || profiles.focus,
  });
};
