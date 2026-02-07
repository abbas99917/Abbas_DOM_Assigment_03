// 1. Select the image
let img = document.getElementById("myImage");

// 2. Get the value of src attribute
let imgSrc = img.getAttribute("src");
console.log(imgSrc);


// step no: 02
function changeImage() {
  let img = document.getElementById("myImage");
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxbhQpDEuFsnVwrYGw3432VO3RCI_hVo71A&s";
}



//STEP NO: 03
let input = document.getElementById("nameInput");
input.setAttribute("placeholder", "Enter your name");




//STEP NO: 04
function enableInput() {
  let input = document.getElementById("myInput");
  input.removeAttribute("disabled");
}


//STEP NO: 05
let para = document.getElementById("para1");
let hasClass = para.hasAttribute("class");
console.log(hasClass);



function changeLink() {
  let link = document.getElementById("myLink");
  link.setAttribute("href", "https://youtube.com");
}
