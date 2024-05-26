import React from 'react'

const Stars = ({stars}) => {
  
	let str = '';
	for (let i = 0; i < stars; i++){
		str += '★';
	}

	return (
    <div>{str}</div>
  )
}

export default Stars