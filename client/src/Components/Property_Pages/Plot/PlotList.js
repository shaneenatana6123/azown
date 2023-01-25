import React from 'react'
import Navbar from '../../Header/Navbar'
import Plot from './Plot'
import PlotFilter from './PlotFilter'

const PlotList = () => {
  return (
   <div id="main-wrapper">
 <Navbar/>
  <div className="clearfix" />
 
  <section className="gray pt-4">
    <div className="container">
      <div className="row">
        {/* property Sidebar */}
      <PlotFilter/>
       <Plot/>
      </div>
    </div>	
  </section>
 
</div>

  )
}

export default PlotList