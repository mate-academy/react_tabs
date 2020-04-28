import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

const tabs = [
  {
    title: 'Home',
    // eslint-disable-next-line max-len
    content: 'Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. New get described applauded incommode shameless out extremity but. Resembled at perpetual no believing is otherwise sportsman. Is do he dispatched cultivated travelling astonished. Melancholy am considered possession on collecting everything.',
    id: 1,
  },
  {
    title: 'Profile',
    // eslint-disable-next-line max-len
    content: 'Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined.',
    id: 2,
  },
  {
    title: 'Contact',
    // eslint-disable-next-line max-len
    content: 'Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated. On no applauded exquisite my additions. Pronounce add boy estimable nay suspected. You sudden nay elinor thirty esteem temper. Quiet leave shy you gay off asked large style.',
    id: 3,
  },
];

class App extends React.Component {
  state = {
    activeIndex: 1,
  };

  render() {
    const { activeIndex } = this.state;
    const activeTab = tabs.find(tab => tab.id === activeIndex);
    const changeTab = (tabId) => {
      this.setState({ activeIndex: tabId });
    };

    return (
      <>
        <h1>React Tabs</h1>
        <Tabs
          tabs={tabs}
          activeIndex={activeIndex}
          activeTab={activeTab}
          changeTab={changeTab}
        />
      </>
    );
  }
}

export default App;
