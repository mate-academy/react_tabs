import React from 'react';
import propTypes from 'prop-types';
import { LoremIpsum } from 'react-lorem-ipsum';
import classNames from 'classnames';

export class Tabs extends React.PureComponent {
  render() {
    const { selectTabsId, tabs, onClickTab } = this.props;

    return (
      <>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <lu key={tab.id}>
              <button
                type="button"
                value={tab.id}
                className={classNames(`nav-link`,
                  { active: selectTabsId === tab.id })}
                onClick={onClickTab}
              >
                {tab.title}
              </button>
            </lu>
          ))}
        </ul>
        <div>
          <LoremIpsum p={selectTabsId} />
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: propTypes.arrayOf({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
  }).isRequired,
  selectTabsId: propTypes.string.isRequired,
  onClickTab: propTypes.func.isRequired,
};
