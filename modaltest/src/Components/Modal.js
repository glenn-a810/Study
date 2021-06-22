function Modal(props) {
    return(
        <div className='modal'>
            <p>{props.text}</p>
            <button className='btn btn--alt' onClick={props.onClose}>CANCEL</button>
            <button className='btn' onClick={props.onClose}>CONFIRM</button>
        </div>
    )
}

export default Modal