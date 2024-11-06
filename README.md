# react-zero

[Udemy repo](https://github.com/cod3rcursos/web-moderno/tree/master/exercicios-web/react)

- **React**: The library itself – you get the core functionality to create UI components.

  - [Docs](https://react.dev/) - See the Quick start
  - [API Reference](https://react.dev/reference/react)

- **Create React App**: A tool to bootstrap a React project with a pre-configured development setup.
  - [Docs](https://create-react-app.dev/docs/getting-started)

## Start a Project

Create the folder structure:

```bash
npx create-react-app .  # or npx create-react-app <project-name>
```

Run the application:

```bash
npm start
```

## How it works

### 1. JSX and Transpilation

- **JSX**: React uses JSX (JavaScript XML), which allows developers to write HTML-like syntax in JavaScript files. JSX improves code readability by making the structure of components more intuitive.
- **Transpilation with Babel**: Browsers cannot interpret JSX directly, so a transpiler like **Babel** is used to convert JSX and modern JavaScript (ES6+) into browser-compatible JavaScript.

  Example:

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

  After transpilation, the code above is converted into:

  ```javascript
  const element = React.createElement("h1", null, "Hello, world!");
  ```

### 2. Virtual DOM

- **Virtual DOM (VDOM)**: React creates a virtual representation of the DOM in memory, which it uses to keep track of component changes.

- **Diffing and Reconciliation**: When changes occur, React compares the new VDOM to the previous one to identify what changed. This process, known as "reconciliation," allows React to update only the modified parts of the real DOM, optimizing performance.

### 3. Components and State Management

- **Components**: React is built around components, which are reusable pieces of the UI. Components can have their own state and can be nested within each other to build complex interfaces.

- **State and Props**:
  - **State**: State allows components to manage internal data and re-render when that data changes.
  - **Props**: Props are used to pass data from parent to child components, making components dynamic and interactive.

### 4. JavaScript Bundling

- **Bundlers like Webpack or Vite**: To prepare React applications for production, JavaScript bundlers compile and bundle all assets, including JavaScript, CSS, and images, into optimized files.

- **Production Optimizations**: Bundlers also apply Babel’s transpilation step, ensuring compatibility with older browsers and creating faster, more efficient applications.

## Notes

- [`Example01.jsx`](src/components/Example01.jsx): All component names must be in PascalCase to avoid being confused with HTML tags, as a convention.

  ```jsx
  // ./src/components/Example.jsx
  import React from "react";

  const HelloWorld = () => <h1>Hello World!</h1>;

  export default HelloWorld;
  ```

  ```jsx
  // ./src/index.js
  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import Example from "./components/Example";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Example />
    </React.StrictMode>
  );
  ```

- [`Example02.jsx`](src/components/Example02.jsx): `props` and `<Fragment>`, often used via `<>...</>` syntax. This lets you group elements without a wrapper node.

  ```jsx
  // ./src/components/Example02.jsx
  import React from "react";

  const Info = (props) => (
    <>
      <h2> This was passed as props: {props.name}</h2>
      <h2> And this too: {props.numberId}</h2>
    </>
  );

  export default Info;
  ```

  ```jsx
  // ./src/index.js
  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import Example2 from "./components/Example02";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Example2 name="Test props" numberId="28" />
    </React.StrictMode>
  );
  ```

- [`Example03.jsx`](src/components/Example02.jsx): **Component Structure and Render**. In React, the component's rendering (UI output) is determined by its state and props.

  - The state manages data that affects how the component renders.
  - The props pass data from parent components to child components.

  ```jsx
  import React, { useState } from "react";

  export default function Saudacao(props) {
    const [type, setTipo] = useState(props.type);
    const [name, setNome] = useState(props.name);

    const handleTipoChange = (e) => {
      setTipo(e.target.value);
    };

    const handleNomeChange = (e) => {
      setNome(e.target.value);
    };

    return (
      <div>
        <h1>
          {type} {name}!
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={type}
          onChange={handleTipoChange}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={name}
          onChange={handleNomeChange}
        />
      </div>
    );
  }
  ```

  - Instead of manually changing the DOM (like you might with `document.getElementById()` in traditional JavaScript), you update the component’s state. For example:
    1. Use ``useState`` (functional components) or ``this.setState`` (class components - [`Example03Class.jsx`](src/components/Example03Class.jsx)) to update the state.
    2. React will automatically detect the state change and trigger a re-render of the component, updating the UI with the new state.
