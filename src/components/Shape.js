import PropTypes from 'prop-types';

const Shapes = {
  ShapeTabs: PropTypes.shape({
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeTab: PropTypes.func.isRequired,
  }),

  ShapeTab: PropTypes.shape({
    tab: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onClickTab: PropTypes.func.isRequired,
  }),

  ShapeContent: PropTypes.shape({
    currentContent: PropTypes.string.isRequired,
  }),
};

export default Shapes;
