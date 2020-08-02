const postContainer = document.getElementById("post-container");
const filterInput = document.getElementById("input");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const loader = document.querySelector(".loader");

let limit = 5;
let page = 1;

//fetch posts

async function getPosts() {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();

  return data;
}

//show posts in DOM
async function showPosts() {
  const posts = await getPosts();

  //console.log(posts);

  postContainer.innerHTML += posts
    .map(
      (post) => `
  <div class="post">
        <div class="number">${post["id"]}</div>
        <div class="post-info">
          <h2 class="post-title">${post["title"]}</h2>
          <p class="post-body">
          ${post["body"]}
          </p>
        </div>
      </div>`
    )
    .join("");
}

showPosts();

function filterPosts(e) {
  const searchTerm = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    // console.log(title);

    if (title.indexOf(searchTerm) > -1 || body.indexOf(searchTerm) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });

  console.log(posts);
}

//event listener for scroll action
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loader.classList.add("show");
    page += 1;

    setTimeout(() => {
      loader.classList.remove("show");

      setTimeout(() => {
        showPosts();
      }, 300);
    }, 1000);
  } else {
    loader.classList.remove("show");
  }
});

//event listener to filter posts
filter.addEventListener("input", filterPosts);
