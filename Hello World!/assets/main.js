document.querySelector("#show").addEventListener("click", (e) => {
  document.querySelector("#disp_name").innerHTML = document.querySelector("input").value;
  console.log(document.querySelector("input").value);
});
