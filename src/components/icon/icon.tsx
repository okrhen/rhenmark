import {
  IconName,
  IconPrefix,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IIconProps {
  name: string;
  prefix?: string; // fas | fab
  size?: string | undefined;
  className?: string | undefined;
  color?: string | undefined;
}

const Icon: React.FC<IIconProps> = ({
  name,
  prefix,
  size,
  className,
  color,
}) => (
  <FontAwesomeIcon
    icon={[prefix as IconPrefix, name as IconName]}
    size={size as SizeProp}
    className={className}
    color={color}
  />
);

Icon.defaultProps = {
  prefix: 'fas',
  size: 'xs',
};

export default Icon;
