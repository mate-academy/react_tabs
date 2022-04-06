import React from 'react';

import './Content.scss';

type Props = {
  content: string;
};

export const Content: React.FC<Props> = React.memo(({ content }) => (
  <p className="Content">
    {content}
  </p>
));
