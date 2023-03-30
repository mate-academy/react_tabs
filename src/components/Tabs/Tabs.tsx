import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  setTextByTabId: (tabId: string) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = (
  { tabs, setTextByTabId, selectedTabId },
) => {
  return (
    <>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <li
            className={classNames(
              { 'is-active': id === selectedTabId },
            )}
            data-cy="Tab"
            key={id}
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => setTextByTabId(id)}
            >
              {title}
            </a>
          </li>
        );
      })}
    </>
  );
};
