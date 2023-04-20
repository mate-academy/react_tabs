import classNames from 'classnames';
import { TabType } from '../../types/Tab';

type Props = {
  tab: TabType,
  index: number,
  onTabSelected: (tabId: number) => void,
  selectedTabId: number,
};

export const Tab: React.FC<Props> = ({
  tab,
  index,
  onTabSelected,
  selectedTabId,
}) => {
  const { id, title } = tab;
  const tabId = index + 1;

  return (
    <li
      key={id}
      data-cy="Tab"
      className={classNames({
        'is-active': tabId === selectedTabId,
      })}
    >
      <a
        href={`#tab-${tabId}`}
        data-cy="TabLink"
        onClick={() => onTabSelected(tabId)}
      >
        {title}
      </a>
    </li>
  );
};
