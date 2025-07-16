import { merge } from "./merge";

function checkResult(testName: string, actual: number[]) {

    if (isAscending(actual)) {
        console.log(`${testName}: Pass`);
    } else {
        console.log(`${testName}: Fail`);
        console.log("Output: ", actual.join(","));
    }
}

function isAscending(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false; // found a pair out of order
      }
    }
    return true; // all pairs in order
  }

let test1_1: number [] = [3, 5, 7];
let test1_2: number [] = [9, 5, 2];  
let test1_3: number [] = [4, 6, 10];

const result1 = merge(test1_1, test1_2, test1_3);
checkResult("Test 1", result1);
console.log("Result : "+result1.join(", ")+"\n======");

let test2_1: number[] = [0, 1, 6, 12, 19];
let test2_2: number[] = [71, 58, 26, 11, 0];
let test2_3: number[] = [2, 5, 7, 14, 20];
const result2 = merge(test2_1, test2_2, test2_3);
checkResult("Test 2", result2);
console.log("Result : "+result2.join(", ")+"\n======");

let test3_1: number[] = [1, 2, 3];
let test3_2: number[] = [];
let test3_3: number[] = [4, 5, 6];
const result3 = merge(test3_1, test3_2, test3_3);
checkResult("Test 3", result3);
console.log("Result : "+result3.join(", ")+"\n======");

let test4_1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let test4_2: number[] = [];
let test4_3: number[] = [4, 5, 6];
const result4 = merge(test4_1, test4_2, test4_3);
checkResult("Test 4", result4);
console.log("Result : "+result4.join(", ")+"\n======");