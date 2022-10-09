const navButton = document.querySelector(".nav-button")
const navigationList = document.querySelector(".mobile-nav")
const body = document.body

navButton.addEventListener("click", function (event) {
  event.stopPropagation()
  navigationList.classList.toggle("mobile-nav-active")
  navButton.classList.toggle("nav-button-close")
  body.classList.toggle("no-scroll")
})

window.addEventListener("click", function() {
  if (body.classList.contains("no-scroll")) {
    navigationList.classList.toggle("mobile-nav-active")
    navButton.classList.toggle("nav-button-close")
    body.classList.toggle("no-scroll")
  }
})

navigationList.addEventListener("click", function (event) {
  event.stopPropagation()
})