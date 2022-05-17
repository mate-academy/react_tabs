import './Tabs.scss';
import classNames from 'classnames';

export interface ItabProps {
  tabs: Tab[],
  selectedId: string | number,
  onTabSelected: ((id: string) => void),
  className?: string,
}

export const Tabs: React.FC<ItabProps> = ({
  tabs,
  selectedId,
  onTabSelected,
  className,
}) => {
  return (
    <div className={classNames('Tabs', className)}>
      {tabs && tabs.map((tab) => (
        <div
          className={classNames('Tab', {
            Tab__selected: tab.id === selectedId,
          })}
          key={tab.id}
          onClick={() => onTabSelected(tab.id)}
          aria-hidden="true"
        >
          <h2 className={classNames('TabTitle', {
            TabTitle__selected: tab.id === selectedId,
          })}
          >
            {tab.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
