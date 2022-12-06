import React from 'react'
import Services from './Adminservice'

const Adminpanel = () => {
  return (
    <div id="admin">
    <h1 class="text-center">Admin Panel</h1>
    <hr />
    <div class="container m-5">
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
            type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Properties</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
            type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Users</button>
          <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled"
            type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Services</button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
            type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Premium</button>
          <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
            type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"
            tabindex="0">
           
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"
            tabindex="0">
           
          </div>
          <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab"
            tabindex="0">
          <Services/>
            

          </div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"
            tabindex="0">
        
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-cp"
                  type="button" role="tab" aria-controls="nav-home" aria-selected="true">Create Plans</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-plan"
                  type="button" role="tab" aria-controls="nav-profile" aria-selected="false">All Plans</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                  type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled"
                  type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Disabled</button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-cp" role="tabpanel" aria-labelledby="nav-home-tab"
                tabindex="0">
                
                <div class="container p-5">
                  <h3 class="text-center">
                    Create a Plans
                  </h3>
                  <form action="" class="container m-3">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Plan Name</label>
                      <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Residential Rent </option>
                        <option >Residential Sale</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"> Plan Duration</label>
                      <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>3 month</option>
                        <option >6 month </option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Charge Plan</label>
                      <input type="number" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3">

                      <input type="submit" value="Create the Service" class="form-control btn btn-dark"
                        id="exampleFormControlInput1" />
                    </div>
                  </form>
                </div>
            

              </div>
              <div class="tab-pane fade" id="nav-plan" role="tabpanel" aria-labelledby="nav-profile-tab"
                tabindex="0">
                
                <div class="container p-5">
                  <table class="table">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Plan Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Plan Charge</th>
                        <th scope="col">Total Payment</th>
                        <th scope="col">No. of User</th>
                        <th scope="col"> Edit Plan</th>
                        <th scope="col">Del Plan</th>
                        

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Residential Rent</td>
                        <td>3 month</td>
                        <td>Rs.120</td>
                        <td>Rs. 6K</td>
                        <td><a href="" class="text-decoration-none">0</a></td>
                        <td class="btn  btn-light">Edit</td>
                        <td class=""> DEl</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Residential Rent</td>
                        <td>3 month</td>
                        <td>Rs.120</td>
                        <td>Rs. 6K</td>
                        <td><a href="" class="text-decoration-none">0</a></td>
                        <td class="btn  btn-light">Edit</td>
                        <td class=""> DEl</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Residential Rent</td>
                        <td>3 month</td>
                        <td>Rs.120</td>
                        <td>Rs. 6K</td>
                        <td><a href="" class="text-decoration-none">0</a></td>
                        <td class="btn  btn-light">Edit</td>
                        <td class=""> DEl</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              
              </div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"
                tabindex="0">...</div>
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab"
                tabindex="0">...</div>
            </div>

        
          </div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"
            tabindex="0">...</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Adminpanel
