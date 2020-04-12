import React,{PureComponent} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

class LanguageTabs extends PureComponent{

    state = {
        activeCode: 'js'
    }

    setActiveCode = (key) =>{
        this.setState({
            activeCode: key
        })
    }
    

    render(){
        const mergeSort = `
    // Split the array into halves and merge them recursively 
    function mergeSort (arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }
    // get the middle item of the array rounded down
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle) // items on the left side 
    const right = arr.slice(middle) // items on the right side 

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
    }

    // compare the arrays item by item
    // and return the concatenated result
    function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
        } else {
        result.push(right[indexRight])
        indexRight++
        }
    }

    return result.concat(left.slice(indexLeft))
    .concat(right.slice(indexRight))
    }

    const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
    console.log(mergeSort(list)) 
    // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]`

        return (
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.activeCode}
              onSelect={(k) => this.setActiveCode(k)}
            >
              <Tab eventKey="js" title="JavaScript">
              <div className="code">
                  <pre>
                      <code>
                      {mergeSort}
                      </code>
                  </pre>
              </div>
              </Tab>
              <Tab eventKey="python" title="Python">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt provident nulla saepe ad dolor nihil sit fugiat quia eum.</p>
              </Tab>
              <Tab eventKey="c#" title="C#" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt provident nulla saepe ad dolor nihil sit fugiat quia eum.</p>
              </Tab>
            </Tabs>
          );
    }
  }
 

export default LanguageTabs;