import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Card