const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  const obiect = {};
  e.preventDefault();
  const email = e.target.elements["email"];
  const password = e.target.elements["password"];
  if (email.value === "" || password.value === "")
    alert("Toate campurile trebuie completate!");
  else {
    obiect["email"] = email.value;
    obiect["password"] = password.value;
    console.log(obiect);
    e.target.reset();
  }
});
