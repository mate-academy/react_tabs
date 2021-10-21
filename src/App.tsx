import React from 'react';

import './App.scss';

import Tabs from './components/Tabs';

const tabs: Tab[] = [
  { id: 'method-array-1', title: 'Filter', content: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.' },
  { id: 'method-array-2', title: 'Concat', content: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.' },
  { id: 'method-array-3', title: 'Find', content: 'The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.' },
  { id: 'method-array-4', title: 'Every', content: 'The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value..' },
  { id: 'method-array-5', title: 'Some', content: 'The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn\'t modify the array.' },
  { id: 'method-array-6', title: 'Map', content: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.' },
  { id: 'method-array-7', title: 'Sort', content: 'The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values..' },
  { id: 'method-array-8', title: 'Slice', content: 'The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified..' },
  { id: 'method-array-9', title: 'Splice', content: 'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().' },
];

type State = {
  selectedTabId: string,
};

class App extends React.Component<{}, State> {
  state :State = {
    selectedTabId: tabs[0].id,
  };

  render() {
    const {
      selectedTabId,
    } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is&nbsp;
          {selectedTabId}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={(event) => {
            this.setState({ selectedTabId: event.target.name });
          }}
        />
      </div>
    );
  }
}

export default App;
