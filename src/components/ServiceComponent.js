import React from 'react'

export default function ServiceComponent(props) {
  return (
    <div className='text-center px-3' style={{width: "24%"}}>
        {props.image}
        <h5 className='p-3' style={{letterSpacing: "3px"}}>{props.title}</h5>
        <p>{props.message}</p>
    </div>
  )
}
