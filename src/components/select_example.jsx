import React, { Component } from 'react';

class SelectExample extends Component {
    constructor(props) {
      super(props);
    }
    onChange(e) {
      this.props.onChange(e)
    }


    render() {

      let obj = this.props.all_example_settings
      let keys = Object.keys(this.props.all_example_settings)
      return (
        <div className="form-group">
          <label htmlFor="select1" >Select a value: </label>
          <select  onChange={this.onChange.bind(this)} className="form-control">
            {keys.map(key => <option value={key}>{obj[key]["example_name"]}</option>)}
          </select>

        </div>
      )
    }
  }

  export default SelectExample