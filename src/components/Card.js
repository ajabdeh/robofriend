import React from 'react';

const Card=({id,name,email})=>{
	return(
		<div className="bg-light-blue dib br3 ma2 grow bw2 shadow-5">
			<img alt='Robots' src={`https://robohash.org/${id}set_set3/bgset_bg1/3.14159?size=280x280`}/>
			<div className='tc'>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;