
import React, { useEffect, useState } from 'react'
import { DeleteTwoTone, LikeTwoTone } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { showComments, showPostById } from '../../redux/actions/post';
import { EditTwoTone } from '@ant-design/icons';
import { toast } from 'react-toastify'
import Comments from './Comments';
import { deletePost } from '../../redux/actions/deleteAction';
import { Link } from 'react-router-dom';
import AddCommentForm from '../forms/AddCommentForm';

const PostDescription = ({ match,history }) => {
    //const {post} = useSelector((state)=>state.dataId);
    const {del}= useSelector(state=>state.delPost)
    const dispatch = useDispatch();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState({})

    useEffect(() => {
        loadPostById();
        loadComments();
       
        
       
        console.log(del)
    }, [dispatch])

    const loadPostById = async () => {
        let res = await showPostById(match.params.id)
        if(res.data){
            toast.success(`Uspesno ucitan post sa ID: ${match.params.id}`)
        }
        console.log(res.data)
        setPost(res.data)
        console.log(post)

    }

    const loadComments = async () => {
        let res = await showComments(match.params.id)
        if(res.data.total !==0){
            toast.info('Uspesno ucitani komentari.')
        }else{
            toast.info("Nema komentara za ovaj post!")
        }
        console.log(res.data)
        setComments(res.data)
        console.log(comments.data)
    }
    const deleteHandler =()=>{
        dispatch(deletePost(match.params.id))
       toast.info('Uspesno ste obrisali post')
        history.push('/')
    }
    return (


        <div className="container container-fluid" style={{ backgroundColor: "#f0f5f5" }}>
            <div className="row f-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid">
                    <img
                        src={post.image && post.image}
                        style={{ width: '500px', height: '500px', marginTop: "3rem",border:"2px solid yellow",boxShadow:"10px 10px 5px grey" }}


                    />
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <img

                        src={post.owner && post.owner.picture}
                        style={{ width: "70px", height: "70px", borderRadius: '50%', float: 'left', paddingBottom: "10px", margin: "10px" }}
                    />
                    <h3>{post.owner && post.owner.title} {post.owner && post.owner.firstName} {post.owner && post.owner.lastName}</h3>
                    <p >Post # ID {post && post.id}</p>



                    <hr />

                    <h4 className="mt-2">Description:</h4>
                    <p>{post && post.text}</p>
                    <hr />
                    <h4 className="mt-2">Date:</h4>
                    <p className='alert alert-info mt-3'>Post Date: {new Date(post && post.publishDate).toLocaleDateString()}</p>
                    <hr />
                    <h4 className="mt-2">Tags:</h4>
                    {post.tags && post.tags.map(tag => (
                        <span className='float-right text-white' style={{ backgroundColor: "tomato", margin: '5px', padding: "5px" }}>
                            {tag}
                        </span>
                    ))}
                    <hr />
                    <h4 className="mt-2">Likes:</h4>
                    <p className='card-text' style={{ fontSize: "32px" }}><LikeTwoTone /> {post && post.likes}</p>
                    <hr />

                   <Link to={`/${post && post.id}/edit`} className='btn btn-info p-2 text-light '>EDIT POST <EditTwoTone style={{ fontSize: "36px",  float: 'right' }} /> </Link> 
                    <button className="btn btn-danger p-2" onClick={()=>deleteHandler(post & post.id)}> DELETE POST  <DeleteTwoTone style={{ fontSize: "36px",  float: "right" }} /> </button>
                   

                </div>

            </div>
            <hr />
            <h4 className="mt-2">Add Comment</h4>
            <AddCommentForm />
            <h4 className="mt-2">Comments:</h4>
            {comments.data && comments.data.map(coment => (
               
                <Comments key={coment.id} comment={coment} />
            ))}

        </div>




    )
}

export default PostDescription
