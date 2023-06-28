/* eslint-disable no-console */
export const TabItem = ({ tab, selectedTabId, onTabSelected }) => (
  <li
    className={
      selectedTabId === tab.id
        ? 'is-active'
        : ''
    }
    data-cy="Tab"
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={(e) => {
        if (tab.id !== selectedTabId) {
          onTabSelected(tab);
        }
      }}
    >
      Tab
      {` ${tab.id.slice(4)}`}
    </a>
  </li>
);
