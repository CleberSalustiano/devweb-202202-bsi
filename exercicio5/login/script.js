const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const errorText = document.querySelector(".error")
const signin = document.querySelector("#signin");

function loadText() {
	let url = "https://devweb-api.herokuapp.com/session";
	let username = inputUsername.value;
	let password = inputPassword.value;

	fetch(url, { method: "POST", body: JSON.stringify({password, username}), headers: {"Content-type": "application/json"} })
		.then((response) => response.json())
		.then((user) => {
			if (user.token) {
        console.log(user.token)
				localStorage.setItem("token", user.token);
				window.location.href = "../home/index.html";
			} else {
				errorText.textContent = user.error
			}
		});
}

signin.addEventListener("click", loadText);
