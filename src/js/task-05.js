const input = document.getElementById("name-input");
input.addEventListener("input", (e) => {
  document.getElementById("name-output").textContent = e.target.value;
  if (e.target.value === "")
    document.getElementById("name-output").textContent = "Anonymous";
});