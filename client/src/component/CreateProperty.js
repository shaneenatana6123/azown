import React from 'react'
import { Link } from 'react-router-dom'

const CreateProperty = () => {
  return (
    <div className='container m-5'>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Residential</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Commertial</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Plot/Land</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <Link class="btn btn-primary m-4 p-2" to="/rr-create-property">Rent</Link>
                <button class="btn btn-light m-4 p-2">Reasle</button>
                <button class="btn btn-light m-4 p-2">PG/Hostal</button>
                <button class="btn btn- m-4 p-2">Flatmates</button>

            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <button class="btn btn-primary m-4 p-2">Rent</button>
                <button class="btn btn-light m-4 p-2">Sale</button>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <button class="btn btn-primary m-4 p-2">Resale</button>
                
            </div>
            
          </div>
    </div>
  )
}

export default CreateProperty
