var postdata = getPosts();
window.onload = function() {
postlist = document.querySelector("#postlist")
if (getQueryVariable("postid") == false) {
  listAllPosts(postlist);
  console.log("has not found postid variable")
}
if (! getQueryVariable("postid") == false) {
  postdata.then((value) => {
    postlist.innerHTML = value.Posts[getQueryVariable("postid")].title;
    console.log("found postid variable")
  })
} else {
  
}
}
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

function findByKey(key, value) {
  return (item, i) => item[key] === value;
}



async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();
  return data;
}
postdata.then((value) => {
  console.log(value)
})

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function listAllPosts(container) {
  postdata.then((value) => {
    for (let i = 0; i < value.Posts.length; i++) {
      var id = value.Posts[i].id - 1;
      var title = value.Posts[i].title;
      var author = value.Posts[i].author;
      var image = value.Posts[i].img;
      var date = value.Posts[i].pubDate;
      var time = value.Posts[i].pubTime;
      var content = value.Posts[i].content;
      console.log(id, title, author, image, date, time, content);
      var code = '<a href="?postid=' + id + '"><h2>' + title + '</h2></a><h3>Posted by ' + author + ' on ' + date + ' at ' + time + '</h3><img src="' + image + '" /><p>' + content + '</p>'
      container.innerHTML += code;
    }
    }
)
  }


// function showAboutPost() {
//   var postId = 0;
//   var postBox = document.getElementById("postbox");
//   fetch("posts.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.Posts);
//       postBox.innerHTML =
//         "<h2>" +
//         data.Posts[postId].title +
//         "</h2>" +
//         "<p>By " +
//         data.Posts[postId].author +
//         "</p>" +
//         "<p>Posted on " +
//         data.Posts[postId].pubDate +
//         " at " +
//         data.Posts[postId].pubTime +
//         "</p>" +
//         '<img class="pfp" src="' +
//         data.Posts[postId].img +
//         '" alt=""/><div class="txt-box"><p>' +
//         data.Posts[postId].content +
//         "</p></div>";
//     });
//  }