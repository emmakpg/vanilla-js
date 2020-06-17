btnText = document.getElementById("get-text");
btnUsers = document.getElementById("getUsers");
btnPosts = document.getElementById("getPosts");
form = document.getElementById("addPost");

btnText.addEventListener("click", getText);
btnUsers.addEventListener("click", getUsers);
btnPosts.addEventListener("click", getPosts);
form.addEventListener("submit", addPost);

function getText() {
  /*   fetch("fetch.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    }); */

  fetch("fetch.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("disp").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("user.json")
    .then((res) => res.json())
    .then((data) => {
      let disp = "<h2>Users</h2>";
      data.forEach(function (user) {
        disp += `
        <ul class="list-group mb-3">
        <li class="list-group-item">Name: ${user.firstName} ${user.lastName}</li>
        <li class="list-group-item">Gender: ${user.gender}</li>
        <li class="list-group-item">Age: ${user.age}</li>
        </ul>
        `;
      });

      document.getElementById("disp").innerHTML = disp;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let disp = "<h2 class='mb-4'>Posts</h2>";
      data.forEach(function (post) {
        disp += `
        <div class="card card-body mb-3">
        <h3>${post.title}</h3>
        <p> ${post.body}</p> 
        </div>
        `;
      });
      document.getElementById("disp").innerHTML = disp;
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let post = document.getElementById("post").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: post }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
