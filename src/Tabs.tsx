import { Tab } from './react-app-env';
import './Tabs.scss';
import 'bulma/css/bulma.min.css';

interface Props {
  tabs: Tab[];
  onSelect: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, onSelect, selectedTabId }) => {
  const printContent = (tabId: string) => {
    return tabs.find(tab => tab.id === tabId)?.content;
  };

  return (
    <>
      <ul className="is-flex is-justify-content-center my-6">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className="button is-info is-large"
              onClick={() => onSelect(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div
        className="content mt-6 py-6 is-size-3
        has-text-white has-background-dark"
        data-cy="tab-content"
      >
        {printContent(selectedTabId)}
      </div>
    </>
  );
};
