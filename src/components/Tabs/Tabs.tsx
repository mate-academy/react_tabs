import { FC } from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <section className="tabs">
      {
        tabs.map((tab) => (
          <article key={tab.id} className="tabs__tab">
            <button
              type="button"
              className={classNames(
                'tabs__tab-title',
                { 'tabs__tab-title--active': selectedTabId === tab.id },
              )}
              onClick={() => onTabSelected(tab)}
              disabled={selectedTabId === tab.id}
            >
              {tab.title}
            </button>
            <p className="tabs__tab-content">
              {
                selectedTabId === tab.id
                  ? tab.content
                  : null
              }
            </p>
          </article>
        ))
      }
    </section>
  );
};
