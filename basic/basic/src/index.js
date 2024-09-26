import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//custom element
// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )

//reactelement for custom

const reactElement = React.createElement(
  'a',
  {href:'https://google.com' ,target:'_blank'},
  'click me to go google'

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   reactElement
 
);

