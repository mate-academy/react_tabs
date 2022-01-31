# React Tabs
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Rom911.github.io/react_tabs/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

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
   and displaying a button per each `tab` and the content of the selected tab
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

1. Сохраните `selectedTab` в `App` (первый по умолчанию)
1. Реализуйте компонент `Tabs`, принимающий `tabs` в качестве реквизита.
    и отображение кнопки для каждой `tabs` и содержимого выбранной вкладки
1. Передайте `selectedTabId` в качестве опоры для `Tabs`, указанная вкладка должна быть выбрана, если это возможно (в противном случае будет выбрана первая вкладка)
1. Передайте обратный вызов `onTabSelected` в `Tabs`.
    он должен вызываться всякий раз, когда пользователь выбирает другую вкладку.
    (Не вызывать обратный вызов, если вкладка не была изменена)
1. Callback должен получить данные выбранной вкладки (объект из массива)
1. Создайте `h1` внутри `App`, говоря: `Selected tab is Tab 1` (показать заголовок выбранной вкладки)
1. Когда пользователь выбирает другую вкладку, `h1` должен обновляться соответствующим образом.
1. Компонент `Tabs` должен быть без состояния
