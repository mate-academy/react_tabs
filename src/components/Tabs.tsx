import classNames from 'classnames';

export const Tabs: React.FC<Props> = ({ tabs, selected, onTabSelected }) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={classNames('tabs__button', {
              'tabs__button--selected': tab === selected,
            })}
            onClick={() => {
              if (tab !== selected) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </ul>
      <p className="tabs__content">{tabs.find(tab => tab === selected)?.content}</p>
    </div>
  );
};

interface Props {
  tabs: Tab[],
  selected: Tab,
  onTabSelected: (data: Tab) => void
}
