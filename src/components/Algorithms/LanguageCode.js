import React from 'react';

const LanguageCode = (props) => {
    let code= null;
        
    if(props.sort === 'merge'){
        switch(props.language){
            case("js"):
                code = `
// Split the array into halves and merge them recursively 
function mergeSort (arr) {
if (arr.length === 1) {
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
            
            break;

        case('python'):
            
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
        case("c++"):
            code=`
// Merges two subarrays of arr[]. 
// First subarray is arr[l..m] 
// Second subarray is arr[m+1..r] 
void merge(int arr[], int l, int m, int r) 
{ 
    int i, j, k; 
    int n1 = m - l + 1; 
    int n2 =  r - m; 
    
    /* create temp arrays */
    int L[n1], R[n2]; 
    
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 
    
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
    
    /* Copy the remaining elements of L[], if there 
        are any */
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
    
    /* Copy the remaining elements of R[], if there 
        are any */
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 
    
/* l is for left index and r is right index of the 
    sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r) 
{ 
    if (l < r) 
    { 
        // Same as (l+r)/2, but avoids overflow for 
        // large l and h 
        int m = l+(r-l)/2; 
    
        // Sort first and second halves 
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
    
        merge(arr, l, m, r); 
    } 
} 
    
/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size) 
{ 
    int i; 
    for (i=0; i < size; i++) 
        printf("%d ", A[i]); 
    printf("\n"); 
} 
    
/* Driver program to test above functions */
int main() 
{ 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int arr_size = sizeof(arr)/sizeof(arr[0]); 
    
    printf("Given array is \n"); 
    printArray(arr, arr_size); 
    
    mergeSort(arr, 0, arr_size - 1); 
    
    printf("\nSorted array is \n"); 
    printArray(arr, arr_size); 
    return 0; 
} `
        break;
        case("java"):
            code=`
/* Java program for Merge Sort */
class MergeSort 
{ 
    // Merges two subarrays of arr[]. 
    // First subarray is arr[l..m] 
    // Second subarray is arr[m+1..r] 
    void merge(int arr[], int l, int m, int r) 
    { 
        // Find sizes of two subarrays to be merged 
        int n1 = m - l + 1; 
        int n2 = r - m; 
    
        /* Create temp arrays */
        int L[] = new int [n1]; 
        int R[] = new int [n2]; 
    
        /*Copy data to temp arrays*/
        for (int i=0; i<n1; ++i) 
            L[i] = arr[l + i]; 
        for (int j=0; j<n2; ++j) 
            R[j] = arr[m + 1+ j]; 
    
    
        /* Merge the temp arrays */
    
        // Initial indexes of first and second subarrays 
        int i = 0, j = 0; 
    
        // Initial index of merged subarry array 
        int k = l; 
        while (i < n1 && j < n2) 
        { 
            if (L[i] <= R[j]) 
            { 
                arr[k] = L[i]; 
                i++; 
            } 
            else
            { 
                arr[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 
    
        /* Copy remaining elements of L[] if any */
        while (i < n1) 
        { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
    
        /* Copy remaining elements of R[] if any */
        while (j < n2) 
        { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 
    
    // Main function that sorts arr[l..r] using 
    // merge() 
    void sort(int arr[], int l, int r) 
    { 
        if (l < r) 
        { 
            // Find the middle point 
            int m = (l+r)/2; 
    
            // Sort first and second halves 
            sort(arr, l, m); 
            sort(arr , m+1, r); 
    
            // Merge the sorted halves 
            merge(arr, l, m, r); 
        } 
    } 
    
    /* A utility function to print array of size n */
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i] + " "); 
        System.out.println(); 
    } 
    
    // Driver method 
    public static void main(String args[]) 
    { 
        int arr[] = {12, 11, 13, 5, 6, 7}; 
    
        System.out.println("Given Array"); 
        printArray(arr); 
    
        MergeSort ob = new MergeSort(); 
        ob.sort(arr, 0, arr.length-1); 
    
        System.out.println("\nSorted array"); 
        printArray(arr); 
    } 
} 
/* This code is contributed by Rajat Mishra */
            `
        break;
        case("swift"):
            code=`
import Foundation
 
func merge(left:[Int],right:[Int]) -> [Int] {
    var mergedList = [Int]()
    var left = left
    var right = right
    
    while left.count > 0 && right.count > 0 {
        if left.first! < right.first! {
            mergedList.append(left.removeFirst())
        } else {
            mergedList.append(right.removeFirst())
        }
    }
 
    return mergedList + left + right
}
 
func mergeSort(list:[Int]) -> [Int] {
    guard list.count > 1 else {
        return list
    }
    
    let leftList = Array(list[0..<list.count/2])
    let rightList = Array(list[list.count/2..<list.count])
    
    return merge(left: mergeSort(list:leftList), right: mergeSort(list:rightList))
}

var list = [Int]()
 
for _ in 0..<100 {
    list.append(Int(arc4random_uniform(UInt32(1000))))
}
 
print(list)
 
print()
 
print(mergeSort(list: list))

`
        break;
    }
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
/* This function takes last element as pivot, places 
the pivot element at its correct position in sorted 
    array, and places all smaller (smaller than pivot) 
to left of pivot and all greater elements to right 
of pivot */
int partition(int arr[], int low, int high) 
{ 
    int pivot = arr[low]; 
    int i = low - 1, j = high + 1; 

    while (true) 
    { 
        // Find leftmost element greater than 
        // or equal to pivot 
        do
        { 
            i++; 
        } while (arr[i] < pivot); 

        // Find rightmost element smaller than 
        // or equal to pivot 
        do
        { 
            j--; 
        } while (arr[j] > pivot); 

        // If two pointers met. 
        if (i >= j) 
            return j; 

        swap(arr[i], arr[j]); 
    } 
} 

/* The main function that implements QuickSort 
arr[] --> Array to be sorted, 
low  --> Starting index, 
high  --> Ending index */
void quickSort(int arr[], int low, int high) 
{ 
    if (low < high) 
    { 
        /* pi is partitioning index, arr[p] is now 
        at right place */
        int pi = partition(arr, low, high); 

        // Separately sort elements before 
        // partition and after partition 
        quickSort(arr, low, pi); 
        quickSort(arr, pi + 1, high); 
    } 
} 

/* Function to print an array */
void printArray(int arr[], int n) 
{ 
    for (int i=0; i < n; i++) 
        printf("%d ", arr[i]); 
    printf("\n"); 
} 

// Driver program to test above functions 
int main() 
{ 
    int arr[] = {10, 7, 8, 9, 1, 5}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    quickSort(arr, 0, n-1); 
    printf("Sorted array: \n"); 
    printArray(arr, n); 
    return 0; 
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
                code = `
// HTML file
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bubble Sort</title>
</head>
<body>

</body>
</html>


// JS file
function bubble_Sort(a){
    let swap;
    let n = a.length-1;
    let x=a;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));`
                break;
            case('python'):
                code=`
# Python program for implementation of Bubble Sort 
  
def bubbleSort(arr): 
    n = len(arr) 
  
    # Traverse through all array elements 
    for i in range(n): 
  
        # Last i elements are already in place 
        for j in range(0, n-i-1): 
  
            # traverse the array from 0 to n-i-1 
            # Swap if the element found is greater 
            # than the next element 
            if arr[j] > arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j] 
  
# Driver code to test above 
arr = [64, 34, 25, 12, 22, 11, 90] 
  
bubbleSort(arr) 
  
print ("Sorted array is:") 
for i in range(len(arr)): 
    print ("%d" %arr[i]),  
`
                break;
            case("c#"):
                code=`
// C# program for implementation  
// of Bubble Sort 
using System; 
    
class GFG 
{  
    static void bubbleSort(int []arr) 
    { 
        int n = arr.Length; 
        for (int i = 0; i < n - 1; i++) 
            for (int j = 0; j < n - i - 1; j++) 
                if (arr[j] > arr[j + 1]) 
                { 
                    // swap temp and arr[i] 
                    int temp = arr[j]; 
                    arr[j] = arr[j + 1]; 
                    arr[j + 1] = temp; 
                } 
    } 
    
    /* Prints the array */
    static void printArray(int []arr) 
    { 
        int n = arr.Length; 
        for (int i = 0; i < n; ++i) 
            Console.Write(arr[i] + " "); 
        Console.WriteLine(); 
    } 
    
    // Driver method 
    public static void Main() 
    { 
        int []arr = {64, 34, 25, 12, 22, 11, 90}; 
        bubbleSort(arr); 
        Console.WriteLine("Sorted array"); 
        printArray(arr); 
    } 
    
} 
    
// This code is contributed by Sam007 
`
                break;
            case("java"):
                code=`
// Java program for implementation of Bubble Sort 
class BubbleSort 
{ 
    void bubbleSort(int arr[]) 
    { 
        int n = arr.length; 
        for (int i = 0; i < n-1; i++) 
            for (int j = 0; j < n-i-1; j++) 
                if (arr[j] > arr[j+1]) 
                { 
                    // swap arr[j+1] and arr[i] 
                    int temp = arr[j]; 
                    arr[j] = arr[j+1]; 
                    arr[j+1] = temp; 
                } 
    } 
    
    /* Prints the array */
    void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i] + " "); 
        System.out.println(); 
    } 
    
    // Driver method to test above 
    public static void main(String args[]) 
    { 
        BubbleSort ob = new BubbleSort(); 
        int arr[] = {64, 34, 25, 12, 22, 11, 90}; 
        ob.bubbleSort(arr); 
        System.out.println("Sorted array"); 
        ob.printArray(arr); 
    } 
} 
/* This code is contributed by Rajat Mishra */
`
                break;
            case("c++"):
                code=`
// C++ program for implementation of Bubble sort  
#include <bits/stdc++.h> 
using namespace std; 
    
void swap(int *xp, int *yp)  
{  
    int temp = *xp;  
    *xp = *yp;  
    *yp = temp;  
}  
    
// A function to implement bubble sort  
void bubbleSort(int arr[], int n)  
{  
    int i, j;  
    for (i = 0; i < n-1; i++)      
        
    // Last i elements are already in place  
    for (j = 0; j < n-i-1; j++)  
        if (arr[j] > arr[j+1])  
            swap(&arr[j], &arr[j+1]);  
}  
    
/* Function to print an array */
void printArray(int arr[], int size)  
{  
    int i;  
    for (i = 0; i < size; i++)  
        cout << arr[i] << " ";  
    cout << endl;  
}  
    
// Driver code  
int main()  
{  
    int arr[] = {64, 34, 25, 12, 22, 11, 90};  
    int n = sizeof(arr)/sizeof(arr[0]);  
    bubbleSort(arr, n);  
    cout<<"Sorted array: \n";  
    printArray(arr, n);  
    return 0;  
}  
    
// This code is contributed by rathbhupendra 
`
                break;
            case("swift"):
                code=`
// An Example of a bubble sort algorithm in Swift
//
// Essentialy this algorithm will loop through the values up to
// the index where we last did a sort (everything above is already in order/sorted)
// comparing a one value to the value before it. If the value before it is higher,
// swap them, and note the highest swap index. On the next iteration of the loop we
// only need to go as high as the previous swap.
import Foundation

var array = [5,3,4,6,8,2,9,1,7,10,11]
var sortedArray = NSMutableArray(array: array)

var sortedAboveIndex = array.count // Assume all values are not in order
do {
    var lastSwapIndex = 0
    for ( var i = 1; i < sortedAboveIndex; i++ ) {
        if (sortedArray[i - 1].integerValue > sortedArray[i].integerValue) {
            sortedArray.exchangeObjectAtIndex(i, withObjectAtIndex: i-1)
            lastSwapIndex = i
        }
    }
    sortedAboveIndex = lastSwapIndex

} while (sortedAboveIndex != 0)


// [5, 3, 4, 6, 8, 2, 9, 1, 7, 10, 11]
println(array)

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
println(sortedArray as Array)
`
                break;
        }
        
    }
    if(props.sort ==="insertion"){
        switch(props.language){
            case("js"):
                code = `
// HTML

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>JavaScript program of Insertion sort</title>
  </head>
  <body></body>
</html>

// Javascript

const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
  }
  console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
  console.log(insertion_Sort([2,6,5,12,-1,3,8,7,1,-4,0,23,1,-55,20,37,54,210,-23,7,483,9339,29,-3,90,-2,81,54,7372,-92,93,93,18,-43,21]));`
                break;
            case('python'):
                code=`         
# Python program for implementation of Insertion Sort 
  
# Function to do insertion sort 
def insertionSort(arr): 
  
    # Traverse through 1 to len(arr) 
    for i in range(1, len(arr)): 
  
        key = arr[i] 
  
        # Move elements of arr[0..i-1], that are 
        # greater than key, to one position ahead 
        # of their current position 
        j = i-1
        while j >= 0 and key < arr[j] : 
                arr[j + 1] = arr[j] 
                j -= 1
        arr[j + 1] = key 
  
  
# Driver code to test above 
arr = [12, 11, 13, 5, 6] 
insertionSort(arr) 
for i in range(len(arr)): 
    print ("% d" % arr[i]) 
  
# This code is contributed by Mohit Kumra 
`
                break;
            case("c#"):
                code=`             
// C# program for implementation of Insertion Sort 
using System; 
  
class InsertionSort { 
  
    // Function to sort array 
    // using insertion sort 
    void sort(int[] arr) 
    { 
        int n = arr.Length; 
        for (int i = 1; i < n; ++i) { 
            int key = arr[i]; 
            int j = i - 1; 
  
            // Move elements of arr[0..i-1], 
            // that are greater than key, 
            // to one position ahead of 
            // their current position 
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
    } 
  
    // A utility function to print 
    // array of size n 
    static void printArray(int[] arr) 
    { 
        int n = arr.Length; 
        for (int i = 0; i < n; ++i) 
            Console.Write(arr[i] + " "); 
  
        Console.Write("\n"); 
    } 
  
    // Driver Code 
    public static void Main() 
    { 
        int[] arr = { 12, 11, 13, 5, 6 }; 
        InsertionSort ob = new InsertionSort(); 
        ob.sort(arr); 
        printArray(arr); 
    } 
} 
  
// This code is contributed by ChitraNayal. 
`
                break;
            case("java"):
                code=`               
// Java program for implementation of Insertion Sort 
class InsertionSort { 
    /*Function to sort array using insertion sort*/
    void sort(int arr[]) 
    { 
        int n = arr.length; 
        for (int i = 1; i < n; ++i) { 
            int key = arr[i]; 
            int j = i - 1; 
  
            /* Move elements of arr[0..i-1], that are 
               greater than key, to one position ahead 
               of their current position */
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
    } 
  
    /* A utility function to print array of size n*/
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i = 0; i < n; ++i) 
            System.out.print(arr[i] + " "); 
  
        System.out.println(); 
    } 
  
    // Driver method 
    public static void main(String args[]) 
    { 
        int arr[] = { 12, 11, 13, 5, 6 }; 
  
        InsertionSort ob = new InsertionSort(); 
        ob.sort(arr); 
  
        printArray(arr); 
    } 
} /* This code is contributed by Rajat Mishra. */
`
                break;
            case("c++"):
                code=`          
// C++ program for insertion sort  
#include <bits/stdc++.h> 
using namespace std; 
  
/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)  
{  
    int i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
  
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}  
  
