import React from 'react';

const Scroll=(props)=>{
	return(
		<div style={{overflowY: 'scroll', border: '', height: '540px' }}>
			{props.children}
		</div>
	);
}

export default Scroll;