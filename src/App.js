import React from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      {
        id: '0',
        title: 'Tab 1',
        content: 'Lorem ipsum dolor sit amet, ex mutat novum debet quo,'
          + ' neglegentur deterruisset no eum. Sea ea soluta nonumes '
          + 'perpetua. Cum ex aeque deserunt.'
          + ' Et prima viris aeterno vis, nec cu zril iisque pertinacia.'
          + ' Pro ex viris offendit, mea '
          + 'audiam aperiam dissentiunt id, ne nam delicata ullamcorper. '
          + 'Ne usu quas placerat efficiendi,'
          + ' vero iracundia molestiae mei ut. At est fuisset neglegentur,'
          + ' at definiebas accommodare sed,'
          + ' in mei affert accusam.',
      },
      {
        id: '1',
        title: 'Tab 2',
        content: 'Falli disputationi '
          + 'signiferumque has te, his id purto aeterno, '
          + 'sit an nonumy vivendo conclusionemque. Euismod '
          + 'cotidieque sea id, molestiae comprehensam no sit.'
          + ' Eos ignota feugait id, sit animal aperiri quaestio '
          + 'ea. Per no utinam accusam. At mel quis harum, '
          + 'his ea putant audiam laoreet, ex vel choro salutandi.'
          + 'Nemore civibus consequat ne mea. Quem paulo semper sit at,'
          + ' in nam erat feugait. Sea doming everti prompta eu, '
          + 'te per nihil dolore'
          + ' scribentur, ei est omnis corpora mediocritatem.'
          + ' Utinam suscipit in cum.'
          + ' Nobis copiosae disputando sea ei, cum elit exerci evertitur no. '
          + 'Sea fabellas patrioque laboramus id.',
      },
      {
        id: '2',
        title: 'Tab 3',
        content: 'Qui ne meis munere, '
          + 'eum modus tibique id.'
          + ' Etiam debitis graecis per ex. At duo quas nonumy. '
          + 'Te nonumes accusam conclusionemque sit.\n'
          + 'Ei sed fugit partem signiferumque. Ne vel '
          + 'modo putent, ei duo modus iudicabit. In dicat '
          + 'petentium pro, propriae voluptua id vis. At '
          + 'probatus adipisci duo, no cetero quaeque sea, '
          + 'est et nonumes commune. Per odio ridens alterum ea,'
          + 'vel choro fierent ea.',
      },
    ],
    currentTabId: '0',
  };

  selectTab = currentTabId => this.setState({ currentTabId });

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <h1 className="title">React tabs</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.selectTab}
          currentTabId={this.state.currentTabId}
        />
      </div>
    );
  }
}

export default App;
