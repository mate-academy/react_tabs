import classNames from 'classnames';

type Props = {
  tabs: { id: string; title: string; content: string }[];
  activeId: string;
  onTabClick: (id: string) => void;
};

export const Tabs = ({ tabs, activeId, onTabClick }: Props) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              className={classNames({
                'is-active': tab.id === activeId,
              })}
              data-cy="Tab"
              key = {tab.id}
            >
              <a
                href={'#' + tab.id}
                data-cy="TabLink"
                onClick={() => onTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
