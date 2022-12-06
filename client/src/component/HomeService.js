import React ,{useContext,useEffect}from 'react'
import propertyContext from '../context/PropertyContext'
import { Link ,Route} from 'react-router-dom';
import Services from './Services';
const HomeService = () => {
    const context = useContext(propertyContext);
  const { fetchservice, allservice } = context;
  useEffect(() => {
    fetchservice();
  }, []);
  return (
    <div>
      <div class="container-fluid">
            <h1 class="text-center">Services</h1>
            <div class="row">
            {allservice.map((service)=>{
                return <div class="col-2">
                   <h4>{service.service_name}</h4>
                   {/* <span>{service.service_desc}</span> */}
                  
                   <Link to ={`/service/${service.service_name}`}>click</Link>
                </div>
            })}
                
              
            </div>
        </div>
    </div>
  )
}

export default HomeService
