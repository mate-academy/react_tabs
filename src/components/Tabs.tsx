import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedId: string;
  onTabSelected : (x: string, y: string) => void;
};

export class Tabs extends React.PureComponent<Props> {
  render() {
    const { tabs, selectedId, onTabSelected } = this.props;

    return (
      <ul className="list content__list">
        <span className="list__mask">
          mask
        </span>
        {tabs.map(tab => (
          <li
            className="item list__item"
            key={tab.id}
          >
            <button
              type="button"
              className={classNames(
                'item__button',
                {
                  'item__button--choosed': tab.id === selectedId,
                },
              )}
              onClick={() => {
                onTabSelected(tab.id, tab.title);
              }}
            >
              {tab.title}
            </button>
            <span className={classNames(
              'item__content',
              {
                'item__content--visible': tab.id === selectedId,
              },
            )}
            >
              {tab.content}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
