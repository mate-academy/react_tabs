import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tab extends React.PureComponent {
  render() {
    const { tab, clickHandler, activeContent } = this.props;
    const btnClass = classNames({
      tab__btn: true,
      'tab__btn--pressed': activeContent === tab.index,
    });

    return (
      <>
        <div>
          <button
            type="button"
            className={btnClass}
            onClick={() => clickHandler(tab.index)}
          >
            {tab.title}
          </button>
        </div>
      </>
    );
  }
}

export const TabType = PropTypes.shape({
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

Tab.propTypes = {
  tab: TabType.isRequired,
  activeContent: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
