import React from 'react';

const getTextParagraphs = (str, Component, componentProps) =>
  str.split(/\r?\n/g).map(
    (paragraph) =>
      !!paragraph && (
        <Component key={paragraph} {...componentProps}>
          {paragraph}
        </Component>
      )
  );

export default getTextParagraphs;
