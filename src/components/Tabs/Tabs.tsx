import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  tabs: Tab[];
  value: Tab,
  onChange: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    value,
    onChange,
  } = props;

  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          className="btn btn-primary"
          key={tab.id}
          onClick={() => {
            onChange(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <p className="alert alert-primary">
        {value.content}
      </p>
    </div>
  );
};
