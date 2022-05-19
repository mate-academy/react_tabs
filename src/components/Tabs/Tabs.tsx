import React from 'react';
import classNames from 'classnames';

type Props = {
  props: Tab[],
  selected: string,
  newSelected: ((id: Tab) => void),
};

const Tabs: React.FC<Props> = ({
  props,
  selected,
  newSelected,
}) => {
  return (
    <div className="tabs">
      <div className="app__buttons">
        {props.map(tab => (
          <button
            key={tab.id}
            className={classNames(
              'app__button-tab',
              { 'app__button-tab--active': tab.id === selected },
            )}
            type="button"
            onClick={() => newSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="app__content">
        {props.find(prop => prop.id === selected)?.content}
      </div>
    </div>
  );
};

export default Tabs;
