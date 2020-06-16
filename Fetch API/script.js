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
        <ul>
        <li>Name: ${user.firstName} ${user.lastName}</li>
        <li>Gender: ${user.gender}</li>
        <li>Age: ${user.age}</li>
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
      let disp = "<h2>Posts</h2>";
      data.forEach(function (post) {
        disp += `
        <div>
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
}
