const { cp } = require("fs/promises");

function submitRegister() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const a = "a";
  analytics.track("ui.sign_page.regiter_button.click param", {
    login : login
  });
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  const url =
    "https://server-ift-test.herokuapp.com/auth/signup?username=" +
    login +
    "&password=" +
    password;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      analytics.identify(result, { username: login });
      analytics.track("Sign in", { id: result });
      console.log(result);
      document.cookie = "id=" + result;
      document.cookie = "username=" + login;
    })
    .catch((error) => console.log("error", error));
}
function submitLogin() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  const url =
    "https://server-ift-test.herokuapp.com/auth/signin?username=" +
    login +
    "&password=" +
    password;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      analytics.identify(result, { username: login });
      analytics.track("Login", { id: result });
      console.log(result);
      document.cookie = "id=" + result;
      document.cookie = "username=" + login;
    })
    .catch((error) => console.log("error", error));
}
function submitLogout() {
  document.cookie = "username=; Max-Age=0";
  document.cookie = "id=; Max-Age=0";
  document.cookie = "flight=; Max-Age=0";
  analytics.track("Logout");
  analytics.reset();
}
