import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox,
  Button
} from 'react-bootstrap';
import './App.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class CLForm extends Component {
  state = { value: 'someText' };
  updateFormValue = v => {
    this.setState({ value: v.target.value });
  };
  render() {
    return (
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Include"
          placeholder="Enter skills, like javascript, react, python, nlp, mobile"
        />
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Exclude"
          placeholder="Enter terms you want to avoid, like wordpress, affiliate, test"
        />
        <FormGroup>
          <Checkbox inline selected>
            Paid
          </Checkbox>
          <Checkbox inline>Titles only</Checkbox>
          <Checkbox inline>Posted Today</Checkbox>
          <Checkbox inline>Include Nearby</Checkbox>
          <Checkbox inline>Bundle Duplicates</Checkbox>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>CMD-Click to select multiple cities</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">New York</option>
            <option value="select">Philadelphia</option>
            <option value="select">Chicago</option>
            <option value="select">SF Bay Area</option>
            <option value="select">Baltimore</option>
            <option value="select">Boston</option>
            <option value="select">Washington DC</option>
            <option value="select">Providence</option>
            <option value="select">Portland</option>
            <option value="select">Seattle</option>
            <option value="select">Los Angeles</option>
          </FormControl>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
