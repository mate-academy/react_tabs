import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  isActive: boolean,
};

export const TabInfo = ({ tab, isActive }:Props) => {
  return (
    <li
      className={isActive === true ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
    </li>
  );
};
