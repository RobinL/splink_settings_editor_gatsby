import React from 'react';


import SelectExample from "../components/select_example"
import  MonacoWindow  from "../components/monaco"
import Panel from "../components/panel"
import all_example_settings from "../data/all_example_settings.js"

class Interface extends React.Component {

    // Want to use StaticQuery instead
    // https://www.gatsbyjs.org/docs/static-query/


    constructor(props) {
        super(props);
        this.state = {selection: "id_1"}
      }

    handleChange = (event) => {

        this.setState({selection: event.target.value})
    }

    render() {

    let settings_dict = all_example_settings[this.state.selection].settings_dictionary
    let settings_text = JSON.stringify(settings_dict, null, 4)

      return <div>
          <SelectExample onChange={this.handleChange} all_example_settings={all_example_settings}/>
          <Panel select_select_id={this.state.selection} />
          <MonacoWindow editor_contents_string={settings_text}/>
      </div>;
    }
  }

export default Interface

