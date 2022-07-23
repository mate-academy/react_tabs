import classNames from 'classnames';
import { Tab } from '../Tabs';

type Props = {
  tabs: Tab[],
  Select: (value: string) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  Select,
  selectedTabId,
}) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            className={
              classNames(
                '',
                { 'is-active': tab.id === selectedTabId },
              )
            }
            key={tab.id}
          >
            <a
              onClick={() => tab.id === selectedTabId || Select(tab.id)}
              href={`#${tab.id}`}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
