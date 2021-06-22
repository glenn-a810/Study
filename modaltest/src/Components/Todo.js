import { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

function Todo(props) {
    const [showModal, setShowModal] = useState()

    function showModalHandler() {
        setShowModal(true)
    }

    function closeModalHandler() {
        setShowModal(false)
    }

    return(
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={showModalHandler}>DELETE</button>
            </div>
            {showModal && <Backdrop onClick={closeModalHandler} />}
            {showModal && <Modal text='Modal 상태확인' onClick={closeModalHandler} />}
        </div>
    )
}

export default Todo