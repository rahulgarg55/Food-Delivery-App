import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div>
        <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
          <img src="..." className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is Some Important text.</p>
            <div className ='container'></div>
          </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
