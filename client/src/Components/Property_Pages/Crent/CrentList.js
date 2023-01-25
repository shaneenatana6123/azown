import React from 'react'
import Navbar from '../../Header/Navbar'
import Crent from './Crent'
import CrentFilter from './CrentFilter'

const CrentList = () => {
  return (
    <div id="main-wrapper">
 <Navbar/>
  <div className="clearfix" />
 
  <section className="gray pt-4">
    <div className="container" style={{paddingLeft: 0, paddingRight: 0}}>
      <div className="row">
        {/* property Sidebar */}
       			<CrentFilter/>		
       <Crent/>
      </div>
    </div>	
  </section>
 
  
</div>

  )
}

export default CrentList