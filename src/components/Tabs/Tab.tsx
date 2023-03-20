export interface TabProps {
  id: string;
  title: string;
  onSelect: React.MouseEventHandler<HTMLAnchorElement>;
  selected: boolean;
}

export const Tab: React.FC<TabProps> = ({
  id,
  title,
  onSelect,
  selected,
}) => (
  <li data-cy="Tab" className={selected ? 'is-active' : ''}>
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={selected ? undefined : onSelect}
    >
      {title}
    </a>
  </li>
);
