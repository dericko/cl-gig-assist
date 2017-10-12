import React, { Component } from 'react';
import CLForm from './CLForm';
import OutputPanel from './OutputPanel';

export default class GigAssistPanel extends Component {
  state = {
    cities: ['nyc'],
    query:
      'cpg?query=%28js%7Cjavascript%7Cnode%7Creact%29+-affiliate+-tester&is_paid=yes'
  };
  updateCities = (cities: string[]) => {
    this.setState({ cities: cities });
  };
  updateQuery = (query: string) => {
    this.setState({ query: query });
  };
  render() {
    const { cities, query } = this.state;
    return (
      <div>
        <CLForm
          updateCities={this.updateCities}
          updateQuery={this.updateQuery}
        />
        <OutputPanel cities={cities} query={query} />
      </div>
    );
  }
}
