const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const errorText = document.querySelector(".error")
const signup = document.querySelector("#signup");

function loadText() {
	let url = "https://devweb-api.herokuapp.com/signup";
	let username = inputUsername.value;
	let password = inputPassword.value;

  if (username == "" || password == "") return

	fetch(url, { method: "POST", body: JSON.stringify({password, username}), headers: {"Content-type": "application/json"} })
		.then((response) => response.json())
		.then((user) => {
			if (user.error) {
        errorText.textContent = user.error
      } else {
			  window.location.href = "../login/index.html";
      }
		});
}

signup.addEventListener("click", loadText);
