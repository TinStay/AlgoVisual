
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



let items = [5,3,7,6,2,9,23,12,92,52];

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
  
function quickSort(items, left, right, animations) {
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



function bubbleSort(array, animations){
  let isSorted = false;
  let end = array.length-1
  

  while(isSorted === false){
    isSorted = true;
    for(let i = 0; i < end; i++){
      

      if(array[i] > array[i+1]){
        // Change color on elements that are being compared
        animations.push([i, i+1]);
        animations.push([i, i+1]);
        animations.push([i, i+1, array[i], array[i+1]]);

        swap(array, i, i+1);
        isSorted = false;
      };
    };
    end--;
}
};

// bubbleSort(items, 0);
// console.log("Sorted items: ", items)


export function getBubblesortAnimations(array){
  let animations = [];
  if (array.length <= 1) return array;
  
  bubbleSort(array, animations);
  
  return animations;
}


function insertionSort(arr, animations){
  for(let i = 1; i < arr.length; i++){
    let curr = arr[i];
    let j = i-1;

    
    while(j >= 0 && arr[j] > curr){
      // Change colors and height of the compared elements
      animations.push([j + 1, j]);
      animations.push([j + 1, j]);
      animations.push([j + 1, arr[j]]);
      
      arr[j + 1] = arr[j]
      
      j--;
    }

    // Change colors and height of the compared elements
    animations.push([j + 1, i]);
    animations.push([j + 1, i]);
    animations.push([j + 1, curr]);

    arr[j + 1] = curr;
   
  }

  // return arr;  
}


export const getInsertionSortAnimations = (array) => {
  let animations = [];
  if (array.length <= 1) return array;
  
  insertionSort(array, animations);
  
  return animations;
}

// let sortedArr = insertionSort(items);
// console.log("Sorted via insertionSort", sortedArr) 
 