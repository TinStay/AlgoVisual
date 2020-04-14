import React from 'react';
import {Table} from 'react-bootstrap';


const TimeComplexity = () =>{

    return(
        <div id="visualizer-container" className='visualizer-container text-center'>
             <div className="mt-4">
                <h1 className='blue mt-4 letter-spacing'>Time and space compexity </h1>
                <h4 className="white mt-4">Find out which algorithms take more time to perform and understand the big O notation.</h4>
             </div>
                
                <div className='table '>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Algorithm</th>
                        <th colSpan='3'>Time Complexity</th>
                        
                        <th>Space Compexity</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                        <th> </th>
                        <th>Best</th>
                        <th>Average</th>
                        <th>Worst</th>
                        <th>Worst</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mergesort</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        
                        </tr>
                        <tr>
                        <td>Quicksort</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        
                        </tr>
                        <tr>
                        <td>Bubblesort</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        
                        </tr>
                    </tbody>
                    </Table>
                    
                </div>
            

            </div>
    );
}

export default TimeComplexity;