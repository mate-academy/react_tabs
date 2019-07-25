import React from 'react';
import PropTypes from 'prop-types';

const TabsCaruselControl = ({ changeTabOrder }) => (
  <div className="TabsCaruselControl">
    <button
      type="button"
      onClick={changeTabOrder}
      name="back"
    >
      {'< Back'}
    </button>

    <h4>Change Tabs Order</h4>

    <button
      type="button"
      onClick={changeTabOrder}
      name="next"
    >
      {'Next >'}
    </button>
  </div>
);

TabsCaruselControl.propTypes = {
  changeTabOrder: PropTypes.func.isRequired,
};

export default TabsCaruselControl;
