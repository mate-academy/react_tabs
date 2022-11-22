import classNames from 'classnames';
import { Props } from '../../types/Props';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  handlerTabLink,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': selectedTab === tab.title,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => handlerTabLink(event)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find((tab) => tab.title === selectedTab)
          ?.content}
      </div>
    </div>
  );
};
