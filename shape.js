console.log("Shape Converter 🚀");

let box = document.querySelector(".container");
// console.log(box)

let shapes = document.getElementById("shape");
// console.log(shapes)

let circle = document.getElementById("circle");
// console.log(circle)

let square = document.getElementById("square");
// console.log(square)

let triangle = document.getElementById("triangle");
// console.log(triangle)

circle.addEventListener("click", convert_circle);
square.addEventListener("click", convert_square);
triangle.addEventListener("click", convert_triangle);

function convert_circle(e) {
  let new_shape = document.createElement("main");
  
  new_shape.id = "circle2";
  
  new_shape.style.cssText = `display: block;
    margin-left: 14rem;
    margin-top: 149px;
    background: blue;
    border-radius: 50%;
    width: 100px;
    height: 100px;`

  shapes.replaceWith(new_shape);
  console.log("Converted to circle 🟢");
}

function convert_square(e) {
  let new_shape = document.createElement("main");
  
  new_shape.id = "square2";
  
  new_shape.style.cssText = `display: block;
    margin-left: 14rem;
    margin-top: 149px;
    background: blue;
    width: 100px;
    height: 100px;`

  shapes.replaceWith(new_shape);
  console.log("Converted to square 🟦");
}

function convert_triangle(e) {
  let new_shape = document.createElement("main");
  
  new_shape.id = "traingle2";
  
  new_shape.style.cssText = `display: block;
    margin-left: 14rem;
    margin-top: 149px;
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 80px solid lightblue;`

  shapes.replaceWith(new_shape);
  console.log("Converted to triangle 🔺");
}


