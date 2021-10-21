import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

function Tabs(props: Props) {
  const { tabs, onTabSelected, selectedTabId } = props;

  return (
    <ul className="list-reset flex border-b">
      {tabs.map(tab => (
        <li
          className="p-0"
          key={tab.id}
        >
          <a
            href={tab.id}
            className={
              classNames(
                'bg-white',
                'inline-block',
                'py-2',
                'px-4',
                'text-blue-400',
                'font-semibold',
                'focus:outline-none',
                { 'text-blue-800 active': tab.id === selectedTabId },
              )
            }
            onClick={(event) => {
              event.preventDefault();
              if (tab.id !== selectedTabId) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