// A utility function to print an array of size n  
void printArray(int arr[], int n)  
{  
    int i;  
    for (i = 0; i < n; i++)  
        cout << arr[i] << " ";  
    cout << endl; 
}  
  
/* Driver code */
int main()  
{  
    int arr[] = { 12, 11, 13, 5, 6 };  
    int n = sizeof(arr) / sizeof(arr[0]);  
  
    insertionSort(arr, n);  
    printArray(arr, n);  
  
    return 0;  
}  
  
// This is code is contributed by rathbhupendra 
`
                break;
            case("swift"):
                code=`
var numbers = [70, 36, 40, 95, 22, 55, 26]

for index in 1..<numbers.count
{
    let value = numbers[index]
    var position = index

    while position > 0 && numbers[position - 1] > value {
        numbers[position] = numbers[position - 1]
        position -= 1
    }

    numbers[position] = value
}

print(numbers)`
                break;
        }   
    }

    if(props.sort ==="selection"){
        switch(props.language){
            case("js"):
                code = `
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

let array = [2, 5, 1, 7, 23, 12, 86, 26, 102]
console.log(selectionSort(array))
`
                break;
            case('python'):
                code=`
# Python program for implementation of Selection 
# Sort 
import sys 
A = [64, 25, 12, 22, 11] 
  
