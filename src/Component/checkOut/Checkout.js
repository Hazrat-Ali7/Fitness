import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './Checkout.css'
const Checkout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (e) => {
    e.preventDefault()
    handleShow(true)

  }
  return (
    <div className='check '>

      <div className='check-form'>
        <h1>Checkout</h1>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Adress</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" required />
          </div>
          <button type='submit' className="btn btn-primary">Confirm</button>
        </form>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enrolled SuccessFully  Done
          <br />
          We can Messege You Soon
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Checkout