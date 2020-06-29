import PropTypes from 'prop-types';

export const TabsShape = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
  })),
  defaultIndex: PropTypes.number,
};

export const TabShape = {
  name: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

export const TabSectionShapes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  onClick: PropTypes.func,
};
