// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hii from './hii';

const ReactElement=React.createElement(
  'a',
  {
    href: "",
    target: "_blank"
  },
  "let me google for you"
)

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <div>
      {ReactElement}
      <App />
      <Hii />
    </div>
  );
