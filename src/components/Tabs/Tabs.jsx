import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={classNames(
          {
            'is-active': selectedTabId === tab.id,
          },
        )}
        data-cy="Tab"
      >
        <a
          onClick={() => onTabSelected(tab.id)}
          href={`#${tab.id}`}
          data-cy="TabLink"
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
