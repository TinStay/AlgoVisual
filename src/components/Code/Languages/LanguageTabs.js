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
              activeKey={this.state.language}
              onSelect={(k) => this.setLanguage(k)}
            >
              <Tab eventKey="js" title="JavaScript">
                    <LanguageCode sort={this.props.sort}
                    language={this.state.language} />
              </Tab>
              <Tab eventKey="python" title="Python">
                  <LanguageCode sort={this.props.sort}
                    language={this.state.language} />      
              </Tab>
              <Tab eventKey="c#" title="C#" >
              <LanguageCode sort={this.props.sort} 
                    language={this.state.language} />
              </Tab>
            </Tabs>
          );
    }
  }
 

export default LanguageTabs;