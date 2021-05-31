# React Tabs
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://leonid-vegera.github.io/react_tabs/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
1. Your `App` component contains an array of `tabs`
    ```javascript
    const tabs = [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ];
    ```
1. Save the `selectedTab` in the `App` (the first one by default)
1. Implement the `Tabs` component accepting `tabs` as a prop 
   and displaying a link per each `tab` and the content of the selected tab
1. Pass the `selectedTabId` as a prop to the `Tabs`, the specified tab should be selected if possible
  (otherwise the first tab is selected)
1. Pass the `onTabSelected` callback to the `Tabs`
   it should be called whenever the user selects another tab.
   (Don't call the callback if the tab was not changed)
1. The callback should receive the data of the selected tab (an object from the array)
1. Create an `h1` inside the `App` saying `Selected tab is Tab 1` (show the title of the selected tab)
1. When the user selects another tab the `h1` should be updated accordingly
1. The `Tabs` component should be stateless

![tabs](./description/tabs.gif)
