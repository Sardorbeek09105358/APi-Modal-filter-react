import React from 'react'
import { useState } from 'react'
import ModalApp from './ModalApp'

const Todos = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [text, setText] = useState()
    const [data, setData] = useState([
        { id: 1, header: "open", title: "task1", status: "open" },
        { id: 2, header: "pending", title: "task2", status: "pending" },
        { id: 3, header: "payload", title: "task3", status: "payload" },
        { id: 4, header: "progress", title: "task4", status: "progress" },
    ])
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = e.target[0].value
        let status = e.target[1].value
        let id = text.id
        if (text !== "") {
            data.map((item) => {
                if (item.id == id) {
                    item.title = title
                    item.status = status
                }
            })
        } else {
            let payload = {
                id: data.length + 1,
                title,
                status,
            }
            data.push({ ...payload })
            setData([...data])
        }
        setModalVisible(false)
        setText('')
    }
    const deleteItem = (id) => {
        let filtered_arr = data.filter((item) => item.id !== id)
        setData([...filtered_arr])
    }
    const editItem = (item) => {
        setText(item)
        setModalVisible(true)
    }
    const toggle = () => {
        setModalVisible(false)
        setText('')
    }
    return (
        <div className='container'>
            <ModalApp open={modalVisible} toggle={toggle} handleSubmit={handleSubmit} text={text} />
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>open</h1>
                        </div>
                        {
                            data.filter(item => item.status == 'open').map((item, index) => {
                                return <div className='card-body d-flex align-items-center gap-3' key={index}>
                                    <span>{item.title}</span>
                                    <button className='btn btn-info' onClick={() => editItem(item)}>edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>delete</button>
                                </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={() => setModalVisible(true)}>add user</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>pending</h1>
                        </div>
                        {
                            data.filter(item => item.status == 'pending').map((item, index) => {
                                return <div className='card-body d-flex align-items-center gap-3' key={index}>
                                    <span>{item.title}</span>
                                    <button className='btn btn-info' onClick={() => editItem(item)}>edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteItem(item.id)} >delete</button>
                                </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={() => setModalVisible(true)}>add user</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>payload</h1>
                        </div>
                        {
                            data.filter(item => item.status == 'payload').map((item, index) => {
                                return <div className='card-body d-flex align-items-center gap-3' key={index}>
                                    <span>{item.title}</span>
                                    <button className='btn btn-info' onClick={() => editItem(item)}>edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>delete</button>
                                </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={() => setModalVisible(true)}>add user</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>progress</h1>
                        </div>
                        {
                            data.filter(item => item.status == 'progress').map((item, index) => {
                                return <div className='card-body d-flex align-items-center gap-3' key={index}>
                                    <span>{item.title}</span>
                                    <button className='btn btn-info' onClick={() => editItem(item)}>edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>delete</button>
                                </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={() => setModalVisible(true)}>add user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos

