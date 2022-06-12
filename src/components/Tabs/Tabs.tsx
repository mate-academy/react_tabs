// implement a component here
import classNames from 'classnames';
import './Tabs.scss';
import { Tab } from '../../react-app-env';

interface Props {
  tabs: Tab[];
  content: string;
  selectedTabId: (tabid: string) => void;
  onTabSelected: (tabid: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  content,
  onTabSelected,
}) => {
  return (
    <div className="tab__box m-6">
      <div className="tab__buttons-box is-flex-direction-column">
        {tabs.map((tab: Tab) => {
          return (
            <div
              key={tab.id}
              data-cy="tab-content"
              className={classNames(
                'tab__buttons',
                {
                  active: tab.content === content,
                },
              )}
            >
              <button
                type="button"
                className="has-text-info button is-white"
                onClick={() => {
                  selectedTabId(tab.id);
                  onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </button>
            </div>
          );
        })}
      </div>
      <div className="tab__subtitle subtitle">{content}</div>
    </div>
  );
};
