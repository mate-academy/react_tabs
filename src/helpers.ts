export function getTabById(tabs: Tab[], tabId: string): Tab {
  return tabs.find(tab => tab.id === tabId) || tabs[0];
}
