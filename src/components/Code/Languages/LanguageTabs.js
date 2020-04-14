import React,{PureComponent} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import LanguageCode from '../../Algorithms/LanguageCode';

class LanguageTabs extends PureComponent{

    state = {
        language: 'js'
    }

    setLanguage = (key) =>{
        this.setState({
            language: key
        })
    }
    

    render(){
        // console.log("Current sort",this.props.sort)
        // console.log("Current language",this.state.language)

        return (
            <Tabs
              id="controlled-tab-example"
              className="justify-content-center d-flex "
              activeKey={this.state.language}
              onSelect={(k) => this.setLanguage(k)}
            >
              <Tab eventKey="js" title="JavaScript" className="">
                    <LanguageCode sort={this.props.sort}
                    language={this.state.language} />
              </Tab>
              <Tab eventKey="python" title="Python" className="">
                  <LanguageCode sort={this.props.sort}
                    language={this.state.language} />      
              </Tab>
              <Tab eventKey="c#" title="C#" className="">
              <LanguageCode sort={this.props.sort} 
                    language={this.state.language} />
              </Tab>
              <Tab eventKey="c++" title="C++" className="">
              <LanguageCode sort={this.props.sort} 
                    language={this.state.language} />
              </Tab>
              <Tab eventKey="java" title="Java" className="">
              <LanguageCode sort={this.props.sort} 
                    language={this.state.language} />
              </Tab>
              <Tab eventKey="swift" title="Swift" className="">
              <LanguageCode sort={this.props.sort} 
                    language={this.state.language} />
              </Tab>
            </Tabs>
          );
    }
  }
 

export default LanguageTabs;