import React,{useState,useRef, useEffect} from 'react'
import { createPost } from '../../redux/actions/createPost'
import {toast} from 'react-toastify'

const AddPostForm = ({history}) => {
    
useEffect(()=>{
    textInput.current.focus();

},[])
const textInput = useRef()
    const [id,setId]=useState("")
  const [image,setImage]=useState("https://via.placeholder.com/100x100.png?text=PREVIEW")
  const [text,setText]=useState("")
  const [tags,setTags]=useState([])
  const [likes,setLikes]=useState("")
  const[publishDate,setPublishDate]=useState(`${new Date().toLocaleString()}`)
  const [owner,setOwner]=useState({
    "id":"",
    "title":"",
    "firstName":"",
    "lastName":"",
    "picture":"https://via.placeholder.com/100x100.png?text=PREVIEW"
  })


  const handleSubmit = async (e)=>{
      e.preventDefault()
//console.log({id,image,text,tags,likes,publishDate,owner});



let item = {id,image,text,tags,likes,publishDate,owner}


console.log(item)
try {
    
let res = await createPost(item);
 console.log(res)
      toast.success('Uspesno ste dodali post!')
      history.push('/')
 

    
} catch (error) {
    toast.error('Desila se greska. Pokusajte ponovo!')
    console.log(error)
}

  }
    return (
        <>
        <div className='container-fluid alert alert-info p-3 text-center'>
            <h2>Add Post</h2>


        </div>
        <div className='container'>
            <div className='row'>

                <form onSubmit={handleSubmit} encType='multipart/form-data' target="votar">
                    <div className='form-group'>
                        <hr />
                        <h6 className='alert alert-info'>Personal information</h6>
                        <div className='d-flex justify-content-center text-center'>
                            
                        <input
                            ref={textInput}
                                type="text"
                                name='title'
                                value={owner.id}
                                placeholder="Id"
                                className="m-2"
                                onChange={(e)=>setOwner({...owner,id:e.target.value})}
                                




                            />
                             <input
                                type="text"
                                name='title'
                                values={owner.title}
                                placeholder="Title"
                                className=" m-2"
                                onChange={(e)=>setOwner({...owner,title:e.target.value})}




                            />
                            <input
                                type="text"
                                name='title'
                                value={owner.firstName}
                                placeholder="First Name"
                                className="m-2 w-100 h-120"
                                onChange={(e)=>setOwner({...owner,firstName:e.target.value})}




                            />


                            <input
                                type="text"
                                name='title'
                                value={owner.lastName}
                                placeholder="Last Name"
                                className="m-2 w-100"
                                onChange={(e)=>setOwner({...owner,lastName:e.target.value})}




                            />
                              
                          
                          
                        </div>
                        <br />
                        <hr />
                        <h6 className='alert alert-info'>Post information</h6>
                        <label className="btn btn-outline-secondary btn-block m-2 text-left">
                            Image
                            <input
                                type='file'
                                
                                name='image'
                                accept='image/*'
                                hidden

                            />
                        </label>
                        <img
                           
                            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                            src='https://via.placeholder.com/100x100.png?text=PREVIEW'
                            

                        />
                         <input

                            name='text'
                           
                            value={id}
                            placeholder="Id post"
                            className="form-control m-2"
                            onChange={(e)=>setId(e.target.value)}




                        />


                        <textarea

                            name='text'
                           
                            value={text}
                            placeholder="Enter text"
                            className="form-control m-2"
                            onChange={(e)=>setText(e.target.value)}
                            




                        />
                      
                            <textarea

                                name='tags'
                                value={tags}
                                placeholder="Enter tags"
                                className="form-control m-2"
                                onChange={(e)=>setTags([e.target.value])}
                                



                            />

                  






                        <input
                            type="number"
                            name='likes'
                            value={likes}
                            placeholder="Likes"
                            className="form-control m-2"
                            onChange={(e)=>setLikes(e.target.value)}



                        />








                        <button type="submit" className='btn btn-outline-success m-2 form-control' >Save</button>


                    </div>

                </form>
            </div>
        </div>


    </>
    )
}

export default AddPostForm
