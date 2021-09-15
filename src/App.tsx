import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Superiōre libro de jure personārum exposuĭmus: modo videāmus de rebus, quae vel in nostro patrimonio vel extra nostrum patrimonium habentur. Quaedam enim naturāli jure communia sunt omnium, quaedam publĭca, quaedam universitātis, quaedam nullīus, plerăque singulōrum, quae variis ex causis cuīque adquiruntur, sicut ex subjectis apparēbit.' },
  { id: 'tab-2', title: 'Profile', content: 'Singulōrum autem homĭnum multis modis res fiunt: quarundam enim rerum dominium nanciscĭmur jure naturāli, quod, sicut dixĭmus, appellātur jus gentium, quarundam jure civīli. Commodius est ităque a vetustiōre jure incipĕre, palam est autem, vetustius esse naturāle jus, quod cum ipso genĕre humāno rerum natūra prodĭdit: civilia enim jura tunc coepērunt esse, cum et civitātes condi et magistrātus creāri et leges scribi coepērunt.' },
  { id: 'tab-3', title: 'Contact', content: 'Item ea, quae ex hostĭbus capĭmus, Jure gentium statim nostra fiunt: adeo quidem, ut et libĕri homĭnes in servitūtem nostram deducantur, qui tamen, si evasĕrint nostram potestātem et ad suos reversi fuĕrint, pristīnum statum recipiunt. Item lapilli, gemmae et cetĕra, quae in litŏre inveniuntur, jure naturāli statim inventōris fiunt. Item ea, quae ex animalĭbus dominio tuo subjectis nata sunt, eōdem jure tibi adquiruntur.git' },
];

interface State {
  selectedTab: Tab | undefined;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: string): void => {
    this.setState({
      selectedTab: tabs.find(tabItem => tabItem.id === tab),
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {`  ${selectedTab && selectedTab.title}`}
        </h1>
        <Tabs tabs={tabs} selectedTab={selectedTab} onTabSelected={this.onTabSelected} />
      </div>
    );
  }
}

export default App;
