// Массив пользователей (пример 7 пользователей)
const users = [
  { login: "user1", password: "pass1", name: "Гамао" },
  { login: "user2", password: "pass2", name: "Артур пирожков" },
  { login: "user3", password: "pass3", name: "Сергей пельменов" },
  { login: "student", password: "qwerty", name: "Мария цымбалова" },
];

const form = document.getElementById("auth-form");
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

function showMessage(text, type) {
  message.textContent = text;
  message.className = "msg " + (type === "success" ? "success" : "error");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const login = loginInput.value.trim();
  const password = passwordInput.value;

  const user = users.find(function (u) {
    return u.login === login && u.password === password;
  });

  if (user) {
    showMessage("Добро пожаловать, " + user.name + "!", "success");
  } else {
    showMessage("Неверный логин или пароль", "error");
  }
});

[loginInput, passwordInput].forEach(function (el) {
  el.addEventListener("input", function () {
    if (message.textContent) {
      message.textContent = "";
      message.className = "msg";
    }
  });
});

