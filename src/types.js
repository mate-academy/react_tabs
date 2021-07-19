import PropTypes from 'prop-types';

export const OnTabSelectedType = PropTypes.func;
export const SelectedTabIdType = PropTypes.string;
export const TabContentType = PropTypes.string;
export const TabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: TabContentType.isRequired,
});
