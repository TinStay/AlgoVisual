import React from 'react';
import {Table} from 'react-bootstrap';


const TimeComplexity = () =>{

    return(
        <div id="timecomplexity-container" className='timecomplexity-container text-center'>
             <div className="mt-4">
                <h1 className='blue mt-4 letter-spacing'>Time and space compexity </h1>
                <h4 className=" mt-4">Find out which algorithms take more time to perform and understand the big O notation.</h4>
             </div>
                
                <div className='table'>
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
                        <td><p className="nlogn">Ω(n log(n))</p></td>
                        <td><p className="nlogn">Θ(n log(n))</p></td>
                        <td><p className="nlogn">O(n log(n))</p></td>
                        <td><p className="n">O(n)</p></td>
                        
                        </tr>
                        <tr>
                        <td>Quicksort</td>
                        <td><p className="nlogn">Ω(n log(n))</p></td>
                        <td><p className="nlogn">Θ(n log(n))</p></td>
                        <td><p className="n2">O(n^2)</p></td>
                        <td><p className="logn">O(log(n))</p></td>
                        
                        </tr>
                        <tr>
                        <td>Bubblesort</td>
                        <td><p className="n">Ω(n)</p></td>
                        <td><p className="n2">Θ(n^2)</p></td>
                        <td><p className="n2">O(n^2)</p></td>
                        <td><p className="one">O(1)</p></td>
                        
                        </tr>
                        <tr>
                        <td>Insertion Sort</td>
                        <td><p className="n">Ω(n)</p></td>
                        <td><p className="n2">Θ(n^2)</p></td>
                        <td><p className="n2">O(n^2)</p></td>
                        <td><p className="one">O(1)</p></td>
                        
                        </tr>
                        <tr>
                        <td>Selection Sort</td>
                        <td><p className="n">Ω(n)</p></td>
                        <td><p className="n2">Θ(n^2)</p></td>
                        <td><p className="n2">O(n^2)</p></td>
                        <td><p className="one">O(1)</p></td>
                        
                        </tr>
                        <tr>
                        <td>Heapsort</td>
                        <td><p className="n">Ω(n)</p></td>
                        <td><p className="n2">Θ(n^2)</p></td>
                        <td><p className="n2">O(n^2)</p></td>
                        <td><p className="one">O(1)</p></td>
                        
                        </tr>
                    </tbody>
                    </Table>
                    
                </div>
            

            </div>
    );
}

export default TimeComplexity;