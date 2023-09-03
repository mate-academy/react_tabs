import { useEffect } from 'react';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Array<Tab>,
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs = ({
  tabs, selectedTabId, onTabSelected,
}: Props) => {
  useEffect(() => {
    if (!tabs.map(el => el.id).includes(selectedTabId)) {
      document.querySelector('li:first-child')?.classList.add('is-active');
    }
  });

  return (

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={tab.id === selectedTabId
                    ? 'is-active'
                    : ''}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                  >
                    <button
                      type="button"
                      value={tab.id}
                      onClick={() => {
                        return (document.querySelector('.is-active')
                          ?.querySelector('a')?.getAttribute('href') !== `#${tab.id}`
                          ? onTabSelected(tab)
                          : null);
                      }}
                      style={{
                        backgroundColor: 'white',
                        border: 'none',
                        fontFamily: 'inherit',
                      }}
                    >
                      {tab.title}
                    </button>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`Some text ${selectedTabId.slice(4)}`}
      </div>
    </div>

  );
};
