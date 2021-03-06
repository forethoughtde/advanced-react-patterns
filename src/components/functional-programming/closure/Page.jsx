import React from "react";
import "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Closure</h2>
    <h3>Exercise</h3>
    <p>
      Open the console on your browser and type [closure exercise] in the
      console filter. You should see on the console the console.log() for this
      exercise.
    </p>
    <p>
      Task, implement the <code>function add()</code> in
      `src/components/functional-programming/closure/exercise` so
      <code>addFive(7)</code> outputs 12
    </p>
    <h3>Discussion about the solution</h3>
    <p>1- Is the inner function pure?</p>
    <p>2- Wnat is executed first, the inner of the outer function?</p>
  </React.Fragment>
);

export default Page;
