var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

var postId = 0;
var postBox = document.getElementById("postbox");
fetch("../posts.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.Posts);
    postBox.innerHTML =
      "<h2>" +
      data.Posts[postId].title +
      "</h2>" +
      "<p>By " +
      data.Posts[postId].author +
      "</p>" +
      "<p>Posted on " +
      data.Posts[postId].pubDate +
      " at " +
      data.Posts[postId].pubTime +
      "</p>" +
      '<img class="pfp" src="' +
      data.Posts[postId].img +
      '" alt=""/><div class="txt-box"><p>' +
      data.Posts[postId].content +
      "</p></div>";
  });
