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
          <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
          <Checkbox inline>3</Checkbox>
        </FormGroup>
        <FormGroup controlId="formControlsSelectMultiple">
          <ControlLabel>Select cities</ControlLabel>
          <FormControl componentClass="select" multiple>
            <option value="select">select (multiple)</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
