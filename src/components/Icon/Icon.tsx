import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  SizeProp
} from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  name: string;
  prefix?: string;
  size?: string | undefined;
  className?: string | undefined;
};

const Icon: React.SFC<IconProps> = ({ name, prefix, size, className }) => (
  <FontAwesomeIcon
    icon={[prefix as IconPrefix, name as IconName]}
    size={size as SizeProp}
    className={className}
  />
);

Icon.defaultProps = {
  prefix: "fas",
  size: "xs"
};

export default Icon;
