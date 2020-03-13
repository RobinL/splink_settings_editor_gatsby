import React, { Component } from 'react';

class Panel extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
      return <div>{this.props.selection}</div>;
    }
  }

export default Panel