# Traverse through all array elements 
for i in range(len(A)): 
      
    # Find the minimum element in remaining  
    # unsorted array 
    min_idx = i 
    for j in range(i+1, len(A)): 
        if A[min_idx] > A[j]: 
            min_idx = j 
              
    # Swap the found minimum element with  
    # the first element         
    A[i], A[min_idx] = A[min_idx], A[i] 
  

# Driver code to test above 
print ("Sorted array") 
for i in range(len(A)): 
    print("%d" %A[i]),  
`
                break;
            case("c#"):
                code=`     
// C# program for implementation  
// of Selection Sort 
using System; 
  
class GFG 
{  
    static void sort(int []arr) 
    { 
        int n = arr.Length; 
  
        // One by one move boundary of unsorted subarray 
        for (int i = 0; i < n - 1; i++) 
        { 
            // Find the minimum element in unsorted array 
            int min_idx = i; 
            for (int j = i + 1; j < n; j++) 
                if (arr[j] < arr[min_idx]) 
                    min_idx = j; 
  
            // Swap the found minimum element with the first 
            // element 
            int temp = arr[min_idx]; 
            arr[min_idx] = arr[i]; 
            arr[i] = temp; 
        } 
    } 
  
    // Prints the array 
    static void printArray(int []arr) 
    { 
        int n = arr.Length; 
        for (int i=0; i<n; ++i) 
            Console.Write(arr[i]+" "); 
        Console.WriteLine(); 
    } 
  
