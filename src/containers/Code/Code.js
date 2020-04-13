import React, { PureComponent } from 'react';
import LanguageTabs from '../../components/Code/Languages/LanguageTabs';
import { AlgoSortInfo } from '../../components/Algorithms/AlgorithmsInfo';

import {Tabs, Tab} from 'react-bootstrap';



class CodeSection extends PureComponent{
    state={
        sort: 'merge'
    
    }

    setSort = (sort) =>{
        this.setState({sort: sort})
        
    }

    render(){
        console.log(this.state.sort)
    

        return (
            <div id="code-container" className='code-container '>
             <div className=" text-center code-jumbotron">
                <h1 className='red  letter-spacing'>Code Review</h1>
                <h4 className=" mt-4">Check out the code behind the sorting algorithms and read more about the logic behind them. </h4>
             </div>
             <div className="row code-section ">
             <div className="col-md-5 explanation-section">
                    <h1>Explanation</h1>
                    <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.sort}
                    onSelect={(sort) => this.setSort(sort)}
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
                    </Tabs>
                    
                </div>
                <div className="col-md-5 code-section">
                    <h1>Code</h1>
                    <div className="row languages">
                        <LanguageTabs sort={this.state.sort}/>
                    </div>
                </div>
                
             </div>

            </div>
          );
    }
  
}


export default CodeSection;

