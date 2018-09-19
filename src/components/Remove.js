import React from 'react';

export const Remove = props =>
    <button
      className='removeLike'
      onClick={() => props.onRemoveLike()}
      >Remove like
    </button>;
