// navigation - menu
let navigationMenu = document.querySelectorAll('.nav-bar');
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY; // Vertical scroll position
  if (scrollPosition == 0) {
    navigationMenu[0].classList.remove('sticky')
  }
  else {
    navigationMenu[0].classList.add('sticky')
  }
});

// section-one
let animate_left = document.getElementById('left');
let animate_right = document.getElementById('right');

document.addEventListener("DOMContentLoaded", () => {
  animate_left.classList.add('animate');
  animate_right.classList.add('animate');
})

// section-two
let section_two = document.querySelectorAll(".section-two")

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  // console.log(scroll);
  if (scroll >= 90) {
    section_two[0].classList.add('animate')
    section_two.animate.style.animationIterationCount = "infinite";
  }
  else {
    section_two[0].classList.remove('animate')
  }
});


// section-three

const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;
    console.log(this.value);
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc)
})

inputs.forEach(input => {
    input.addEventListener("blur", blurFunc)
})


