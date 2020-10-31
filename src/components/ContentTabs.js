import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Jumbotron } from 'react-bootstrap';
import { LoremIpsum } from 'react-lorem-ipsum';

import './ContentTabs.scss';

export class ContentTabs extends React.PureComponent {
  render() {
    const { tabs } = this.props;

    return (
      <Jumbotron className="js-container">
        <h1 className="display-4">React tabs</h1>

        <hr className="my-4" />

        <Tabs
          variant="tabs"
          defaultActiveKey="Tab 2"
        >
          {tabs.map(({ title, content }) => (
            <Tab
              eventKey={title}
              title={title}
              key={title}
              className="js-white"
            >
              {/* мені не сподобався переданий content
                тому поки його не використовую */}
              <LoremIpsum
                p="1"
                startWithLoremIpsum={false}
              />
            </Tab>
          ))}
        </Tabs>
      </Jumbotron>
    );
  }
}

ContentTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
};
