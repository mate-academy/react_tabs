import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticlesGroup = ({ tabs, activeId }) => (
  <main>
    {tabs.map(article => (
      <Article article={article} activeId={activeId} />
    ))}
  </main>
)

export default ArticlesGroup;


