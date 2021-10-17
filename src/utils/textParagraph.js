import React from 'react';

const getTextParagraphs = (str, Component) =>
  str
    .split(/\r?\n/g)
    .map(
      (paragraph) =>
        !!paragraph && <Component key={paragraph}>{paragraph}</Component>
    );

export default getTextParagraphs;