    // Driver code  
    public static void Main() 
    { 
        int []arr = {64,25,12,22,11}; 
        sort(arr); 
        Console.WriteLine("Sorted array"); 
        printArray(arr); 
    } 
  
} 
// This code is contributed by Sam007 
`
                break;
            case("java"):
                code=`   
// Java program for implementation of Selection Sort 
class SelectionSort 
{ 
    void sort(int arr[]) 
    { 
        int n = arr.length; 
  
        // One by one move boundary of unsorted subarray 
        for (int i = 0; i < n-1; i++) 
        { 
            // Find the minimum element in unsorted array 
            int min_idx = i; 
            for (int j = i+1; j < n; j++) 
                if (arr[j] < arr[min_idx]) 
                    min_idx = j; 
  
            // Swap the found minimum element with the first 
            // element 
            int temp = arr[min_idx]; 
            arr[min_idx] = arr[i]; 
            arr[i] = temp; 
        } 
    } 
  
    // Prints the array 
    void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i]+" "); 
        System.out.println(); 
    } 
  
    // Driver code to test above 
    public static void main(String args[]) 
    { 
        SelectionSort ob = new SelectionSort(); 
        int arr[] = {64,25,12,22,11}; 
        ob.sort(arr); 
        System.out.println("Sorted array"); 
        ob.printArray(arr); 
    } 
} 
/* This code is contributed by Rajat Mishra*/
`
                break;
            case("c++"):
                code=`
