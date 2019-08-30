# React Tabs

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
4. (*) Add an ability to use Tabs like this ([Children](https://youtu.be/2dlvPZW_Bx8) video will help)
    ```html
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


## Workflow

- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode 

- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy` 
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure

You should be writing your code in `src/` directory.
