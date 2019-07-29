import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, activeId }) => (
  <article className={(article.id === activeId) && 'active-article'}>
    <a name={article.title}></a>
    {article.content}
  </article>
);

Article.propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  activeId: PropTypes.number.isRequired,
};

export default Article;
