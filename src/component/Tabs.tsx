import { FC } from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  selectTab: (selected: Tab) => void;
};

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTab } = props;

  return (
    <section>
      <ul className="nav nav-tabs">
        {tabs.map(
          tab => {
            const { id, title } = tab;

            return (
              <li key={id} className="nav-item">
                <button
                  type="button"
                  className={classNames('btn btn-outline-dark btn-lg', { active: selectedTabId === id })}
                  onClick={() => {
                    if (selectedTabId !== id) {
                      selectTab(tab);
                    }
                  }}
                >
                  {title}
                </button>
              </li>
            );
          },
        )}
      </ul>
      <p>
        {tabs.find(item => item.id === selectedTabId)?.content}
      </p>
    </section>
  );
};
