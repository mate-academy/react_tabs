import React from 'react';
import './App.css';
import Tabs from './Tabs';

const someText1 = `Dozens of protesters crashed New York Gov.
 Andrew M. Cuomo’s birthday
 fundraiser Wednesday night, and they brought cake.
 Dozens of protesters crashed New York Gov. Andrew M.
 Cuomo’s birthdayfundraiser Wednesday night, and they brought cake.`;
const someText2 = `Armed with signs, birthday hats, party horns
 and a sheet cake with#MakeBillionairesPay written in curly
 red icing, members of several advocacy groups assembled outside
 the Essex Hotel in Manhattan to pressure the Democratic governor
 to embrace more stringent policies to combat climate change,
 and to implement a tax on billionaires to help pay for public services`;
const someText3 = `“We wanted to have a celebratory element
 to it,” said Miles Goodrich of the Sunrise Movement,
 one of the groups that organized the protest.
 “We wanted to have a celebratory element to it,”
 said Miles Goodrich of the Sunrise Movement,
 one of the groups that organized the protest.`;

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Home', content: someText1 },
      { title: 'Profile', content: someText2 },
      { title: 'Contact', content: someText3 },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
