/* eslint-disable @typescript-eslint/no-unused-expressions, react/jsx-filename-extension */
import { mount } from '@cypress/react';
import { Tabs } from './Tabs';

const page = {
  tabs: () => cy.get('.tabs li'),
  tab: (index) => page.tabs().eq(index),
  content: () => cy.get('[data-cy="tab-content"]'),
};

describe('Tabs component', () => {
  it('should render all tabs', () => {
    const tabs = [
      { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
      { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
      { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
      { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="tab-10"
        selectedTab={() => {}}
      />
    ));

    page.tabs()
      .should('have.length', 4);

    page.tab(0)
      .should('contain', 'Tab 10');

    page.tab(1)
      .should('contain', 'Tab 20');

    page.tab(2)
      .should('contain', 'Tab 30');

    page.tab(3)
      .should('contain', 'Tab 40');
  });

  it('should have a link in each tab', () => {
    const tabs = [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="tab-1"
        selectedTab={() => {}}
      />
    ));

    page.tab(1)
      .find('a')
      .should('have.text', 'Tab 2')
      .and('have.attr', 'href', '#tab-2');
  });

  it('should highlight only a selected tab', () => {
    const tabs = [
      { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
      { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
      { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
      { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="tab-20"
        selectedTab={() => {}}
      />
    ));

    page.tab(1)
      .should('have.class', 'is-active');

    page.tab(0)
      .should('not.have.class', 'is-active');

    page.tab(2)
      .should('not.have.class', 'is-active');
  });

  it('should highlight the first tab if selectedTabId is wrong', () => {
    const tabs = [
      { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
      { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
      { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
      { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="asdasd"
        selectedTab={() => {}}
      />
    ));

    page.tab(0)
      .should('have.class', 'is-active');

    page.tab(1)
      .should('not.have.class', 'is-active');
  });

  it('should show the content of the selected tab', () => {
    const tabs = [
      { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
      { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
      { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
      { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="tab-30"
        selectedTab={() => {}}
      />
    ));

    page.content()
      .should('have.text', 'Some text 30');
  });

  it('should invoke onTabSelected if another tab is clicked', () => {
    const props = {
      onTabSelected() {},
    };

    cy.spy(props, 'onTabSelected');

    const tabs = [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="tab-3"
        selectedTab={props.onTabSelected}
      />
    ));

    page.tab(1)
      .find('a')
      .click()
      .then(() => {
        expect(props.onTabSelected)
          .to.be.called;
      });
  });

  it('should not invoke onTabSelected if the current tab is clicked', () => {
    const props = {
      onTabSelected() {},
    };

    cy.spy(props, 'onTabSelected');

    const tabs = [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ];

    mount((
      <Tabs
        tabs={tabs}
        selectedTabId="tab-3"
        selectedTab={props.onTabSelected}
      />
    ));

    page.tab(2)
      .find('a')
      .click()
      .then(() => {
        expect(props.onTabSelected).not.to.be.called;
      });
  });
});
