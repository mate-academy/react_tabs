# React Tabs

Implement the `App` and `Tabs` components to render and switch between given `tabs`.

> Here is [the working version](https://mate-academy.github.io/react_tabs)

1. Save the `selectedTabId` in the `App` (the first `tab` is selected by default);
1. Implement the `Tabs` component accepting `tabs` as a prop and displaying a link per each `tab` and the content of the selected tab.
1. Each link show have a href with a `#tab-id` (see the markup).
1. Pass the `selectedTabId` as a prop to the `Tabs`, the specified tab should be selected if possible
  (otherwise the first tab is selected).
1. The `Tabs` should show the content of the selected tab (add an attribute `data-cy="tab-content"` for testing).
1. The selected tab (`li`) should have `is-active` class.
1. Pass the `onTabSelected` callback to the `Tabs`, it should be called whenever the user selects another tab.
   (Don't call the callback if the tab was not changed)
1. The callback should receive the data of the selected tab (an object from the array)
1. The `App` title (`h1`) should show a text saying `Selected tab is Tab 1` (show the title of the selected tab).
1. When the user selects another tab the `h1` should be updated accordingly.
1. The `Tabs` component should be stateless (don't have internal state, only props).

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Dimak123.github.io/react_tabs/) and add it to the PR description.
