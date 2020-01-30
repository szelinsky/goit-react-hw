import React from 'react'

const Numbers = props => {
	console.log('props', props);
	return (
	<li id={props.idx}>{props.item}</li>)
};



// const Numbers = ({idx, item}) => {
// 	return (
// 	<li id={idx}>{item}</li>)
// };

export default Numbers;


