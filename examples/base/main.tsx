import React, { useState } from "react";
import reactVisual from "react-visual";
import { Frame, Shape } from "react-visual";

const App = () => {
  const [path2d] = useState(new Path2D("M0 0 h 100 v 100 h -100 Z"));

  return (
    <Frame x={20} y={30} width={300} height={300} fillStyle="red">
      <Shape path={path2d} x={20} y={30} fillStyle="green"></Shape>
    </Frame>
  );
};

reactVisual.render(<App />, { rootElement: document.querySelector("#root") });
