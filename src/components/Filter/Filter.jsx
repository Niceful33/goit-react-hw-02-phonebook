import React from 'react';

class Filter extends React.Component {
  state = {
    input: '',
  };
  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value });
    this.props.onInput(event.currentTarget.value);
  };
  render() {
    return (
      <label htmlFor="">
        Find contacts by name
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
export default Filter;
