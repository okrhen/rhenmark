import React from 'react';

type Props = {
  path?: string;
  default?: boolean;
};

const Landing: React.SFC<Props> = () => {
  return (
    <div>
      <p>This is page</p>
    </div>
  );
};

export default Landing;
