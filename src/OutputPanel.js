import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

// const SAMPLE_QUERY =
//   'cpg?query=%28web*+%7C+wix+%7C+blog*+%7C+app+%7C+mobile+%7C+android+%7C+ios+%7C+js+%7C+javascript*+%7C+node*+%7C+react*+%7C+program*+%7C+computer*%29+-php+-wordpress+-.net+-sales+-test*+-student*+-affiliate*&sort=date&is_paid=yes&srchType=T';
function generateLinkCL(city: string, query: string) {
  return `https://${city}.craigslist.org/search/cpg${query}`;
}

type Props = {
  cities: string[],
  query: string
};
export default class OutputPanel extends Component {
  props: Props;
  renderLink = (city, query) => {
    return (
      <ListGroupItem
        onClick={console.log(generateLinkCL(city, query))}
        key={city}
      >
        <a href={generateLinkCL(city, query)} target="_blank">
          {city}
        </a>
      </ListGroupItem>
    );
  };
  render() {
    const { cities, query } = this.props;
    return (
      <Panel header="Output">
        <ListGroup>
          {cities.map(city => this.renderLink(city, query))}
        </ListGroup>
      </Panel>
    );
  }
}
