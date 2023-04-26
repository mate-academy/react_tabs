import { Tab } from '../../react-app-env';

interface Props {
  tab: Tab,
  onTabSelected: (ev: React.MouseEvent<HTMLAnchorElement>) => void,
}

export const Tabs: React.FC<Props> = ({ tab, onTabSelected }) => (
  <a
    href={`#${tab.id}`}
    data-cy="TabLink"
    id={tab.id}
    onClick={onTabSelected}
  >
    {tab.title}
  </a>
);
