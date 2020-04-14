import React from 'react';
import mergeSortImg from '../../assets/mergeImg.png';
import quicksortImg from '../../assets/quicksortImg.png';

export const AlgoSortInfo = (props) =>{

    let sortInfo = null;

    switch(props.sort){
        case("merge"):
            sortInfo = (
            <div className="explanation row">
                <div className="col-md-6 explanation-text">
                    <p>Merge sort is a sorting algorithm based on divide and conquer technique.
                    It works by recursively breaking down a problem into two or more sub-problems
                    of the same or related type, until these become simple enough to be solved directly.
                    The solutions to the sub-problems are then combined to give a solution to the original
                    problem. So Merge Sort first divides the array into equal halves and then combines them
                    in a sorted manner.
                    </p>
                    <p>Merge sort is a sorting algorithm based on divide and conquer technique.
                    It works by recursively breaking down a problem into two or more sub-problems
                    of the same or related type, until these become simple enough to be solved directly.
                    The solutions to the sub-problems are then combined to give a solution to the original
                    problem. So Merge Sort first divides the array into equal halves and then combines them
                    in a sorted manner.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={mergeSortImg} alt="mergeSortImg"/>
                </div>
            </div> );
            break;
        
        case("quick"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                <p>Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold 
                    elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays.
                     There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.</p>
                <p>Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold 
                    elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays.
                     There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.</p>
                <p>Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold 
                    elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays.
                     There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.</p>
                
                </div>
                <div className="text-center col-md-6 ">
                    <img src={quicksortImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        default:
            sortInfo = null;
    }

    return sortInfo
}