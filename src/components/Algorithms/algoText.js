import React from 'react'

export const mergeText = () =>(
      <div>
         <p className="info-paragraph">Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem
            into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions
            to the sub-problems are then combined to give a solution to the original problem. 
         </p>
         <p>So Merge Sort first divides the array into equal halves
            and then combines them in a sorted manner.The whole process of sorting an array of N integers can be summarized into three steps:</p>
         <ol  className="info-paragraph">
            <li>Divide the array into two halves.</li>
            <li>Sort the left half and the right half using the same recurring algorithm.</li>
            <li> Merge the sorted halves.</li>
         </ol>
         <p  className="info-paragraph">The biggest advantage of using Merge sort is that the time complexity 3 is only n*log(n) to sort an entire Array. It is a lot better than n^2 
running time of bubble sort or insertion sort. To better understand how Merge sort divides an array look at the picture shown.</p>
      </div>
) ;

// [`Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem
//  into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions
//   to the sub-problems are then combined to give a solution to the original problem. So Merge Sort first divides the array into equal halves
//    and then combines them in a sorted manner.The whole process of sorting an array of N integers can be summarized into three steps-  
// `,
// `1. Divide the array into two halves.`,
// `2. Sort the left half and the right half using the same recurring algorithm.`,
// `3. Merge the sorted halves.`, 
// `The biggest advantage of using Merge sort is that the time complexity 3 is only n*log(n) to sort an entire Array. It is a lot better than n^2 
// running time of bubble sort or insertion sort. To better understand how Merge sort divides an array look at the picture shown.`]

export const quickText = [`Quick Sort is a sorting algorithm, which is commonly used in computer science. Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays. There are two basic operations in the algorithm, 
swapping items in place and partitioning a section of the array.`,
`There are different partitioning schemes like the Lomuto and Hoare scheme.
 Lomuto’s partition scheme is easy to implement as compare to Hoare scheme but we are using the Hoare scheme because it is more efficient.It works 
 by initializing two indexes that start at two ends, the two indexes move toward each 
 other until an inversion is (A smaller value on left side and greater value on right side) found. When an inversion 
 is found, two values are swapped and process is repeated.`,
`Although the worst case time complexity of QuickSort is O(n2) which is more than many other sorting algorithms like 
Merge Sort and Heap Sort, QuickSort is faster in practice, because its inner loop can be efficiently implemented on most 
architectures, and in most real-world data. QuickSort can be implemented in different ways by changing the choice of pivot, 
so that the worst case rarely occurs for a given type of data. However, merge sort is generally considered better when data 
is huge and stored in external storage. `]

export const bubbleText = [`Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form 
of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.
`,
`If the given array has to be sorted in ascending order, then bubble sort will start by comparing the first element of the array with the second 
element, if the first element is greater than the second element, it will swap both the elements, and then move on to compare the second and the third 
element, and so on.`,
`If we have total n elements, then we need to repeat this process for n-1 times.
It is known as bubble sort, because with every complete iteration the largest element in the given array, bubbles up towards the last place or the highest 
index, just like a water bubble rises up to the water surface.
Sorting takes place by stepping through all the elements one-by-one and comparing it with the adjacent element and swapping them if required.`,
`The main advantage of Bubble Sort is the simplicity of the algorithm.
Time complexity of Bubble Sort is O(n2).The space complexity for Bubble Sort is O(1), because only a single additional memory space is required 
i.e. for temp variable.
Also, the best case time complexity will be O(n), it is when the list is already sorted.`]

export const insertionText = [`Insertion sort is the sorting mechanism where the sorted array is built having one item at a time. The array elements are compared with each other sequentially 
and then arranged simultaneously in some particular order. The analogy can be understood from the style we arrange a deck of cards. This sort works on the principle of inserting an element at a 
particular position, hence the name Insertion Sort.`,
`It iterates the input elements by growing the sorted array at each iteration. It compares the current element with the largest value in the sorted array. If the current element is greater, 
then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. This is done by shifting all the elements, 
which are larger than the current element, in the sorted array to one position ahead`,
`Even though insertion sort is efficient, still, if we provide an already sorted array to the insertion sort algorithm, it will still execute the outer for loop, thereby requiring n steps to sort an already 
sorted array of n elements, which makes its best case time complexity a linear function of n.`,
`Wherein for an unsorted array, it takes for an element to compare with all the other elements which mean every n element compared with all other n elements. Thus, making it for n x n, i.e., n2 comparisons.`]

export const selectionText = () =>{
   return(
      <div>
         <p className="info-paragraph">The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear 
// scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted.</p>
         <p >The basic algorithm looks like this:</p>
         <ol className="info-paragraph">
            <li> Assume the first item is the smallest value.</li>
            <li> Compare this item to the second item.</li>
            <li> If the second item is smaller than the first, set the second item as the new minimum.</li>
            <li> Continue until the end of the data set is reached.</li>
            <li> If the minimum value is not the item you started with, swap them.</li>
         </ol>
         <p className="info-paragraph">As you can guess, this algorithm is called Selection Sort because it repeatedly selects the next smallest element and swaps it into its place. 
         It is a very simple, comparison algorithm that runs in O(n²) time. This algorithm is very simple and easy to implement, however it is also very inefficient (though not more so than bubble sort!).</p>
      </div>
   )
}
   



// [`
// The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear 
// scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted.`,
// `
// Assume the first item is the smallest value.

// `,
// `Compare this item to the second item.
// If the second item is smaller than the first, set the second item as the new minimum.
// Continue until the end of the data set is reached.
// If the minimum value is not the item you started with, swap them.`,
// ``]

