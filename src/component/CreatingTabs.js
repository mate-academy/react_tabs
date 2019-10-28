import React from 'react';
import { Tab } from 'semantic-ui-react';

function CreatingTabs({ panes }) {
  return (
    <Tab menu={{ pointing: true }} panes={panes} />
  );
}

export default CreatingTabs;
