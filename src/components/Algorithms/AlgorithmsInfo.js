import React from 'react';
import * as sortText from './algoText'
import mergeSortImg from '../../assets/mergeImg.png';
import quicksortImg from '../../assets/quicksortImg2.png';

export const AlgoSortInfo = (props) =>{

    let sortInfo = null;

    switch(props.sort){
        case("merge"):
            sortInfo = (
            <div className="explanation row">
                <div className="col-md-6 explanation-text">
                {sortText.mergeText.map( p =>{
                        return <p className="info-paragraph">{p}</p>
                    })}
                </div>
                <div className="col-md-6 text-center">
                    <img src={mergeSortImg} alt="mergeSortImg"/>
                </div>
            </div> );
            break;
        
        case("quick"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {sortText.quickText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
                </div>
                <div className="text-center col-md-6 ">
                    <img src={quicksortImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        case("bubble"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {sortText.quickText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
                </div>
                <div className="text-center col-md-6 ">
                    <img src={quicksortImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        case("insertion"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {sortText.quickText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
                </div>
                <div className="text-center col-md-6 ">
                    <img src={quicksortImg} alt="mergeSortImg"/>
                </div>
                </div> );
            break;
        case("selection"):
            sortInfo = (<div className="explanation row">
                <div className="col-md-6 explanation-text">
                    {sortText.quickText.map( p =>{
                        return  <p className="info-paragraph">{p}</p>
                    })}
                   
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