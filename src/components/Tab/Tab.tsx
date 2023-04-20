import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  onTabSelected:(tab: Tab) => void;
  isSelected: boolean
};
// named TabInfo cuz have alerady type named Tab
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
