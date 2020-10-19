import React from 'react';
import * as sortText from './algoText'
import mergeSortImg from '../../assets/mergeSortImg.png';
import quicksortImg from '../../assets/quicksortImg2.png';
import bubblesortImg from '../../assets/bubblesortImg.png';
import insertionImg from '../../assets/insertionImg.png';
import selectionImg from '../../assets/selectionImg.png';
import heapImg from '../../assets/heapImg.jpg';

export const AlgoSortInfo = (props) =>{

    let sortInfo = null;

    switch(props.sort){
        case("merge"):

            sortInfo = (
            <div className="explanation row">
                <div className="col-md-6 explanation-text">
                    <sortText.mergeText />
                </div>
                <div className="col-md-6 text-center">
                    <img className="normalImg" src={mergeSortImg} alt="merge sort  image"/>
                </div>
            </div> );
            break;
        
        case("quick"):

            sortInfo = (<div className="explanation d-md-flex">
                <div className="col-md-6 explanation-text">
                    {sortText.quickText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
                </div>
                <div className="text-center col-md-6 ">
                    <img className="tallImg" src={quicksortImg} alt="quicksort  image "/>
                </div>
                </div>);
            break;

        case("bubble"):

            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {sortText.bubbleText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
                </div>
                <div className="text-center col-md-6 ">
                    <img className="tallImg" src={bubblesortImg} alt="bubblesort image "/>
                </div>
                </div> );
            break;

        case("insertion"):

            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {sortText.insertionText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
                </div>
                <div className="text-center col-md-6 ">
                    <img className="tallImg" src={insertionImg} alt="insertion sort image"/>
                </div>
                </div> );
            break;

        case("selection"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {/* {sortText.selectionText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })} */}
                   <sortText.selectionText />
                </div>
                <div className="text-center col-md-6 ">
                    <img className="normalImg" src={selectionImg} alt="selection sort image"/>
                </div>
                </div> );
            break;
        case("heap"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {/* {sortText.selectionText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })} */}
                   <sortText.heapText />
                </div>
                <div className="text-center col-md-6 ">
                    <img className="normalImg" src={heapImg} alt="heap sort image"/>
                </div>
                </div> );
            break;

        default:
            sortInfo = null;
    }

    return sortInfo;
}
