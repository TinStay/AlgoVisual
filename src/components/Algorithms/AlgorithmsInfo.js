import React from 'react';
import * as sortText from './algoText'
import mergeSortImg from '../../assets/mergesortImg.png';
import quicksortImg from '../../assets/quicksortImg2.png';
import bubblesortImg from '../../assets/bubblesortImg.png';
import insertionImg from '../../assets/insertionImg.png';
import selectionImg from '../../assets/selectionImg.png';

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
                    <img className="normalImg" src={mergeSortImg} alt="mergeSortImg"/>
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
                    <img className="tallImg" src={quicksortImg} alt="quicksortImg"/>
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
                    <img className="tallImg" src={bubblesortImg} alt="bubblesortImg"/>
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
                    <img className="tallImg" src={insertionImg} alt="mergeSortImg"/>
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
                    <img className="normalImg" src={selectionImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        case("heap"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {/* {sortText.selectionText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })} */}
                   <sortText.selectionText />
                </div>
                <div className="text-center col-md-6 ">
                    <img className="normalImg" src={selectionImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;

        default:
            sortInfo = null;
    }

    return sortInfo;
}
