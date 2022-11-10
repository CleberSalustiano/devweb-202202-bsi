const token = localStorage.getItem("token");
const sair = document.querySelector("#sair");
const usernameEntrada = document.querySelector("#username");
const posts = document.querySelector(".posts");

let url = "https://devweb-api.herokuapp.com/";

fetch(url, {
	method: "GET",
	headers: {
		"Content-type": "application/json",
		Authorization: "Bearer " + token,
	},
})
	.then((response) => response.json())
	.then((data) => {
		if (!data.error) {
			usernameEntrada.textContent = data.user.username;
			let html = "";

			data.posts.map((post) => {
				html += `
      <div>
        <h2>Titulo: ${post.title}</h2>
        <p>Paragrafo: ${post.paragraph}</p>
        <p>User: ${post.username}</p>
      </div>
    `;
			});

			posts.innerHTML = html;
		} else {
			window.location.href = "../login/index.html";
		}
	});

sair.addEventListener("click", () => {
  localStorage.setItem("token", "");
  window.location.href = "../login/index.html";
})