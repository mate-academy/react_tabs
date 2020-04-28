import React from 'react';
import './App.css';
import './components/Tabs.scss';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Thailand',
    content: `Королевство Таиланд — гостеприимная земля,
              неофициальным названием которой является «Страна улыбок».`,
  },
  {
    title: 'Sri Lanka',
    content: `В Шри-Ланке собирают 305 миллионов килограмм чая
              в год – это 10% от всего мирового производства.`,
  },
  {
    title: 'Bali',
    content: `Вопреки распространённому среди
              российских туристов произношению,
              ударение в слове «Бали» ставится
              на первый слог, а не на последний.`,
  },
];

const preparedTabs = tabs.map((tab, i) => ({
  ...tab,
  index: i,
}));

class App extends React.Component {
  state = {
    active: 0,
  }

  clickButton = index => this.setState({
    active: index,
  });

  render = () => (
    <div>
      <Tabs
        active={this.state.active}
        tabs={preparedTabs}
        clickButton={this.clickButton}
      />
      <section className="tab__content">
        {preparedTabs[this.state.active].content}
      </section>
    </div>
  );
}

export default App;
