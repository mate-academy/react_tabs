import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  isSelected: Tab,
  handleSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  isSelected,
  handleSelectedTab,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul className="tabs__ul">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                'tabs__li',
                { 'is-active': isSelected.id === tab.id },
              )}
            >
              <a
                className="tabs__a"
                href="#tab-1"
                onClick={() => handleSelectedTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="block" data-cy="tab-content">
          {isSelected.content}
        </div>
      </div>
    </div>
  );
};
