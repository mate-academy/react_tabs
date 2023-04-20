type Props = {
  tabId: number,
  title: string,
  onTabSelected: (tabId: number) => void,
};

export const Tab: React.FC<Props> = ({ tabId, title, onTabSelected }) => (
  <a
    href={`#tab-${tabId}`}
    data-cy="TabLink"
    onClick={() => onTabSelected(tabId)}
  >
    {title}
  </a>
);
