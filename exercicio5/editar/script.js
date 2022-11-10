const token = localStorage.getItem("token");
const usernameEntrada = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const paragraphInput = document.querySelector("#paragraph");
const editarPostButton = document.querySelector("#editar");
const errorText = document.querySelector(".error")
const idPost = localStorage.getItem("id_post")

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
			const post = data.user.posts.find(post => post.id === +idPost)
			titleInput.value = post.title
			paragraphInput.value = post.paragraph
		} else {
			window.location.href = "../login/index.html";
		}
	});

editarPostButton.addEventListener("click", () => {
	const title = titleInput.value;
	const paragraph = paragraphInput.value;

	if (title === "" || paragraph === "") {
    errorText.textContent = "Preencha os campos para editar um post"
    return
  };
	url = `https://devweb-api.herokuapp.com/post/${idPost}`;
	fetch(url, {
		method: "PUT",
		body: JSON.stringify({ title, paragraph }),
		headers: {
			"Content-type": "application/json",
			Authorization: "Bearer " + token,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			window.location.href = "../meusPosts/index.html";
		});
});