// C++ program for implementation of selection sort  
#include <bits/stdc++.h> 
using namespace std; 
  
void swap(int *xp, int *yp)  
{  
    int temp = *xp;  
    *xp = *yp;  
    *yp = temp;  
}  
  
void selectionSort(int arr[], int n)  
{  
    int i, j, min_idx;  
  
    // One by one move boundary of unsorted subarray  
    for (i = 0; i < n-1; i++)  
    {  
        // Find the minimum element in unsorted array  
        min_idx = i;  
        for (j = i+1; j < n; j++)  
        if (arr[j] < arr[min_idx])  
            min_idx = j;  
  
        // Swap the found minimum element with the first element  
        swap(&arr[min_idx], &arr[i]);  
    }  
}  
  
/* Function to print an array */
void printArray(int arr[], int size)  
{  
    int i;  
    for (i=0; i < size; i++)  
        cout << arr[i] << " ";  
    cout << endl;  
}  
  
// Driver program to test above functions  
int main()  
{  
    int arr[] = {64, 25, 12, 22, 11};  
    int n = sizeof(arr)/sizeof(arr[0]);  
    selectionSort(arr, n);  
    cout << "Sorted array: \n";  
    printArray(arr, n);  
    return 0;  
}  
  
// This is code is contributed by rathbhupendra 
`
                break;
            case("swift"):
                code=`
func selectionSort(_ array: [Int]) -> [Int] {
    guard array.count > 1 else { return array }  // 1
    
    var a = array                    // 2
    
    for x in 0 ..< a.count - 1 {     // 3
    
        var lowest = x
        for y in x + 1 ..< a.count {   // 4
        if a[y] < a[lowest] {
            lowest = y
        }
        }
    
        if x != lowest {               // 5
        a.swapAt(x, lowest)
        }
    }
    return a
    }

let list = [ 10, -1, 3, 9, 2, 27, 8, 5, 1, 3, 0, 26 ]
selectionSort(list)`
                break;
        }   
    }
    
    if(props.sort ==="heap"){ 
        switch(props.language){
            case("js"):
                code = `
