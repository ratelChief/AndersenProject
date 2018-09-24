import React from 'react';

export class Form extends React.Component {
    state = { placeName: '' };

  onInputChange = evt => {
    this.setState({
      placeName: evt.target.value
    });
  }

  onGoButtonClick = () => {
    this.props.onGoButton(this.state.placeName);
  }

  render() {
    return (
      <form className='page-form'>
        <input type='text' className='search-input' onChange={this.onInputChanges} />
        <button type='button' className='btn btn--search' onClick={this.onInputChange}>Go</button>
        <button className='btn btn--location'>My location</button>
        <span className='status-bar'>{this.props.data}</span>
        <fieldset className='results'> {this.props.locationList} </fieldset>
      </form>
    );
  }
}
