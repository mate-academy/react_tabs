import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    index: this.props.index,
  };

  onTabSelected = (event) => {
    const index = this.props.tabs.findIndex(
      element => element.title === event.target.innerText,
    );

    this.setState({
      index,
    });
  }

  render() {
    const { index } = this.state;
    const { tabs } = this.props;

    return (
      <table>
        <thead>
          <tr onClick={this.onTabSelected}>
            {tabs.map(tab => (
              <th key={tab.title}>
                {tab.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {tabs[index].content}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Tabs.propTypes = {
  index: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
    }),
  ).isRequired,
};
