import React from 'react';
import { validContent } from '../../propValidation';

export function Content({ content }) {
  return (
    <p>{content}</p>
  );
}

Content.propTypes = {
  content: validContent.isRequired,
};
