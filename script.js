let btn = document.querySelector(".BookmarkForm");
btn.addEventListener("submit", saveBookmark);
console.log(btn);

function saveBookmark() {
  let siteName = document.querySelector("#siteName").value;
  let siteURL = document.querySelector("#siteURL").value;
  let bookmark = {
    name: siteName,
    URL: siteURL,
  };

  // localStorage.setItem("test","Hello World")
  // console.log(localStorage.getItem("test"));
  // localStorage.removeItem("test")
  // console.log(localStorage.getItem("test"));

  if (localStorage.getItem("bookmarks") === null) {
    let bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  console.log(bookmark);
  
}
