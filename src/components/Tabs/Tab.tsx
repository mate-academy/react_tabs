import { TabModel } from './TabModel';

type Props = {
  tab: TabModel;
  isActive: boolean;
  onClick: (tab: TabModel) => void;
};

export const Tab: React.FC<Props> = ({ tab, isActive, onClick }) => {
  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <a
        href={'#' + tab.id}
        data-cy="TabLink"
        onClick={click => {
          click.preventDefault();
          onClick(tab);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
