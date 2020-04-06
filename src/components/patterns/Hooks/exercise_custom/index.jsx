import React from "react";
import useWidth, { LARGE, MEDIUM } from "./useWidth";
// remove the following import after refactoring the Width component to a custom hook
// import Width from "./useWidth";

const Bonus = () => {
  // use the following commented out code after implementing the useWidth custom hook
  const width = useWidth();

  return (
    <React.Fragment>
      <h3>Exercise custom hooks</h3>
      <h4>Part 1</h4>
      <p>
        Refactor the{" "}
        <code>src/patterns/Hooks/exercise_custom/WithWidth.jsx</code> using the{" "}
        <code>useState</code> and <code>useEffect</code> Hooks.
      </p>
      <p>
        Tip: to remove the event listeners we need to use the{" "}
        <a
          href="https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup"
          target="_blank"
        >
          {" "}
          cleanup phase
        </a>{" "}
        of the effect. To clean up the side effects you must return a function.
      </p>
      <p>
        Documentation about custom hooks{" "}
        <a href="https://reactjs.org/docs/hooks-custom.html">
          https://reactjs.org/docs/hooks-custom.html
        </a>
      </p>
      <h4>Part 2</h4>
      <p>
        import your useWidth in{" "}
        <code>src/patterns/Hooks/exercise_custom/index.jsx</code> and replace
        the &lt;Width /&gt; component with the width from
        <code>const width = useWidth()</code>
      </p>

      {/*
      Use the following commented out code after implementing the useWidth custom hook
      {width === LARGE ? (
        <h1>I'm a large screen</h1>
      ) : width === MEDIUM ? (
        <h1>I'm a medium screen</h1>
      ) : (
        <h1>I'm a small screen</h1>
      )} */}

      {/* Comment this out after implementing your useWidth custom hook */}
      <h1>
          {width}
      </h1>
    </React.Fragment>
  );
};

export default Bonus;
