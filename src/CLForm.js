import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox,
  Button
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {help && <HelpBlock>{help}</HelpBlock>}
      <FormControl {...props} />
    </FormGroup>
  );
}

type Props = {
  updateCities: (cities: string[]) => {},
  updateQuery: (query: string) => {}
};
export default class CLForm extends Component {
  props: Props;
  state = {
    includes: 'js,javascript,node,react',
    excludes: 'tester,affiliate',
    isPaid: true,
    isTitlesOnly: false,
    isPostedToday: false
  };
  _selectCity = null; // initialize ref
  updateIncludes = event => {
    this.setState({ includes: event.target.value });
  };
  updateExcludes = event => {
    this.setState({ excludes: event.target.value });
  };
  toggleIsPaid = event => {
    this.setState({ isPaid: event.target.value });
  };
  toggleIsTitlesOnly = event => {
    this.setState({ isTitlesOnly: event.target.value });
  };
  toggleIsPostedToday = event => {
    this.setState({ isPostedToday: event.target.value });
  };
  updateCities = event => {
    const selected = [...this._selectCity]
      .filter(option => option.selected)
      .map(option => option.value);
    this.props.updateCities(selected);
  };
  generateQuery = () => {
    const {
      includes,
      excludes,
      isPaid,
      isTitlesOnly,
      isPostedToday
    } = this.state;
    const includesStr = encodeURI(`${includes.replace(/,/g, '|')}`); // ex. "ruby,python,matlab" => "ruby|python|matlab"
    const excludesStr = encodeURI(`-${excludes.replace(/,/g, '+-')}`); // ex. "-test -affiliate" => "+-test+-affiliate"
    const isPaidStr = isPaid ? '&is_paid=yes' : '';
    const isTitlesOnlyStr = isTitlesOnly ? '&srchType=T' : '';
    const isPostedTodayStr = isPostedToday ? '&postedToday=1' : '';
    const queryUrl = `?query=%28${includesStr}%29+${excludesStr}${isPaidStr}${isTitlesOnlyStr}${isPostedTodayStr}`;
    this.props.updateQuery(queryUrl);
  };
  render() {
    const {
      includes,
      excludes,
      isPaid,
      isTitlesOnly,
      isPostedToday
    } = this.state;
    return (
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Include"
          value={includes}
          placeholder="Enter skills, like javascript, react, python, nlp, mobile"
          help="Separate with commas"
          onChange={this.updateIncludes}
        />
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Exclude"
          value={excludes}
          help="Separate with commas"
          onChange={this.updateExcludes}
          placeholder="Enter terms you want to avoid, like wordpress, affiliate, test"
        />
        <FormGroup>
          <ControlLabel>Options</ControlLabel>
          <Checkbox value={isPaid} onChange={this.toggleIsPaid}>
            Paid
          </Checkbox>
          <Checkbox value={isTitlesOnly} onChange={this.toggleIsTitlesOnly}>
            Titles Only
          </Checkbox>
          <Checkbox value={isPostedToday} onChange={this.toggleIsPostedToday}>
            Posted Today
          </Checkbox>
        </FormGroup>
        <FieldGroup
          componentClass="select"
          multiple
          label="Cities to query"
          onChange={this.updateCities}
          help="Cmd-click to select multiple"
          inputRef={ref => (this._selectCity = ref)}
        >
          <option value="baltimore">Baltimore</option>
          <option value="boston">Boston</option>
          <option value="chicago">Chicago</option>
          <option value="denver">Denver</option>
          <option value="houston">Houston</option>
          <option value="losangeles">Los Angeles</option>
          <option value="newyork">New York</option>
          <option value="philadelphia">Philadelphia</option>
          <option value="sacramento">Sacramento</option>
          <option value="seattle">Seattle</option>
          <option value="sfbay">SF Bay Area</option>
          <option value="washingtondc">Washington DC</option>
        </FieldGroup>

        <Button onClick={this.generateQuery}>Generate Queries</Button>
      </form>
    );
  }
}
