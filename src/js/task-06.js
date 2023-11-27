const input = document.querySelector("#validation-input");
input.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(input.getAttribute("data-length")))
    input.className = "valid";
  else input.className = "invalid";
  input.classLi;
  console.log(e.target.value.length);
  console.log(input.getAttribute("data-length"));
});