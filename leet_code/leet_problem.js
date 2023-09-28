// function duplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return -1;
// }

// console.log(duplicate([2, 5, 7, 8, 7, 3]));

function duplicate_value(arr) {
  // giving an arr  with n+1 element in the arr start from 1 ot n
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) {
      return Math.abs(arr[i]);
    }
    arr[index] = -arr[index];
  }
}
console.log(duplicate_value([2, 1, 5, 4, 6, 4, 3]));

// function find_dp_value(arr) {
//   let look_up_table = {}  // or [];
//   for (let i = 0; i < arr.length; i++) {
//     if (look_up_table[arr[i]] == arr[i]) {
//       return arr[i];
//     }

//     look_up_table[arr[i]] = arr[i];
//     }
//     return -1
// }

// console.log(find_dp_value([2, 5, 7, 8, 7, 3]))
