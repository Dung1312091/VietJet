import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
const components = {
  DropdownIndicator: null
};
const createOption = label => ({
  label,
  value: label
});

export default class InputTabComplete extends Component {
  state = {
    inputValue: '',
    value: []
  };
  handleChange = (value, actionMeta) => {
    console.group('Value Changed');
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
  };
  handleInputChange = inputValue => {
    this.setState({ inputValue });
  };
  handleKeyDown = event => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Tab':
        console.group('Value Added');
        console.log(value);
        console.groupEnd();
        const cloneValue = [...value];
        console.log('cloneValue', cloneValue);
        const indexInputValue = cloneValue.findIndex(item => {
          return item.value === inputValue;
        });
        if (indexInputValue === -1) {
          this.setState({
            inputValue: '',
            value: [...value, createOption(inputValue)]
          });
          event.preventDefault();
        }
        // event.preventDefault();
        break;
      default:
        break;
    }
  };
  render() {
    const { inputValue, value } = this.state;
    console.log('inputValue', inputValue);
    console.log('value', value);
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Type something and press tabs..."
        value={value}
      />
    );
  }
}
