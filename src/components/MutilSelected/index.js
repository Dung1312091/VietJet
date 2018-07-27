// import React, { Component } from 'react';

// import CreatableSelect from 'react-select/lib/Creatable';
// export default class MutilOrSelected extends Component {
//   handleChange = (newValue, actionMeta) => {
//     console.group('Value Changed');
//     console.log(newValue);
//     console.log(`action: ${actionMeta.action}`);
//     console.groupEnd();
//   };
//   render() {
//     const {options, isMulti, isClearable} = this.props;
//     return (
//       <CreatableSelect
//         classNames='text'
//         isMulti={isMulti}
//         isClearable={isClearable}
//         onChange={this.handleChange}
//         options={options}
//       />
//     );
//   }
// }

import React, { Component } from 'react';

import Select from 'react-select';
export default class MutilOrSingleSelected extends Component {
  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    const { options, isMulti, isClearable } = this.props;
    return (
      <Select
        classNames="text"
        isMulti={isMulti}
        isClearable={isClearable}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
