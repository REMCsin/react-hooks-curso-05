import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Memorize } from './06-memos/Memorize';



// esta parte no la pude hacer revisar luego y crear los archivos necesarios y el index.js en la carpeta
// import { Layout } from './05-useLayoutEffect/Layout';


// import { FocusScreen } from './04-useRef/FocusScreen';
// la de multiples es la de pokemon
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memorize />
  </StrictMode>,
);
