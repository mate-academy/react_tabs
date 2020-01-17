# React Tabs
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_tabs/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
![tabs](./description/tabs.gif)
1. Implement `Tabs` component displaying tabs from a given array of objects
    ```javascript
    let tabs = [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ];
    ```
    ```jsx harmony
    <Tabs tabs={tabs} />
    ```
2. Implement `onTabSelected` callback triggered on tab change with tab data as an argument
3. Add `index` prop (default `0`)  to set an index of tab active at the beginning
4. (*) Add an ability to use Tabs like this: ([Children](https://youtu.be/2dlvPZW_Bx8) video will help)
    ```jsx harmony
    <Tabs>
      <Tab title="Tab 2">
        It could be a text
      </Tab>

      <Tab title="Tab 3">
        <div>1</div>
        <div>2</div>
      </Tab>

      <Tab title="Tab 1">
        Or even any JSX
      </Tab>
    </Tabs>
    ```
