import React from "react";
import { AppBar } from "../../components";

type Props = {
  path?: string;
};

const Home: React.SFC<Props> = () => (
  <div>
    <AppBar />
  </div>
);

export default Home;
