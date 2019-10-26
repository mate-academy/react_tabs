import React from 'react';
import './App.css';
import Tabs from './components/tabs/Tabs';
import Tab from './components/tab/Tab';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'tab 1', content: 'Some text 1' },
      { title: 'tab 2', content: 'Some text 2' },
      { title: 'tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/*<Tabs tabs={tabs} />*/}
        <Tabs>
          <Tab title="Home">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam architecto nesciunt, quibusdam quisquam tenetur cumque facere consequatur facilis,
            obcaecati maxime blanditiis ullam quasi est, numquam fuga iste et vel! Fuga exercitationem architecto quos eum eaque nulla recusandae explicabo mollitia,
            minus repellat error soluta. Dolores accusamus id a nesciunt ea!
          </Tab>
          <Tab title="Profile">
            <h1>
              It's Profile page, this text in h1 tag
            </h1>
          </Tab>
          <Tab title="Contact">
            You can call me if you want +380666666666
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
