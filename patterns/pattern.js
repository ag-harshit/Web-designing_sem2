

const n = 5; 


// 1. SIMPLE PYRAMID

function simplePyramid(n) {
  console.log("--- Simple Pyramid ---");
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i).trimEnd());
  }
}
simplePyramid(n);



// 2. 

function flippedSimplePyramid(n) {
  console.log("\n--- Flipped Simple Pyramid ---");
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trimEnd());
  }
}
flippedSimplePyramid(n);



// 3. 

function invertedPyramid(n) {
  console.log("\n--- Inverted Pyramid ---");
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i).trimEnd());
  }
}
invertedPyramid(n);



// 4. 

function flippedInvertedPyramid(n) {
  console.log("\n--- Flipped Inverted Pyramid ---");
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trimEnd());
  }
}
flippedInvertedPyramid(n);



// 5. 

function triangle(n) {
  console.log("\n--- Triangle ---");
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i).trimEnd());
  }
}
triangle(n);