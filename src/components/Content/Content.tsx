import React, { memo } from 'react';

import './Content.scss';

type Props = {
  content: string;
};

export const Content: React.FC<Props> = memo(({ content }) => (
  <p className="Content">
    {content}
  </p>
));
