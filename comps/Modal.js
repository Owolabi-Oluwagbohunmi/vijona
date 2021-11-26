import React from 'react'
import Form from './Form'

const Modal = ({show, onClose }) => {
  
  const[isBrowser, setIsBrowser] = useState(false); 

  useEffect(()=> {
    setIsBrowser(true)
  }, [])

  const handleClose = (e)=> {
    e.preventDefault();
    onClose()
  }
    
   const modalContent = show ?(<div className="modal-bg">
     <button className="bg-v-green p-3" onClick={handleClose}>Close</button>
      <Form/>
      
    </div>):null;
      
    if(isBrowser){ 
      return ReactDOM.createPortal(
        modalContent, document.getElementById("modal-root")
      )
    }else{
      return null;
    }
}

export default Modal
