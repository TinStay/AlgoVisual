import React, { PureComponent,  } from 'react';

import LanguageTabs from '../../components/Code/Languages/LanguageTabs';
import { AlgoSortInfo } from '../../components/Algorithms/AlgorithmsInfo';

import {Tabs, Tab} from 'react-bootstrap';



class CodeSection extends PureComponent{
    state={
        sort: 'merge',
        theposition: 0
    
    }

    

    setSort = (sort, e) =>{
        // console.log(e)
        e.preventDefault();
      
        this.setState({sort: sort})
        
        
    }

    render(){
        // console.log(this.state.sort)
    

        return (
            <div id="code-container" className='code-container'>
             <div className=" text-center code-jumbotron">
                <h1 className='red  letter-spacing'>Code and Explanation</h1>
                <h4 className=" mt-4">Check out the code behind the sorting algorithms and read more about the logic behind them. </h4>
             </div>
             <div className="row code-section-main ">
                <div className="col-12 col-md-12 explanation-section">
                        <h1 className="mb-4">Explanation</h1>
                            <Tabs
                            id="controlled-tab-example"
                            activeKey={this.state.sort}
                            onSelect={(sort, e) => this.setSort(sort, e)}
                            >
                            <Tab eventKey="merge" title="Merge sort">
                                <AlgoSortInfo sort={this.state.sort}/>
                            </Tab>
                            <Tab eventKey="quick" title="Quick sort">
                                <AlgoSortInfo sort={this.state.sort}/>
                            </Tab>
                            <Tab eventKey="bubble" title="Bubble sort" >
                                <AlgoSortInfo sort={this.state.sort}/>
                            </Tab>
                            <Tab eventKey="insertion" title="Insertion sort" >
                                <AlgoSortInfo sort={this.state.sort}/>
                            </Tab>
                            <Tab eventKey="selection" title="Selection sort" >
                                <AlgoSortInfo sort={this.state.sort}/>
                            </Tab>
                            <Tab eventKey="heap" title="Heap sort" >
                                <AlgoSortInfo sort={this.state.sort}/>
                            </Tab>
                           
                            </Tabs>
                        
                    </div>
                    <div  className="code-section d-lg-flex justify-content-center">
                        <div className="languages ">
                            <h1 className="mb-4 text-center">Code</h1>
                            <LanguageTabs sort={this.state.sort}/>
                        </div>
                        <div className="sorts">
                            <ul class="list-group">
                                <li className={this.state.sort === 'merge' ? "list-group-item active": 'list-group-item'} onClick={(e) => this.setSort('merge',e)}><a className="btn" >Mergesort</a> </li>
                                <li className={this.state.sort === 'quick' ? "list-group-item active": 'list-group-item'} onClick={(e) => this.setSort('quick',e)}><a className="btn" >Quicksort</a> </li>
                                <li className={this.state.sort === 'bubble' ? "list-group-item active": 'list-group-item'} onClick={(e) => this.setSort('bubble',e)}><a className="btn" >Bubble sort</a> </li>
                                <li className={this.state.sort === 'insertion' ? "list-group-item active": 'list-group-item'} onClick={(e) => this.setSort('insertion',e)}><a className="btn" >Insertion sort</a> </li>
                                <li className={this.state.sort === 'selection' ? "list-group-item active": 'list-group-item'} onClick={(e) => this.setSort('selection',e)}><a className="btn" >Selection sort</a> </li>
                                <li className={this.state.sort === 'heap' ? "list-group-item active": 'list-group-item'} onClick={(e) => this.setSort('heap',e)}><a className="btn" >Heap sort</a></li>
                                
                            </ul>
                        </div> 
                    </div>
                    
            </div>

            </div>
          );
    }
  
}


export default CodeSection;



