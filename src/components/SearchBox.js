import React from 'react';

const SearchBox=({searchChange})=>{
	return(
		<div className='ma3'>
			<input
				type='search'
				placeholder='Search Robos'
				className='pa2 ba b--green'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;