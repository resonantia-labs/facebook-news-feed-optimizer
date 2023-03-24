const keywords = [
  "smart city",
  "eco park",
  "ecopark",
  "cho thuê",
  "chuyển nhượng",
  "mua bán",
  "/tháng",
  "giá",
  "chính chủ",
  "cư dân",
];

const shouldHide = (authorName, postContent) => {
  const lowerCaseAuthorName = authorName.toLowerCase();
  const lowerCasePostContent = postContent.toLowerCase();

  for (const keyword of keywords) {
    if (lowerCaseAuthorName.includes(keyword)) return true;
    if (lowerCasePostContent.includes(keyword)) return true;
  }

  return false;
};

const filterPost = (post) => {
  // Skip empty nodes
  if (!post.querySelector) return;

  // Get author name & post content to check content type
  const authorName = post.querySelector("span > h4")?.innerText;
  const postContent = post.querySelector("div[dir='auto']")?.innerText;
  const postName = post
    .querySelector("span:has(use)")
    ?.innerText.replace(/[\n·]/g, "")
    .trim();
  const isSuggestedPost = post
    .querySelector("div span:not(:has(*))")
    ?.innerText.includes("Suggested for");
  const isSponsoredPost = postName === "";

  // Skip empty posts
  if (!authorName || !postContent) return;

  // Remove posts if it doesn't match the current profile
  if (
    isSponsoredPost ||
    isSuggestedPost ||
    !shouldHide(authorName, postContent)
  ) {
    console.log(
      "%cHided a post from: " + authorName,
      "background-color: yellow"
    );
    console.log("Content: ", postContent);
    post.style.display = "none";
  }
};

const filterPosts = (postNodes) => {
  postNodes.forEach((post) => filterPost(post));
};

const onPostChangeListener = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.addedNodes.length === 0) continue;
    filterPosts(mutation.addedNodes);
  }
};

const newsFeed = document.querySelector("span#ssrb_feed_start + div > div");
filterPosts(newsFeed.childNodes);
const newsFeedObserver = new MutationObserver(onPostChangeListener);
newsFeedObserver.observe(newsFeed, { childList: true });
