import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Hello');
  return <small>{value}</small>;
});
