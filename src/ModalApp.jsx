import React from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
const ModalApp = ({open, toggle, handleSubmit, text}) => {
  return (
    <div>
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1>Add user</h1>
            </ModalHeader>
            <ModalBody>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" defaultValue={text?.title}  placeholder='title' className='form-control my-2'/>
                <select className='form-control my-2' defaultValue={text?.status}>
                    <option value="open">open</option>
                    <option value="pending">pending</option>
                    <option value="payload">payload</option>
                    <option value="progress">progress</option>
                </select>
            </form>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-success' form='form' type='submit'>save</button>
            </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalApp