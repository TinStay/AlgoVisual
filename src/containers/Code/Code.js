import React, { PureComponent } from 'react';
import LanguageTabs from '../../components/Code/Languages/LanguageTabs';
import mergeSortImg from '../../assets/mergeSortImg.png';



class CodeSection extends PureComponent{
    state={
        
    
    }


    render(){
       
    

        return (
            <div id="code-container" className='code-container '>
             <div className=" text-center code-jumbotron">
                <h1 className='red  letter-spacing'>Code Review</h1>
                <h4 className=" mt-4">Check out the code behind the sorting algorithms and read more about the logic behind them. </h4>
             </div>
             <div className="row code-section ">
             <div className="col-md-5 explanation-section">
                    <h1>Explanation</h1>
                    <div className="explanation">
                        <div className="row explanation-text">
                        <p>Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
                            Merge sort first divides the array into equal halves and then combines them in a sorted manner.</p>
                        </div>
                        <div className="image">
                            <img src={mergeSortImg} alt="mergeSortImg"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 code-section">
                    <h1>Code</h1>
                    <div className="row languages">
                        <LanguageTabs />
                    </div>
                </div>
                
             </div>

            </div>
          );
    }
  
}


export default CodeSection;

