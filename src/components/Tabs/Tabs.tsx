import classNames from 'classnames';

export interface Tab {
  id: string;
  title: string;
  content: string
}

type Props = {
  tabs: Tab[];
  handler: (tabId :string) => void
  selectTab: number
};

export const Tabs : React.FC<Props> = ({ tabs, handler, selectTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li
              key={id}
              className={classNames(
                { 'is-active': id.includes(selectTab.toString()) },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                onClick={() => handler(id)}
                data-cy="TabLink"
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs[selectTab - 1].content}
    </div>
  </div>
);
