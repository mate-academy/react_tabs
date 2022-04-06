import React from 'react';

import './Content.scss';

type Props = {
  content: string;
};

export const Content: React.FC<Props> = ({ content }) => (
  <p className="Content">
    {content}
  </p>
);
