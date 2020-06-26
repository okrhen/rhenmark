import React from 'react';

import Rhen from '../../assets/images/rhen.svg';

interface IProps {
  path?: string;
  default?: boolean;
}

const Landing: React.SFC<IProps> = () => {
  return (
    <div>
      <img src={Rhen} alt="me" />
    </div>
  );
};

export default Landing;
