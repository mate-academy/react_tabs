import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <li
            className={classNames({ 'is-active': id === selectedTabId })}
            data-cy="Tab"
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => {
                onTabSelected(id);
              }}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
