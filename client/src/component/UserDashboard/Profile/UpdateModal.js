import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';
const UpdateModal = (props) => {
    const { userdetail } = props
    const usercontext = useContext(UserContext)
    const { kycupdate } = usercontext
    const [euser, seteuser] = useState({
        name: '', email: '', phone: '', description: '', dob: '',
        usertype: '', adharno: '', pancardno: '', landmark: '', street: '', city: '', state: '', country: ''
    })
    const [file, setfile] = useState('')
    function onImageChange(e) {
        setfile(e.target.files[0])
    }
    function handleChange(e) {
        seteuser({ ...euser, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", userdetail.name);
        formData.append('email', userdetail.email)
        formData.append('description', euser.description)
        formData.append('dob', euser.dob)
        formData.append('usertype', euser.usertype)
        formData.append('adharno', euser.adharno)
        formData.append('pancardno', euser.pancardno)
        formData.append('landmark', euser.landmark)
        formData.append('street', euser.street)
        formData.append('city', euser.city)
        formData.append('state', euser.state)
        formData.append('country', euser.country)
        formData.append('profile', file)
        // console.log(formData)
       kycupdate(formData)
        setShow(false)
        // console.log(responce)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div >
            <Button variant="dark" onClick={handleShow}>
                Edit Profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Your Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmit} >
                        <div class="mb-3">
                            <input type="text" value={userdetail.name} onChange={handleChange} name="name" class="form-control" placeholder="Enter the Full Name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" value={userdetail.email} onChange={handleChange} name="email" placeholder="Enter the Email" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} name="phone" class="form-control" placeholder="Enter the Mobile" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" placeholder="Enter the Description" />
                        </div>
                        <div class="mb-3">
                            <input type="date" onChange={handleChange} class="form-control" name='dob' placeholder="Enter the DOB" />
                        </div>
                        <div class="mb-3">

                            {/* <input type="text" onChange={handleChange} class="form-control" name='usertype' placeholder="Enter the User Type" /> */}
                            <select  name="usertype"
                                onChange={handleChange}
                                class="form-select"
                                aria-label="Default select example" placeholder="Enter the User Type"
                            >
                                <option value="visiter" selected>visiter
                                </option>
                                <option value="broker">broker</option>
                                <option value="vender">vender</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='adharno' placeholder="Enter the Adhaar No" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='pancardno' placeholder="Enter the PanCard no." />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='landmark' placeholder="Enter the Landmark" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='street' placeholder="Enter the Street" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='city' placeholder="Enter the City" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='state' placeholder="Enter the Full Name" />
                        </div>
                        <div class="mb-3">
                            <input type="text" onChange={handleChange} class="form-control" name='country' placeholder="Enter the Country" />
                        </div>
                        <div class="mb-3">
                            <input type="file" class="form-control" name='profile' accept="image/*" onChange={onImageChange} required />
                        </div>



                        <button type="submit" class="btn btn-dark">Update</button>
                    </form>



                </Modal.Body>
                <Modal.Footer>

                    {/* <Button variant="dark" onClick={handleClose}>
                Update
              </Button> */}
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default UpdateModal