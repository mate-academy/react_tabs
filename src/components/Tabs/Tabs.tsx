import { FC } from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: number) => void;
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <section className="tabs">
      {
        tabs.map((tab, index) => (
          <article key={tab.id} className="tabs__tab">
            <button
              type="button"
              className={classNames(
                'tabs__tab-title',
                { 'tabs__tab-title--active': selectedTabId === tab.id },
              )}
              onClick={() => onTabSelected(index)}
              disabled={selectedTabId === tab.id}
            >
              {tab.title}
            </button>
            {tab.content && (
              <p className="tabs__tab-content">
                {
                  selectedTabId === tab.id
                    ? tab.content
                    : null
                }
              </p>
            )}
          </article>
        ))
      }
    </section>
  );
};
