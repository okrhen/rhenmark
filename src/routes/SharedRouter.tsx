import React from "react";

type Props = {
  path?: string;
  children?: React.ReactNode;
};

const SharedRouter: React.SFC<Props> = ({ path, children }) => (
 <div>{children}</div>
);

export default SharedRouter;
