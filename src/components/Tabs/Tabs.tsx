import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[]
  onChange: (index: number) => void;
  select: number;
};

export const Tabs: React.FC<Props> = ({ tabs, onChange, select }) => {
  function clickTab(event: React.SyntheticEvent, index:number) {
    event.preventDefault();
    onChange(index);
  }

  return (
    <ul>
      {tabs.map((tab, index) => (
        <li
          className={classNames('', { 'is-active': index === select })}
          key={tab.id}
        >
          <a
            href={tab.id}
            onClick={(event) => clickTab(event, index)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
