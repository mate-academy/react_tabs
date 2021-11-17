# React Tabs
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://misharosa.github.io/react_tabs/)
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

## Завдання
1. Компонент "Додаток" містить масив "вкладок".
    ```javascript
    const tabs = [
      { id: 'tab-1', title: 'Tab 1', content: 'Деякий текст 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Деякий текст 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Деякий текст 3' },
    ];
    ```
1. Збережіть `selectedTab` у `App` (першу за замовчуванням)
1. Реалізуйте компонент Tabs, приймаючи вкладки як опору
   і відображення посилання для кожної "вкладки" та вмісту вибраної вкладки
1. Передайте `selectedTabId` як опору до `Tabs`, якщо можливо, слід вибрати вказану вкладку
   (інакше вибирається перша вкладка)
1. Передайте зворотний виклик `onTabSelected` до вкладок
   його слід викликати щоразу, коли користувач вибирає іншу вкладку.
   (Не викликайте зворотний дзвінок, якщо вкладка не була змінена)
1. Зворотний виклик повинен отримати дані вибраної вкладки (об'єкт з масиву)
1. Створіть `h1` всередині `App` із вказівкою `Вибрана вкладка – це вкладка 1` (показати назву вибраної вкладки)
1. Коли користувач вибирає іншу вкладку, `h1` слід відповідно оновити
1. Компонент `Tabs` повинен бути без стану
