import React from 'react';
import mergeSortImg from '../../assets/mergeImg.png';
import quicksortImg from '../../assets/quicksortImg.png';

export const AlgoSortInfo = (props) =>{

    let sortInfo = null;

    switch(props.sort){
        case("merge"):
            sortInfo = (<div className="explanation">
            <div className="row explanation-text">
            <p>Merge sort is a sorting algorithm based on divide and conquer technique.
            It works by recursively breaking down a problem into two or more sub-problems
            of the same or related type, until these become simple enough to be solved directly.
            The solutions to the sub-problems are then combined to give a solution to the original
            problem. So Merge Sort first divides the array into equal halves and then combines them
            in a sorted manner.
            </p>
            </div>
            <div className=" text-center">
                <img src={mergeSortImg} alt="mergeSortImg"/>
            </div>
            </div> );
            break;
        
        case("quick"):
            sortInfo = (<div className="explanation">
                <div className="row explanation-text">
                <p>Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold 
                    elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays.
                     There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.</p>
                     {/* <ol>
                     Find a “pivot” item in the array. This item is the basis for comparison for a single round.
    Start a pointer (the left pointer) at the first item in the array.
    Start a pointer (the right pointer) at the last item in the array.
    While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
    While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
    If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
    Move the left pointer to the right by one and the right pointer to the left by one.
    If the left pointer and right pointer don’t meet, go to step 1.
                     </ol> */}
                </div>
                <div className="text-center">
                    <img src={quicksortImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        default:
            sortInfo = null;
    }

    return sortInfo
}