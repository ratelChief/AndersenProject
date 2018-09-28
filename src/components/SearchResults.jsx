import { React } from 'react';

export default class SearchResults extends React.Component {

  render() {
    const { searchResults } = this.props;

    const searchList =
    searchResults.map(
      result => result.title);

    return (
      <div> {searchList} </div>
    );
  }
}
