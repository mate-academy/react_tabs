import { Tab } from '../../types/tabs';

type Props = {
  tabs: Tab[],
  selectedTabId: string
  onTabSelected: (id: Tab) => void
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const active = () => {
    const defaultSelect = tabs
      .filter((el: Tab) => el.id === selectedTabId).length > 0;

    if (defaultSelect) {
      return selectedTabId;
    }

    return tabs[0].id;
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs
              .map((el: { id: string, title: string, content: string }) => {
                return (
                  <li
                    className={`${active() === el.id ? 'is-active' : ''}`}
                    data-cy="Tab"
                    key={el.id}
                  >
                    <a
                      href={`#${el.id}`}
                      data-cy="TabLink"
                      onClick={() => {
                        if (selectedTabId !== el.id) {
                          onTabSelected(el);
                        }
                      }}
                    >
                      {el.title}

                    </a>
                  </li>
                );
              })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`Some text ${active().replace(/[^0-9]/g, '')}`}
      </div>
    </div>
  );
};
