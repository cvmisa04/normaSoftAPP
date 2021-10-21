import React, { useEffect, useState,useRef } from 'react'
import { showPostById } from '../../redux/actions/post';
import { toast } from 'react-toastify';
import { updatePost } from '../../redux/actions/updateAction';



const EditPostForm = ({ match, history }) => {

    useEffect(() => {
        loadPostById()
        textInput.current.focus();
    }, [])

    const textInput = useRef()
    //State

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState("")
    const [picture, setPicture] = useState("")
    const [image, setImage] = useState("")
    const [text, setText] = useState("")
    const [tags, setTags] = useState([])
    const [likes, setLikes] = useState('')



    //Load by Id and set state

    const loadPostById = async () => {
        let res = await showPostById(match.params.id)
        setId(res.data.id)
        setTitle(res.data.owner.title)
        setFirstName(res.data.owner.firstName)
        setLastName(res.data.owner.lastName)
        setImage(res.data.image)
        setPicture(res.data.owner.picture)
        setText(res.data.text)
        setTags([res.data.tags])
        setLikes(res.data.likes)
        //show notification
        if (res.data) {
            toast.info('Ucitan post.')
        }
        console.log(res.data)


    }



    //handler update post

    const handleSubmit = async (e) => {

e.preventDefault()
        let item = { id, image, text, tags, likes }
        console.log(item)


        try {
            //update post
            await updatePost(match.params.id, item);
            toast.success("Updated post")
            history.push('/')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container-fluid alert alert-info p-3 text-center'>
                <h2>Edit post ID#{id}</h2>


            </div>
            <div className='container'>
                <div className='row'>

                    <form onSubmit={handleSubmit} encType='multipart/form-data' target="votar">
                        <div className='form-group'>
                            <hr />
                            <div className='d-flex justify-content-center'>


                                <input
                                    type="text"
                                    name='title'
                                    value={id}
                                    placeholder="Id"
                                    className="m-2"
                                    disabled='true'




                                />


                                <input
                                    type="text"
                                    name='title'
                                    value={`${title} ${firstName} ${lastName}`}
                                    placeholder="Title"
                                    className=" m-2"
                                    disabled='true'




                                />
                                <img

                                    src={picture}
                                    style={{ width: "100px", height: "100px", borderRadius: '50%' }}
                                />
                            </div>
                            <br />
                            <hr />
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
                                src={image}
                                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                                onChange={(e) => setImage(e.target.value)}

                            />


                            <textarea

                                name='text'
                                ref={textInput}
                                value={text}
                                placeholder="Content"
                                className="form-control m-2"
                                onChange={(e) => setText(e.target.value)}




                            />
                            {tags && tags.map(tag => (
                                <textarea

                                    name='tags'
                                    onChange={(e) => setTags([e.target.value])}
                                    placeholder="Content"
                                    className="form-control m-2"
                                    value={tag}



                                />

                            ))}






                            <input
                                type="number"
                                name='likes'
                                onChange={(e) => setLikes(e.target.value)}
                                placeholder="Likes"
                                className="form-control m-2"
                                value={likes}



                            />








                            <button type="submit" className='btn btn-outline-primary m-2 form-control' >Save</button>


                        </div>

                    </form>
                </div>
            </div>


        </>
    )
}

export default EditPostForm
