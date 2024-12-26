'use client';
function MyModal({username,lastname,children,handleClose})
{

    return (
        <div className="modal-backdrop">
    
            <div className="modal">
             
                <div className="modal-body">
                   <div className='modal-name'>AD:{username}</div>
                   <div className='modal-role'>Soyad:{lastname}</div>
                   <div className="skills">
                         {children}

                   </div>
                </div>
                <button className="close-btn" onClick={handleClose}>Close</button>
            </div>
    
        </div>
    )
}
export default MyModal;