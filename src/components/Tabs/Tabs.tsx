import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <ul className="tabs-menu">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={classNames('button', {
                'button-selected': tab.id === selectedTabId,
              })}
              style={{ boxShadow: 'none' }}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="box">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};