var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
    
    
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);`
                break;
            case('python'):
                code=`         
# Python program for implementation of heap Sort 
  
# To heapify subtree rooted at index i. 
# n is size of heap 
def heapify(arr, n, i): 
    largest = i # Initialize largest as root 
    l = 2 * i + 1     # left = 2*i + 1 
    r = 2 * i + 2     # right = 2*i + 2 
  
    # See if left child of root exists and is 
    # greater than root 
    if l < n and arr[i] < arr[l]: 
        largest = l 
  
    # See if right child of root exists and is 
    # greater than root 
    if r < n and arr[largest] < arr[r]: 
        largest = r 
  
    # Change root, if needed 
    if largest != i: 
        arr[i],arr[largest] = arr[largest],arr[i] # swap 
  
        # Heapify the root. 
        heapify(arr, n, largest) 
  
# The main function to sort an array of given size 
def heapSort(arr): 
    n = len(arr) 
  
    # Build a maxheap. 
    for i in range(n/2 - 1, -1, -1): 
        heapify(arr, n, i) 
  
    # One by one extract elements 
    for i in range(n-1, 0, -1): 
        arr[i], arr[0] = arr[0], arr[i] # swap 
        heapify(arr, i, 0) 
  
# Driver code to test above 
arr = [ 12, 11, 13, 5, 6, 7] 
heapSort(arr) 
n = len(arr) 
print ("Sorted array is") 
for i in range(n): 
    print ("%d" %arr[i]), 
# This code is contributed by Mohit Kumra 
`
                break;
            case("c#"):
                code=`
// C# program for implementation of Heap Sort 
using System; 
    
public class HeapSort 
{ 
    public void sort(int[] arr) 
    { 
        int n = arr.Length; 
    
        // Build heap (rearrange array) 
        for (int i = n / 2 - 1; i >= 0; i--) 
            heapify(arr, n, i); 
    
        // One by one extract an element from heap 
        for (int i=n-1; i>0; i--) 
        { 
            // Move current root to end 
            int temp = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = temp; 
    
            // call max heapify on the reduced heap 
            heapify(arr, i, 0); 
        } 
    } 
    
    // To heapify a subtree rooted with node i which is 
    // an index in arr[]. n is size of heap 
    void heapify(int[] arr, int n, int i) 
    { 
        int largest = i; // Initialize largest as root 
        int l = 2*i + 1; // left = 2*i + 1 
        int r = 2*i + 2; // right = 2*i + 2 
    
        // If left child is larger than root 
        if (l < n && arr[l] > arr[largest]) 
            largest = l; 
    
        // If right child is larger than largest so far 
        if (r < n && arr[r] > arr[largest]) 
            largest = r; 
    
        // If largest is not root 
        if (largest != i) 
        { 
            int swap = arr[i]; 
            arr[i] = arr[largest]; 
            arr[largest] = swap; 
    
            // Recursively heapify the affected sub-tree 
            heapify(arr, n, largest); 
        } 
    } 
    
    /* A utility function to print array of size n */
    static void printArray(int[] arr) 
    { 
        int n = arr.Length; 
        for (int i=0; i<n; ++i) 
            Console.Write(arr[i]+" "); 
        Console.Read(); 
    } 
    
    // Driver program 
    public static void Main() 
    { 
        int[] arr = {12, 11, 13, 5, 6, 7}; 
        int n = arr.Length; 
    
        HeapSort ob = new HeapSort(); 
        ob.sort(arr); 
    
        Console.WriteLine("Sorted array is"); 
        printArray(arr); 
    } 
} 
    
// This code is contributed  
// by Akanksha Rai(Abby_akku) 
`
                break;
            case("java"):
                code=`          
// Java program for implementation of Heap Sort 
public class HeapSort 
{ 
    public void sort(int arr[]) 
    { 
        int n = arr.length; 
  
        // Build heap (rearrange array) 
        for (int i = n / 2 - 1; i >= 0; i--) 
            heapify(arr, n, i); 
  
        // One by one extract an element from heap 
        for (int i=n-1; i>0; i--) 
        { 
            // Move current root to end 
            int temp = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = temp; 
  
            // call max heapify on the reduced heap 
            heapify(arr, i, 0); 
        } 
    } 
  
