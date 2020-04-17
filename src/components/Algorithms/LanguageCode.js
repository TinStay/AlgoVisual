import React from 'react';

const LanguageCode = (props) => {
    let code= null;
        
    switch(props.language){
        case("js"):
            if(props.sort==="merge"){
                code = `
1. // Split the array into halves and merge them recursively 
2. function mergeSort (arr) {
3. if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
}
// get the middle item of the array rounded down
const middle = Math.floor(arr.length / 2)
const left = arr.slice(0, middle) // items on the left side 
const right = arr.slice(middle) // items on the right side 

return merge(
    mergeSort(left),
    mergeSort(right)
)
}

// compare the arrays item by item
// and return the concatenated result
function merge (left, right) {
let result = []
let indexLeft = 0
let indexRight = 0

while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
    result.push(left[indexLeft])
    indexLeft++
    } else {
    result.push(right[indexRight])
    indexRight++
    }
}

return result.concat(left.slice(indexLeft))
.concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) 
// [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
            `
            }
            break;

        case('python'):
            if(props.sort==="merge")
            code=`
def mergeSort(alist):
    print("Splitting ",alist)
    if len(alist)>1:
        mid = len(alist)//2
        lefthalf = alist[:mid]
        righthalf = alist[mid:]

    mergeSort(lefthalf)
    mergeSort(righthalf)

    i=0
    j=0
    k=0
    
    while i < len(lefthalf) and j < len(righthalf):
        if lefthalf[i] <= righthalf[j]:
            alist[k]=lefthalf[i]
            i=i+1
        else:
            alist[k]=righthalf[j]
            j=j+1
        k=k+1

    // Appending any elements left
    while i < len(lefthalf):
        alist[k]=lefthalf[i]
        i=i+1
        k=k+1

    while j < len(righthalf):
        alist[k]=righthalf[j]
        j=j+1
        k=k+1

print("Merging ",alist)

alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
mergeSort(alist)
print(alist)`
            break;
        case("c#"):
            if(props.sort==="merge")
            code=`     
class MergeSort
{
    public static int[] mergeSort(int[] array)
    {
        int[] left;
        int[] right;
        int[] result = new int[array.Length];  
        //As this is a recursive algorithm, we need to have a base case to 
        //avoid an infinite recursion and therfore a stackoverflow
        if (array.Length <= 1)
            return array;              
        // The exact midpoint of our array  
        int midPoint = array.Length / 2;  
        //Will represent our 'left' array
        left = new int[midPoint];

        // if array has an even number of elements, the left and right 
        // array will have the same number of 
        // elements
        if (array.Length % 2 == 0)
            right = new int[midPoint];  
        // if array has an odd number of elements, the right array will
        // have one more element than left
        else
            right = new int[midPoint + 1];  
        //populate left array
        for (int i = 0; i < midPoint; i++)
            left[i] = array[i];  
        //populate right array   
        int x = 0;
        //We start our index from the midpoint, as we have already 
        //populated the left array from 0 to 
        midpont
        for (int i = midPoint; i < array.Length; i++)
        {
            right[x] = array[i];
            x++;
        }  
        //Recursively sort the left array
        left = mergeSort(left);
        //Recursively sort the right array
        right = mergeSort(right);
        //Merge our two sorted arrays
        result = merge(left, right);  
        return result;
    }

    //This method will be responsible for combining our two sorted 
    //arrays into one giant array
    public static int[] merge(int[] left, int[] right)
    {
        int resultLength = right.Length + left.Length;
        int[] result = new int[resultLength];
        //
        int indexLeft = 0, indexRight = 0, indexResult = 0;  
        //while either array still has an element
        while (indexLeft < left.Length || indexRight < right.Length)
        {
            //if both arrays have elements  
            if (indexLeft < left.Length && indexRight < right.Length)  
            {  
                //If item on left array is less than item on right array,
                // add that item to the result array 
                if (left[indexLeft] <= right[indexRight])
                {
                    result[indexResult] = left[indexLeft];
                    indexLeft++;
                    indexResult++;
                }
                // else the item in the right array wll be added to 
                //the results array
                else
                {
                    result[indexResult] = right[indexRight];
                    indexRight++;
                    indexResult++;
                }
            }
            //if only the left array still has elements, add all its 
            //items to the results array
            else if (indexLeft < left.Length)
            {
                result[indexResult] = left[indexLeft];
                indexLeft++;
                indexResult++;
            }
            //if only the right array still has elements, add all its 
            //items to the results array
            else if (indexRight < right.Length)
            {
                result[indexResult] = right[indexRight];
                indexRight++;
                indexResult++;
            }  
        }
        return result;
    }
}
`
        break;
    }
        
    

    if(props.sort ==="quick"){
        
        switch(props.language){
            case("js"):
                code = `
var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]`
                break;
            case('python'):
                code=`
from random import randint
def quicksort(array, low, high):
    if low < high:
        p = partition(array, low, high)
        quicksort(array, low, p)
        quicksort(array, p + 1, high)

def partition(array, low, high):
    pivot = array[low]
    i=low-1
    j=high+1
    while 1:
    i = i + 1
        while array[i] < pivot:
            i = i + 1
        j=j-1
        while array[j] > pivot:
            j=j-1
    
        if i >= j:
            return j
        array[i],array[j]=array[j],array[i]




array=[]
for p in range(10):
    array.append(randint(1,100))

quicksort(array,0,len(array)-1)
print array`
                break;
            case("c#"):
                code=`
using System;
namespace QuickSortDemo {
   class Example {
      static public int Partition(int[] arr, int left, int right) {
         int pivot;
         pivot = arr[left];
         while (true) {
            while (arr[left] < pivot) {
               left++;
            }
            while (arr[right] > pivot) {
               right--;
            }
            if (left < right) {
               int temp = arr[right];
               arr[right] = arr[left];
               arr[left] = temp;
            } else {
               return right;
            }
         }
      }
      static public void quickSort(int[] arr, int left, int right) {
         int pivot;
         if (left < right) {
            pivot = Partition(arr, left, right);
            if (pivot > 1) {
               quickSort(arr, left, pivot - 1);
            }
            if (pivot + 1 < right) {
               quickSort(arr, pivot + 1, right);
            }
         }
      }
      static void Main(string[] args) {
         int[] arr = {67, 12, 95, 56, 85, 1, 100, 23, 60, 9}; 
         int n = 10, i;
         Console.WriteLine("Quick Sort");
         Console.Write("Initial array is: ");   
         for (i = 0; i < n; i++) {
            Console.Write(arr[i] + " ");
         }
         quickSort(arr, 0, 9);
         Console.Write("\nSorted Array is: ");   
         for (i = 0; i < n; i++) {
            Console.Write(arr[i] + " ");
         }
      }
   }
}`
    break;
            case("java"):
                code=`
import java.util.Arrays;

class Main
{
    public static void swap (int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Partition using Hoare's Partitioning scheme
    public static int Partition(int[] a, int low, int high)
    {
        int pivot = a[low];
        int i = low - 1;
        int j = high + 1;

        while (true) {
            do {
                i++;
            } while (a[i] < pivot);

            do {
                j--;
            } while (a[j] > pivot);

            if (i >= j)
                return j;

            swap(a, i, j);
        }
    }

    // Quicksort routine
    public static void quickSort(int[] a, int low, int high)
    {
        // base condition
        if (low >= high) {
            return;
        }

        // rearrange the elements across pivot
        int pivot = Partition(a, low, high);

        // recur on sub-array containing elements less than the pivot
        quickSort(a, low, pivot);

        // recur on sub-array containing elements more than the pivot
        quickSort(a, pivot + 1, high);
    }

    // Quick Sort using Hoare's Partitioning scheme
    public static void main(String[] args)
    {
        int a[] = { 9, -3, 5, 2, 6, 8, -6, 1, 3 };

        quickSort(a, 0, a.length - 1);

        // print the sorted array
        System.out.println(Arrays.toString(a));
    }
}`
                    break;
            case("c++"):
                code=`
import java.util.Arrays;

class Main
{
    public static void swap (int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Partition using Hoare's Partitioning scheme
    public static int Partition(int[] a, int low, int high)
    {
        int pivot = a[low];
        int i = low - 1;
        int j = high + 1;

        while (true) {
            do {
                i++;
            } while (a[i] < pivot);

            do {
                j--;
            } while (a[j] > pivot);

            if (i >= j)
                return j;

            swap(a, i, j);
        }
    }

    // Quicksort routine
    public static void quickSort(int[] a, int low, int high)
    {
        // base condition
        if (low >= high) {
            return;
        }

        // rearrange the elements across pivot
        int pivot = Partition(a, low, high);

        // recur on sub-array containing elements less than the pivot
        quickSort(a, low, pivot);

        // recur on sub-array containing elements more than the pivot
        quickSort(a, pivot + 1, high);
    }

    // Quick Sort using Hoare's Partitioning scheme
    public static void main(String[] args)
    {
        int a[] = { 9, -3, 5, 2, 6, 8, -6, 1, 3 };

        quickSort(a, 0, a.length - 1);

        // print the sorted array
        System.out.println(Arrays.toString(a));
    }
}`
                    break;
            case("swift"):
                code=`
// partition using Hoares partition 
func partition (_ a: inout [Int], _ start: Int, _ end: Int) -> Int {
    // pick the last element as the picot
    let pivot = a[start]
    var i = start - 1
    var j = end + 1
    // loop forever
    while true {
        // decrement the pointer from the end, when the elements are larger
        repeat { j -= 1 } while a[j] > pivot
        // increment the pointer from the beginning, when the elements are smaller
        repeat { i += 1 } while a[i] < pivot
        // if there is an inversion, swap the two
        if i < j {
            a.swapAt(i, j)
        } else {
            // indicies have met, so return the final index
            return j
        }
    }
}

func sort (_ array: inout [Int]) {
    // Stack of start and end index
    var stack = [(Int,Int)]()
    // the initial start and end index - the whole range
    stack.append((0, array.count - 1))
    while (!stack.isEmpty) {
        let startEnd = stack.popLast()!
        let start = startEnd.0
        let end = startEnd.1
        // partition sorts the array around the midpoint
        let pivot = partition(&array, start, end)
        // append the first half of the array to the stack
        if (pivot > start) {
            stack.append((start, pivot))
        }
        // append the second half of the array to the stack
        if (pivot + 1 < end) {
            stack.append((pivot + 1, end))
        }
    }
}`
                    break;
        }
        
    }

    if(props.sort ==="bubble"){
        
        switch(props.language){
            case("js"):
                code = `Bubble sort JS code`
                break;
            case('python'):
                code="Bubble sort PYTHON code"
                break;
            case("c#"):
                code="Bubble sort C# code"
                    break;
        }
        
    }
    if(props.sort ==="bubble"){
        
        switch(props.language){
            case("js"):
                code = `Bubble sort JS code`
                break;
            case('python'):
                code="Bubble sort PYTHON code"
                break;
            case("c#"):
                code="Bubble sort C# code"
                    break;
        }
        
    }
    if(props.sort ==="bubble"){
        
        switch(props.language){
            case("js"):
                code = `Bubble sort JS code`
                break;
            case('python'):
                code="Bubble sort PYTHON code"
                break;
            case("c#"):
                code="Bubble sort C# code"
                    break;
        }
        
    }

    return <div className="code">
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>


    }


export default LanguageCode;