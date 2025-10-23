/**
 * * * *
 * * * *
 * * * *
 * * * *
 */

function squarePattern(ntimes) {
  for (let i = 0; i < ntimes; i++) {
    let str = "";
    for (let j = 0; j < ntimes; j++) {
      str = str + " * ";
    }
    console.log(str);
  }
}

/**
 *
 * *
 * * *
 * * * *
 */

function rightAngleTrianglePattern(ntimes) {
  for (let i = 0; i < ntimes; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " * ";
    }
    console.log(row);
  }
}

/**
 * * * *
 * * *
 * *
 *
 */

function reverseRightAngleTrianglePattern(ntimes) {
  for (let i = 0; i < ntimes; i++) {
    let row = "";
    for (let j = 0; j < ntimes - i; j++) {
      row = row + " * ";
    }
    console.log(row);
  }
}

/**
 *
 * *
 * * *
 * * * *
 * * * * *
 */

function rightAlignedRightAngleTriangle(ntimes) {
  for (let row = 0; row < ntimes; row++) {
    let pattern = "";
    for (let space = 0; space < ntimes - (row + 1); space++) {
      pattern = pattern + " ";
    }
    for (let col = 0; col <= row; col++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}

/**
     *
    * *
   * * *
  * * * *
 * * * * *

 */

function triangle(ntimes) {
  for (let row = 0; row < ntimes; row++) {
    let pattern = "";
    for (let space = 0; space < ntimes - (row + 1); space++) {
      pattern = pattern + " ";
    }
    for (let col = 0; col <= row; col++) {
      pattern = pattern + " *";
    }
    console.log(pattern);
  }
}
//function calls here

// rightAngleTrianglePattern(10);
// squarePattern(30);
// reverseRightAngleTrianglePattern(21);
rightAlignedRightAngleTriangle(8);
// triangle(10);
