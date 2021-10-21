import React from 'react'

const Comments = ({comment}) => {
    return (
        <div className="container container-fluid mb-3" style={{backgroundColor:"#f0f5f5",border:"1px solid silver", borderRadius:"10%"}}>
        <div className="row  justify-content-around">
          
   
            <div className="col-12 col-lg-12 mt-5">
            <img
                         
                      src={comment.owner && comment.owner.picture}
                         style={{ width: "70px", height: "70px", borderRadius: '50%', float: 'left',paddingBottom:"10px",margin:"10px" }}
                     />
                <h3>{comment.owner && comment.owner.title} {comment.owner && comment.owner.firstName} {comment.owner && comment.owner.lastName}</h3>
                <p >Comment # ID{comment.id}</p>
   
              
   
                    <hr />
   
                  
                    <p>{comment && comment.message}</p>
                    <hr />
                    
                    <p className='alert alert-info mt-3' style={{ borderRadius:"10%"}}>Post Date: {new Date().toLocaleDateString()}</p>
                   
                    
                                   
                    
   
              
   
                            
            </div>
   
        </div>
    </div>
   
    )
}

export default Comments
