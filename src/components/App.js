import React from 'react';
import Numbers from './numbers/Numbers';

const arr = [1, 2, 3, 4, 5];

export const App = (props) => {
	
  return (
    <>
			{	console.log('props', props) }      
			<ul>
        {arr.map((item, idx, arr) => (
          <Numbers key={idx} item={item} idx={idx} arr={arr} />
        ))}
      </ul>
      <div>Hello App!</div>
    </>
  );
};

//export default App;