    // To heapify a subtree rooted with node i which is 
    // an index in arr[]. n is size of heap 
    void heapify(int arr[], int n, int i) 
    { 
        int largest = i; // Initialize largest as root 
        int l = 2*i + 1; // left = 2*i + 1 
        int r = 2*i + 2; // right = 2*i + 2 
  
        // If left child is larger than root 
        if (l < n && arr[l] > arr[largest]) 
            largest = l; 
  
        // If right child is larger than largest so far 
        if (r < n && arr[r] > arr[largest]) 
            largest = r; 
  
        // If largest is not root 
        if (largest != i) 
        { 
            int swap = arr[i]; 
            arr[i] = arr[largest]; 
            arr[largest] = swap; 
  
            // Recursively heapify the affected sub-tree 
            heapify(arr, n, largest); 
        } 
    } 
  
    /* A utility function to print array of size n */
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i]+" "); 
        System.out.println(); 
    } 
  
    // Driver program 
    public static void main(String args[]) 
    { 
        int arr[] = {12, 11, 13, 5, 6, 7}; 
        int n = arr.length; 
  
        HeapSort ob = new HeapSort(); 
        ob.sort(arr); 
  
        System.out.println("Sorted array is"); 
        printArray(arr); 
    } 
} 
`
                break;
            case("c++"):
                code=`           
// C++ program for implementation of Heap Sort 
#include <iostream> 
  
using namespace std; 
  
// To heapify a subtree rooted with node i which is 
// an index in arr[]. n is size of heap 
void heapify(int arr[], int n, int i) 
{ 
    int largest = i; // Initialize largest as root 
    int l = 2*i + 1; // left = 2*i + 1 
    int r = 2*i + 2; // right = 2*i + 2 
  
    // If left child is larger than root 
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
  
    // If right child is larger than largest so far 
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
  
    // If largest is not root 
    if (largest != i) 
    { 
        swap(arr[i], arr[largest]); 
  
        // Recursively heapify the affected sub-tree 
        heapify(arr, n, largest); 
    } 
} 
  
// main function to do heap sort 
void heapSort(int arr[], int n) 
{ 
    // Build heap (rearrange array) 
    for (int i = n / 2 - 1; i >= 0; i--) 
        heapify(arr, n, i); 
  
    // One by one extract an element from heap 
    for (int i=n-1; i>0; i--) 
    { 
        // Move current root to end 
        swap(arr[0], arr[i]); 
  
        // call max heapify on the reduced heap 
        heapify(arr, i, 0); 
    } 
} 
  
/* A utility function to print array of size n */
void printArray(int arr[], int n) 
{ 
    for (int i=0; i<n; ++i) 
        cout << arr[i] << " "; 
    cout << "\n"; 
} 
  
// Driver program 
int main() 
{ 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
  
    heapSort(arr, n); 
  
    cout << "Sorted array is \n"; 
    printArray(arr, n); 
} 
`
                break;
            case("swift"):
                code=`
class SortingAlgorithms {
    private init() {}
    
    public static func heapSort<DataType: Comparable>(_ array: inout [DataType]) {
        if array.count < 2 { return }
        buildHeap(&array)
        shrinkHeap(&array)
    }
    
    private static func buildHeap<DataType: Comparable>(_ array: inout [DataType]) {
        for index in 1..<array.count {
        var child = index
        var parent = child.parent
        while child > 0 && array[child] > array[parent] {
            swap(child, with: parent, in: &array)
            child = parent
            parent = child.parent
        }
        }
    }
    
    private static func shrinkHeap<DataType: Comparable>(_ array: inout [DataType]) {
        for index in stride(from: array.count - 1, to: 0, by: -1) {
        swap(0, with: index, in: &array)
        var parent = 0
        var leftChild = parent.leftChild
        var rightChild = parent.rightChild
        while parent < index {
            var maxChild = -1
            if leftChild < index {
            maxChild = leftChild
            } else {
            break
            }
            if rightChild < index && array[rightChild] > array[maxChild] {
            maxChild = rightChild
            }
            guard array[maxChild] > array[parent] else { break }
            
            swap(parent, with: maxChild, in: &array)
            parent = maxChild
            leftChild = parent.leftChild
            rightChild = parent.rightChild
        }
        }
    }
    
    private static func swap<DataType: Comparable>(_ firstIndex: Int, with secondIndex: Int, in array: inout [DataType]) {
        let temp = array[firstIndex]
        array[firstIndex] = array[secondIndex]
        array[secondIndex] = temp
    }
}`
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