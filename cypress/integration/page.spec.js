import { tabs } from '../../src/App'

const page = {
  header() {
    return cy.get('h1');
  },
  clickTab(index) {
    return cy.contains('button', tabs[index].title)
      .click();
  }
};

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the first tab selected by default', () => {
    page.header()
      .should('contain', `${tabs[0].title}`);
  });

  it('should display the content from the first tab by default', () => {
    cy.getByDataCy('tab-content')
      .should('contain', tabs[0].content);
  });

  it('should display the title of the second tab in the header after clicking it', () => {
    page.clickTab(1);
      
    page.header()
      .should('contain', `${tabs[1].title}`);
  });

  it('should display the content from the second tab after it was selected', () => {
    page.clickTab(1);

    cy.getByDataCy('tab-content')
      .should('contain', tabs[1].content);
  });

  it('should display the title of the third tab in the header after clicking it', () => {
    page.clickTab(2);
      
    page.header()
      .should('contain', `${tabs[2].title}`);
  });

  it('should display the content from the third tab after it was selected', () => {
    page.clickTab(2);

    cy.getByDataCy('tab-content')
      .should('contain', tabs[2].content);
  });

  it('should display the title of the first tab if it was clicked after another tab', () => {
    page.clickTab(1);
    page.clickTab(0);
      
    page.header()
      .should('contain', `${tabs[0].title}`);
  });

  it('should display the content from the first tab after it was selected after another tab', () => {
    page.clickTab(2);
    page.clickTab(0);

    cy.getByDataCy('tab-content')
      .should('contain', tabs[0].content);
  });
});
