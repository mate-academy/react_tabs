import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  onTabSelected: (tab: Tab) => void,
  isSelected: boolean,
};

export const TabComponent: React.FC<Props> = ({
  tab,
  onTabSelected,
  isSelected,
}) => {
  const handleClick = () => {
    if (!isSelected) {
      onTabSelected(tab);
    }
  };

  return (
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={handleClick}
    >
      {tab.title}
    </a>
  );
};
