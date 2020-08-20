const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
show.addEventListener('click', active);
function active(){
  if(input.type === "password"){
    input.type = "text";
    show.style.color = "#1DA1F2";
    show.textContent = "HIDE";
  }else{
    input.type = "password";
    show.textContent = "SHOW";
    show.style.color = "#111";
  }
}