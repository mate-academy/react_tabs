/* eslint-disable @typescript-eslint/no-unused-expressions, react/jsx-filename-extension */
import React from 'react';
import { mount } from '@cypress/react';
import { tabs } from './App';
import Tabs from './Components/Tabs/Tabs';

describe('Tabs component', () => {
  it('should have a \'tabs\' prop', () => {
    mount((
      <Tabs
        tabs={tabs}
        selectedTabId={tabs[0].id}
      />
    ));

    cy.get('button')
      .should('contain', tabs[0].title);
  });

  it('should invoke a callback if another tab is clicked', () => {
    const methods = {
      handleClick: () => {},
    };

    cy.spy(methods, 'handleClick');

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId={tabs[2].id}
        onSelected={methods.handleClick}
      />
    ));

    cy.get('button')
      .eq(1)
      .click()
      .then(() => {
        expect(methods.handleClick).to.be.called;
      });
  });

  it('should not invoke the callback if the current tab is clicked', () => {
    const methods = {
      handleClick: () => {},
    };

    cy.spy(methods, 'handleClick');

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId={tabs[0].id}
        onSelected={methods.handleClick}
      />
    ));

    cy.get('button')
      .eq(0)
      .click()
      .then(() => {
        expect(methods.handleClick).not.to.be.called;
      });
  });
});
