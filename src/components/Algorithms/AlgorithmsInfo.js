import React from 'react';
import mergeSortImg from '../../assets/mergeSortImg.png';

export const AlgoSortInfo = (props) =>{

    let sortInfo = null;

    switch(props.sort){
        case("merge"):
            sortInfo = (<div className="explanation">
            <div className="row explanation-text">
            <p>Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
                Merge sort first divides the array into equal halves and then combines them in a sorted manner.</p>
            </div>
            <div className="image">
                <img src={mergeSortImg} alt="mergeSortImg"/>
            </div>
            </div> );
            break;
        
        case("quick"):
            sortInfo = (<div className="explanation">
                <div className="row explanation-text">
                <p>Quick Sort MOTHERFUCKA is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
                    Merge sort first divides the array into equal halves and then combines them in a sorted manner.</p>
                </div>
                <div className="image">
                    <img src={mergeSortImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        default:
            sortInfo = null;
    }

    return sortInfo
}