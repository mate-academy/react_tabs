import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export const Tabs = ({ tabs, selectedTabId, tabChanged }) => (
  <div className="ml-2">
    <div>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
    <div className="ml-2">
      {tabs.map(tab => (
        <div key={tab.id}>
          <Button
            type="button"
            onClick={() => tabChanged(tab)}
            variant="outline-success"
            className="mb-2"
          >
            {tab.title}
          </Button>
        </div>
      ))}
    </div>
  </div>

);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  tabChanged: PropTypes.func.isRequired,
};
