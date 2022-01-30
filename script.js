const nav = document.querySelector("#header");
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });

const footer = document.querySelector("#footer");
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
function showAboutPost() {
  var postId = 0;
  var postBox = document.getElementById("postbox");
  fetch("posts.json")
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
}
