import React from 'react'

export default function PageHeader(props) {
  return (
    <div className='d-flex justify-content-center' style={{backgroundImage: `url(${props.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className='d-flex justify-content-center flex-column align-items-center w-50 p-4' style={{background: "rgba(0, 0, 0, 0.5)", margin: '15%'}}>
            <h1 className='p-2 fw-bold' style={{color: 'white', fontSize: "4vw"}}>{props.title}</h1>
            <hr style={{backgroundColor: "#af9a7d", width: "30%", height: "6px", opacity: "1"}} />
            <p className='p-1 fw-thin text-light' style={{letterSpacing: "3px"}}>{props.message}</p>
            <button className='border-0 py-1 px-2 pageHeaderButton fw-semibold' style={{backgroundColor: "#af9a7d", fontSize: "20px", letterSpacing: "3px"}}>{props.buttonTitle}</button>
        </div>
    </div>
  )
}
