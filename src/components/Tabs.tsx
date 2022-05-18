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
  return (
    <div className="tab">
      <div className="tab__items">
        {tabs.map(item => (
          <div className="tab__item">
            <>
              <button
                className="button"
                type="button"
                key={item.id}
                name={item.title}
                onClick={() => tabChoose(item)}
              >
                {item.title}
              </button>
              <p className="tab__p">
                {chooseId === item.id ? item.content : null}
              </p>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};
