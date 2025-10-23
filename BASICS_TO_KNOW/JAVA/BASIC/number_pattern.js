/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 *
 */

function rightAngleTriangleNumberPattern(ntimes) {
  for (let i = 1; i <= ntimes; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " " + j;
    }
    console.log(row);
  }
}

/**
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 *
 */

function rightAngleTriangleNumberPattern2(ntimes) {
  for (let i = 1; i <= ntimes; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row = row + " " + i;
    }
    console.log(row);
  }
}

/**
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */

function reverseRightAngleTrianglePatternNumber(ntimes) {
  for (let i = 0; i <= ntimes; i++) {
    let row = "";
    for (let j = 1; j <= ntimes - i; j++) {
      row = row + " " + j;
    }
    console.log(row);
  }
}

/*
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1

*/

function rightAngleTriangleBinaryNumber(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      row = row + " " + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

/*
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1

*/

function rightAngleTriangleBinaryNumber2(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + " " + toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }

    console.log(row);
  }
}

// rightAngleTriangleNumber(5);
// rightAngleTriangleNumber2(5);
// reverseRightAngleTrianglePatternNumber(10);
// rightAngleTriangleBinaryNumber(5);
rightAngleTriangleBinaryNumber2(5);
