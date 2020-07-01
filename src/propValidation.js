import PropTypes from 'prop-types';

export const validTitle = PropTypes.string;
export const validContent = PropTypes.string;
export const validTab = PropTypes.arrayOf(PropTypes.shape({
  title: validTitle.isRequired,
  content: validContent.isRequired,
}));
export const validCallback = PropTypes.func;
