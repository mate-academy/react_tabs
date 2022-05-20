import React from 'react';
import './Tabs.css';
import classNames from 'classnames';

type Props = {
  chooseId: string,
  tabs: Tab[],
  tabChoose: (value: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  chooseId,
  tabs,
  tabChoose,
}) => {
  const selectTab = tabs.find(item => item.id === chooseId);

  return (
    <div className="tab">
      <div className="tab__items">
        {tabs.map(item => (
          <div className="tab__item">
            <button
              type="button"
              className={classNames(
                'tab__checed',
                {
                  'tab__checed--select': item.id === chooseId,
                },
              )}
              key={item.id}
              name={item.title}
              onClick={() => tabChoose(item)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      {selectTab && (
        <p className="tab__p">
          {selectTab.content}
        </p>
      )}
    </div>
  );
};
