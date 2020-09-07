import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Tabs.css';

export class Tabs extends React.PureComponent {
  render() {
    const { tabs, onSelected, currentContent } = this.props;

    return (
      tabs.map(tab => (
        <button
          type="button"
          key={tab.title}
          className={classnames(
            'app__tab',
            { app__tab_selected: tab.content === currentContent },
          )}
          onClick={() => (
            onSelected(tab.content)
          )}
        >
          {tab.title}
        </button>
      ))
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelected: PropTypes.func.isRequired,
  currentContent: PropTypes.string.isRequired,
};
