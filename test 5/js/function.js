// Get element by Id
function getById(id) {
    const myId = document.getElementById(id);
    return myId;
  }
  
  // calculate function
  
  function calculateValue(input1, input2, result, type) {
    const tBsae = getById(input1).value;
    const tHeight = getById(input2).value;
    if (!Number(tBsae) > 0 || tBsae < 0 || !Number(tHeight) > 0 || tHeight < 0) {
      return alert("please provide a valid positive number");
    }
    let calculateValue;
    let count;
    if (type == "Triangle") {
      calculateValue = 0.5 * tBsae * tHeight;
      count = 1;
    } else if (type == "Rectangle") {
      calculateValue = tBsae * tHeight;
      count = 2;
    } else if (type == "Parallelogram") {
      calculateValue = tBsae * tHeight;
      count = 3;
    } else if (type == "Rhombus") {
      calculateValue = 0.5 * tBsae * tHeight;
      count = 4;
    } else if (type == "Pentagon") {
      calculateValue = 0.5 * tBsae * tHeight;
      count = 5;
    } else if (type == "Ellipse") {
      calculateValue = 3.1416 * tBsae * tHeight;
      count = 6;
    }
  
    getById(
      result
    ).innerHTML = `<span class="flex single-value"><h3 class="mx-1">${count}.${type} ${calculateValue.toFixed(
      2
    )}cm <sup>2</sup></h3><button class="text-1xl
     text-white bg-blue-500 px-2 ml-4 rounded-md hover:bg-pink-700">Convert to m<sup>2</sup></button></span>`;
  }
  // Add event listener function
  function eventListener(btn, input1, input2, result, type) {
    getById(btn).addEventListener("click", function () {
      calculateValue(input1, input2, result, type);
    });
  }
  
  // call eventListener function
  eventListener(
    "btn-triangle",
    "triangle-base",
    "triangle-height",
    "t_value",
    "Triangle"
  );
  
  eventListener(
    "btn-rectangle",
    "rectangle-base",
    "rectangle-height",
    "r-value",
    "Rectangle"
  );
  eventListener(
    "btn-parallelogram",
    "parallelogram-base",
    "parallelogram-height",
    "p-value",
    "Parallelogram"
  );
  eventListener(
    "btn-Rhombus",
    "Rhombus-base",
    "Rhombus-height",
    "re-value",
    "Rhombus"
  );
  eventListener(
    "btn-Pentagon",
    "Pentagon-base",
    "Pentagon-height",
    "pe-value",
    "Pentagon"
  );
  eventListener(
    "btn-Ellipse",
    "Ellipse-base",
    "Ellipse-height",
    "e-value",
    "Ellipse"
  );
  
  // random color
  
  function addHoverEffect(divs) {
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function(event) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor; 
      });
    }
  }
  
  const hoverDivs = document.getElementsByClassName("hover-div");
  addHoverEffect(hoverDivs);
  