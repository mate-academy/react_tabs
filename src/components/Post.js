import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, body }) => {
  const idxArr = Object.keys(Array(body.split('\n').length).fill(0));

  return (
    <>
      <h3>{title}</h3>
      {body.split('\n').map((pars, idx) => (
        <p key={idxArr[idx]}>{pars}</p>
      ))}
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
