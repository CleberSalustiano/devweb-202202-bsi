const token = localStorage.getItem("token");
const usernameEntrada = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const paragraphInput = document.querySelector("#paragraph");
const criarPostButton = document.querySelector("#criar");
const errorText = document.querySelector(".error")

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
		console.log(data);
		if (!data.error) {
			usernameEntrada.textContent = data.user.username;
		} else {
			window.location.href = "../login/index.html";
		}
	});

criarPostButton.addEventListener("click", () => {
	const title = titleInput.value;
	const paragraph = paragraphInput.value;

	if (title === "" || paragraph === "") {
    errorText.textContent = "Preencha os campos para criar um post"
    return
  };
	url = "https://devweb-api.herokuapp.com/post";
	fetch(url, {
		method: "POST",
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
