import React, { useEffect,useRef } from 'react'

const AddCommentForm = () => {
    useEffect(()=>{
        textInput.current.focus()
    },[])
    const textInput = useRef()
    return (
        <div className='container mb-5'>
         
                <form >
                    <div className='form-group'>
                        <div className='d-flex justify-content-center'>
                            <textarea

                                name='text'
                               ref={textInput}
                                placeholder="Enter your comment"
                                className="form-control m-2"
                               




                            />
                            <br />
                            
                            
                        </div>
                        <button  className='btn btn-warning btn-sm' style={{float:'right'}}>Add Comment</button>
                    </div>
                </form>
            
        </div>
    )
}

export default AddCommentForm
