import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {LikeTwoTone} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Card = ({ post }) => {

    return (
        <Link className='txt' to={`/${post.id}`}>
        <div className='card mb-5'  style={{backgroundColor:"#f0f5f5"}}>


            <div className='row no-gutters'>
                <div className='col-md-4'>



                    <img src={post.image}
                        alt='alt image'
                        className='card-img img img-fluid m-3'
                        style={{ width: "350px", height: "300px", borderRadius: '10%',boxShadow:"10px 10px 5px grey" }}


                    />



                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'> <span className='float-right text-primary mt-2'>

                            {post.owner.title} {post.owner.firstName}  {post.owner.lastName}
                            <img
                              
                                src={post.owner.picture}
                                style={{ width: "80px", height: "80px", borderRadius: '50%', float: 'right',paddingBottom:"10px" }}
                            />
                        </span>

                        </h3>
                        <p className='alert alert-info mt-5'>Post Date: {new Date(post.publishDate).toLocaleDateString()}</p>
                            <p>{post.text}</p>
                       
                            {post.tags.map(tag=>(
                                 <span className='float-right text-white' style={{ backgroundColor: "tomato",margin:'5px',padding:"5px" }}>
                                     {tag}
                                      </span>
                            ))}

                       


                        <p className='card-text' style={{fontSize:"36px"}}><LikeTwoTone/>   {post.likes}</p>
                       

                        <div className='d-flex justify-content-right h4'>


                            <button
                                
                                className="btn btn-success align-right">
                                Show More

                            </button>






                        </div>

                    </div>

                </div>

            </div>



        </div>
        </Link>
    )
}

export default Card
