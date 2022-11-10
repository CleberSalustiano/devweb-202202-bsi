const token = localStorage.getItem("token");
const sair = document.querySelector("#sair");
const usernameEntrada = document.querySelector("#username");
const posts = document.querySelector(".posts");
let url = "https://devweb-api.herokuapp.com/myPosts";

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

			data.user.posts.map((post) => {
				html += `
      <div id="${post.id}">
        <h2>Titulo: ${post.title}</h2>
        <p>Paragrafo: ${post.paragraph}</p>
        <p>User: ${post.username}</p>
        <p>
          <button class="delete" onclick="deletePost(${post.id})">Deletar</button>
          <button class="edit" onclick="editarPost(${post.id})">Editar</button>
        </p>
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

function deletePost(id) {
	url = `https://devweb-api.herokuapp.com/post/${id}`
	fetch(url, {
		method: "DELETE",
		headers: {
			"Content-type": "application/json",
			Authorization: "Bearer " + token,
		},
	})
	.then((response) => response.json())
	.then((data) => {
		if (data.error) {
			console.log(data.error)
		} else {
			window.location.href = "../meusPosts/index.html";
		}
	})
}

function editarPost(id) {
	localStorage.setItem("id_post", id);
	window.location.href = "../editar/index.html"
}