
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }



  let items = [5,3,7,6,2,9];

  function swap(items, leftIndex, rightIndex){
      let temp = items[leftIndex];
      items[leftIndex] = items[rightIndex];
      items[rightIndex] = temp;
  }
  function partition(items, left, right, animations) {
      let pivot = items[Math.floor((right + left) / 2)]; //middle element
      let pivotIndex = Math.floor((right + left) / 2);
      let i = left; //left pointer
      let j = right; //right pointer

      

      while (i <= j) {
        
          while (items[i] < pivot) {
              i++;
              
          }
          while (items[j] > pivot) {
              j--;
          }
          
          
          if (i <= j) {
            animations.push([i, j, pivotIndex]);
            animations.push([i, j, pivotIndex])
            
              
            animations.push([i, j, items[i],items[j], pivotIndex])
              swap(items, i, j); //swapping two elements
              
              i++;
              j--;
             
              
          }
      }

   
      
      return i;
  }
  
  export function quickSort(items, left, right, animations) {
      let index;
      if (items.length > 1) {
          index = partition(items, left, right, animations); //index returned from partition
          if (left < index - 1) { //more elements on the left side of the pivot
              quickSort(items, left, index - 1, animations);
          }
          if (index < right) { //more elements on the right side of the pivot
              quickSort(items, index, right, animations);
          }
      }
      return items;
  }

  export function getQuicksortAnimations(array){
    let animations = [];
    if (array.length <= 1) return array;
    
    quickSort(array, 0, array.length - 1, animations);
   
    return animations;
  }
  // // first call to quick sort
  // let sortedArray = quickSort(items, 0, items.length - 1);
  // console.log('sorted',sortedArray); //prints [2,3,5,6,7,9]







  
// function swap(arr, a, b){
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp; 
  
// }

//  function partition(arr, start, end){
  
//   let pivotValue = arr[Math.floor((start + end) / 2)];
//   let i = start;
//   let j = end;

//   if(i <= j){
//     while(arr[i] < pivotValue){
//       i++;
//     }
//     while(arr[j] > pivotValue){
//       j--;
//     }

//     if(i <= j){
//       swap(arr, i, j);
//       i++;
//       j--;
//     }    
//   }
//   return i;
// }

// export  function quickSort(arr, start, end){
//   console.log("Recursive function")
//   let pi;
//   if(arr.length > 1){
//     pi = partition(arr, start, end);

//     if(start < pi- 1){
//       quickSort(arr, start, pi - 1);
//     }
//     if(pi < end){
//       quickSort(arr, pi, end);
//     }
  
    
  
//   }
//   return arr;
  

// }
// let arr = [1, 4, 5,3,7,6,2,9,4, 7];

// let sortedArr= quickSort(arr, 0, arr.length-1);
// console.log("Sorted", sortedArr); 

