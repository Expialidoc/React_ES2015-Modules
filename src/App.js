import React from 'react';
import { choice, remove } from './helpers';
import {items} from './fruits';

function App() {
  const RANDOMFRUIT = choice(items);
  remove(items, RANDOMFRUIT);
  return (
    <div className="App">
      <p>
        I\’d like one {RANDOMFRUIT}, please
        </p>
        <p>
        Here you go: {RANDOMFRUIT}
        </p>
        <p>
        Delicious! May I have another?
        </p>
        <p>
        I’m sorry, we’re all out. We have {items.length} left
        </p> 
    </div>
  );
}

export default App;
