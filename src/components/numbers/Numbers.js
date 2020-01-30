import React from 'react';
import User from './user/User';

// const Numbers = props => {
// 	console.log('props', props);
// 	return (
// 	<li id={props.idx}>{props.item}</li>)
// };



const Numbers = ({idx, item}) => (
	<li id={idx}>
		<User item={item} />
		{/* <User /> */}
	</li>
);

export default Numbers;


