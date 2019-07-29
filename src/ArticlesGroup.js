import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticlesGroup = ({ tabs, activeId }) => (
  <main>
    {tabs.map(article => (
      <Article
        key={article.id}
        article={article}
        activeId={activeId} />
    ))}
  </main>
);

ArticlesGroup.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  })).isRequired,
  activeId: PropTypes.number.isRequired,
};

export default ArticlesGroup;
