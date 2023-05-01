import { Tab } from '../types/Tab';

interface Props {
  tab: Tab,
  onTabSelected:(tab: Tab) => void;
  isSelected: boolean
}

export const TabInfo: React.FC<Props> = ({
  tab,
  onTabSelected,
  isSelected,
}) => {
  const { id, title } = tab;

  return (
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={() => {
        if (!isSelected) {
          onTabSelected(tab);
        }
      }}
    >
      {title}
    </a>
  );
};
