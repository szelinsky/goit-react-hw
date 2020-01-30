import React from 'react';
//import Numbers from './numbers/Numbers';
import user from '../user.json';
import Profile from './profile/Profile';
import statistic from '../statistical-data.json';
import Statistic from './statistic/Statistic';


//console.log(user);

//const arr = [1, 2, 3, 4, 5];

export const App = (props) => {
	return (
		<>
			<Profile user={user}/>
			<Statistic statistic={statistic} />

		</>
	);
	
  // return (
  //   <>
	// 		{	console.log('props', props) }      
	// 		<ul>
  //       {arr.map((item, idx, arr) => (
  //         <Numbers key={idx} item={item} idx={idx} arr={arr} />
  //       ))}
  //     </ul>
  //     <div>Hello App!</div>
  //   </>
	// );
 	

};

//export default App;


//export default App;
