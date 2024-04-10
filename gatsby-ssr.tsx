import React from 'react';

export const onRenderBody = ({ setBodyAttributes }) => {
  const theme = 'lightTheme';

  setBodyAttributes({
    'data-theme': theme,
  });
};