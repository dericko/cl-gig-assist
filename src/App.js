import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import CLForm from './CLForm';

import './App.css';

const SAMPLE_QUERY =
  'cpg?query=%28web*+%7C+wix+%7C+blog*+%7C+app+%7C+mobile+%7C+android+%7C+ios+%7C+js+%7C+javascript*+%7C+node*+%7C+react*+%7C+program*+%7C+computer*%29+-php+-wordpress+-.net+-sales+-test*+-student*+-affiliate*&sort=date&is_paid=yes&srchType=T';
function generateLinkCL(city: string, query: string) {
  return `https://${city}.craigslist.org/search/${query}`;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CL Gig Assist</h1>
        </header>
        <p className="App-intro">
          Improve your gig success with this, the best technology!
        </p>
        <CLForm />
        <Panel header="Output">
          <ul>
            <li>
              <a href={generateLinkCL('newyork', SAMPLE_QUERY)} target="_blank">
                New York
              </a>
            </li>
            <li>
              <a href={generateLinkCL('sfbay', SAMPLE_QUERY)} target="_blank">
                SF Bay Area
              </a>
            </li>
            <li>
              <a
                href={generateLinkCL('philadelphia', SAMPLE_QUERY)}
                target="_blank"
              >
                Philadelphia
              </a>
            </li>
          </ul>
        </Panel>
      </div>
    );
  }
}

export default App;
