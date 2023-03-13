import classNames from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  selected: Tab,
  onTabSelected: (id: Tab) => void
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selected,
    onTabSelected,
  },
) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={
              classNames({ 'is-active': tab.id === selected.id })
            }
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => {
                if (selected.id !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selected.content}
    </div>
  </div>
);
