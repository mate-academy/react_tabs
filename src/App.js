import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabs = [
  {
    id: 0,
    title: 'Tab 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      + 'Quisque risus nibh, vulputate ut scelerisque ac, tempus vel urna. '
      // eslint-disable-next-line max-len
      + 'Mauris hendrerit feugiat consectetur. Proin venenatis pellentesque nisl cursus aliquam. '
      // eslint-disable-next-line max-len
      + 'Cras finibus at ex quis dictum. Aenean a accumsan mi. Sed placerat eros sit amet erat congue, '
      // eslint-disable-next-line max-len
      + 'vitae volutpat ante commodo. Donec vel laoreet libero. Quisque aliquam risus sem, id ornare ex '
      + 'facilisis sit amet. Aenean et nibh tortor.\n',
  },
  {
    id: 1,
    title: 'Tab 2',
    content: 'Curabitur vel dui ut elit congue posuere. '
      + 'Aliquam luctus sollicitudin sem, nec congue metus auctor id.'
      // eslint-disable-next-line max-len
      + 'Donec sapien metus, porttitor et neque vitae, vestibulum tristique tellus. '
      + 'Mauris nec felis vitae metus posuere sagittis. '
      + 'Proin cursus metus vitae tellus vestibulum, eu suscipit ante varius. '
      + 'Aenean iaculis elit id magna bibendum tincidunt. ',
  },
  {
    id: 2,
    title: 'Tab 3',
    // eslint-disable-next-line max-len
    content: 'Etiam iaculis, purus vitae pharetra laoreet, tellus sem ullamcorper orci, '
      + 'id pharetra est urna et erat. Nulla mauris leo, scelerisque sit '
      + 'amet vulputate et, auctor nec tellus. '
      + 'Suspendisse metus nulla, posuere eget viverra '
      + 'ac, porta vitae odio. Duis vitae massa a nisl '
      + 'sodales sodales sed eu augue. '
      + 'Proin eget nibh convallis, feugiat odio et, ultrices lectus. '
      + 'Donec eget turpis ac metus eleifend sodales finibus id tortor. '
      + 'Suspendisse lacinia quis odio nec sodales. '
      + 'Vestibulum et augue eget purus facilisis malesuada',
  },
];

class App extends React.Component {
  state = {
    active: 0,
  }

  setActiveTab = tabId => this.setState(() => ({
    active: tabId,
  }))

  render = () => (
    <div className="content">
      <Tabs tabs={tabs} clickHandler={this.setActiveTab} />
      {
        tabs[this.state.active] && (
          <section className="tabs">
            {tabs[this.state.active].content}
          </section>
        )
      }
    </div>
  );
}

export default App;
