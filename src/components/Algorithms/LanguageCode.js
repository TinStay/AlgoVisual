import React from 'react';

const LanguageCode = (props) => {
    let code= null;
        
    switch(props.language){
        case("js"):
            if(props.sort=="merge"){
                code = `// Split the array into halves and merge them recursively 
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
            }
            
            
            break;

        case('python'):
            code="Python code goes here"
            break;
        case("c#"):
            code="C# code goes here"
                break;
    }
        
    

    if(props.sort =="quick"){
        
        switch(props.language){
            case("js"):
                code = `Quick sort JS code`
                break;
            case('python'):
                code="Quick sort PYTHON code"
                break;
            case("c#"):
                code="Quick sort C# code"
                    break;
        }
        
    }

    return <div className="code">
    <pre>
        <code>
        {code}
        </code>
    </pre>
</div>


    }


export default LanguageCode;