import React from 'react';
import './App.css';
import { Tabs } from './Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Home',
    content: 'The house in Maple Street was ours and we were'
      + 'happy because we didn’t have to pay rent or share the yard'
      + 'with other people, or be careful not to make too much noise.'
      + 'It was a small brick house with small windows that looked onto'
      + 'the green back yard.There was no front yard, only four little'
      + 'maples separated the house from the street.'
      + 'The house didn’t have any modern conveniences'
      + 'except gas.There was no electricity, so we had'
      + 'to light candles when it was dark.There was no'
      + ' running water, so we had to take water from the'
      + ' pipe in the next street.There was no central heating '
      + ' so we had to put on warm clothes when it was cold.',
  },
  {
    title: 'Profile',
    content: 'Your introduction and credits are two of the most important '
    + 'your StarNow profile. Make the most of your introduction by writing a'
    + 'short, snappy paragraph about yourself. Be professional and include'
    + 'elements of your personality in the text. Remember to include a link to'
    + 'your personal website if you have one. Your credits should outline your'
    + 'relevant experience in the industry and be simple to read..',
  },
  {
    title: 'Contact',
    content: 'Typically, there are two types of people tracers need '
    + 'to contact: patients who’ve tested positive for'
    + 'COVID-19, and exposed contacts identified by patients.'
    + 'To communicate effectively, it’s important to consider how '
    + 'to deliver messages that prove legitimacy'
    + 'and build trust. Unfortunately, bad actors are out there trying.'
    + 'to do harm with spam messages and'
    + 'nefarious links. To counteract that, always include identifying'
    + ' information on your organization.'
    + ' Whether you’re communicating with a patient or an exposed contact, '
    + ' break your strategy down into contact tracing tasks. ',
  },
];

class App extends React.Component {
  state = {
    tabsCopy: [...tabs].map(tab => ({ ...tab })),
    selectIndex: 0,
  }

  onTabSelected = (tab) => {
    const { tabsCopy } = this.state;
    const findSelectedTabIndex = tabsCopy.findIndex(el => el.title === tab.title);

    this.setState({
      selectedTabIndex: findInd,
    });
  }

  render() {
    const { tabsCopy, selectIndex } = this.state;

    return (
      <>
        <h1 className="title">React tabs</h1>
        <Tabs
          tabsCopy={tabsCopy}
          selectIndex={selectIndex}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
