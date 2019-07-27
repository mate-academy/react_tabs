import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, activeId }) => (
  <article className={(article.id === activeId) && 'active-article'}>
    <a name={article.title}></a>
    {article.content}
  </article>
)

export default Article;
