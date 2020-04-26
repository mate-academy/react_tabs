import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.PureComponent {
  render() {
    const { tab, toggleTabs } = this.props;
    const { id, title, selected } = tab;
    const liClassName = selected
      ? 'tabs__item tabs__item--selected'
      : 'tabs__item';

    const linkClassName = selected
      ? 'tabs__link tabs__link--selected'
      : 'tabs__link';

    return (
      <li id={id} className={liClassName}>
        <a
          href="./#"
          className={linkClassName}
          onClick={e => toggleTabs(e, this.props.tab)}
        >
          {title}
        </a>
      </li>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTabs: PropTypes.func.isRequired,
};

export default Tab;
