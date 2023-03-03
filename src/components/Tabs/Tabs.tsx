import classNames from 'classnames';

type TabsType = {
  id: string;
  title: string;
  content: string;
};

export const Tabs = ({
  tab,
  selectId,
  onTabSelected,
}: {
  tab: TabsType;
  selectId: string;
  onTabSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': id === selectId },
      )}
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        id={id}
        onClick={event => onTabSelected(event.currentTarget.id)}
      >
        {title}
      </a>
    </li>
  );
};
