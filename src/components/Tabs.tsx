import React from 'react';
import './Tabs.css';

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
            <>
              <button
                className={`tab__checed
                ${item.id === chooseId && 'tab__checed--select'}`}
                type="button"
                key={item.id}
                name={item.title}
                onClick={() => tabChoose(item)}
              >
                {item.title}
              </button>
            </>
          </div>
        ))}
      </div>
      <p className="tab__p">
        {selectTab?.content || tabs[0].content}
      </p>
    </div>
  );
};
