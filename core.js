 // Import React and ReactDOM from esm.sh
 import React from 'https://esm.sh/react@18';
 import ReactDOM from 'https://esm.sh/react-dom@18';

 // Create a React Component
 function App() {
   return React.createElement('h1', null, 'Hello, React with esm.sh!');
 }

 // Render the Component
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(React.createElement(App));