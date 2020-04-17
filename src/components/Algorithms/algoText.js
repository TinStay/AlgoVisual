export const mergeText = [`Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem
 into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions
  to the sub-problems are then combined to give a solution to the original problem. So Merge Sort first divides the array into equal halves
   and then combines them in a sorted manner.The whole process of sorting an array of N integers can be summarized into three steps-  
`,
`1. Divide the array into two halves.`,
`2. Sort the left half and the right half using the same recurring algorithm.`,
`3. Merge the sorted halves.`, 
`The biggest advantage of using Merge sort is that the time complexity 3 is only n*log(n) to sort an entire Array. It is a lot better than n^2 
running time of bubble sort or insertion sort. To better understand how Merge sort divides an array look at the picture shown.`]

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

