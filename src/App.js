import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import pictureTitan from './images/titanosaurus.png';
import pictureTrex from './images/t-rex.png';
import pictureTricer from './images/triceratops.png';

import './App.scss';

/* eslint-disable */
const tabs = [
  {
    id: 'tab-1',
    title: 'T-Rex',
    content: `Tyrannosaurus is a genus of coelurosaurian theropod dinosaur.
              The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex,
              is one of the most well-represented of these large theropods.
              Tyrannosaurus lived throughout what is now western North America,
              on what was then an island continent known as Laramidia.
              Tyrannosaurus had a much wider range than other tyrannosaurids.
              Fossils are found in a variety of rock formations dating to the Maastrichtian age of the upper Cretaceous period,
              68 to 66 million years ago. It was the last known member of the tyrannosaurids,
              and among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.`,
    picture: pictureTrex
  },

  {
    id: 'tab-2',
    title: 'Triceratops',
    content: `Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during
              the late Maastrichtian stage of the late Cretaceous period, about 68 million years ago (mya)
              in what is now North America. It is one of the last-known non-avian dinosaur genera,
              and became extinct in the Cretaceous–Paleogene extinction event 66 million years ago.
              The name Triceratops, which literally means "three-horned face", is derived from the
              Ancient Greek words τρί- (tri-) meaning "three", κέρας (kéras) meaning "horn",
              and ὤψ (ōps) meaning "face".`,
    picture: pictureTricer
  },

  {
    id: 'tab-3',
    title: 'Titanosaurus',
    content: `Titanosaurus ('titanic lizard') is a dubious genus of sauropod dinosaurs,
              first described by Richard Lydekker in 1877.
              It is known from the Maastrichtian (Upper Cretaceous) Lameta Formation of India and possibly also
              the Maastrichtian (Upper Cretaceous) Marília Formation of Argentina.
              Titanosaurus was the first Indian dinosaur to be named and properly described,
              having been recorded for the first time in 1877. The type species,
              T. indicus, was named in 1877, and the second species, T. blanfordi, was named in 1879.
              Both species were named by Richard Lydekker. Remains from a possible indeterminate
              species of Titanosaurus are also known from the Marília Formation of Argentina, which are
              around 72-66 million years old, while T. indicus and T. blanfordi are 70 million years old.`,
    picture: pictureTitan,
  },
];
/* eslint-enable */

class App extends React.Component {
  state ={
    selectedTabId: tabs[0].id,
  }

  onTabSelected = (id) => {
    this.setState({
      selectedTabId: id,
    });
  }

  render() {
    const selectedTab = tabs.find(tab => tab.id === this.state.selectedTabId);

    return (
      <>
        <h1 className="App_header">
          {`Selected dino is ${selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
