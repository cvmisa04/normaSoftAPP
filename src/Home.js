import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/cards/Card'
import { showAllPost } from './redux/actions/post'

const Home = () => {
    const { data } = useSelector((state) => state.dataPost)
    const dispatch = useDispatch()
    const [post, setPost] = useState([])

    useEffect(() => {
        
        dispatch(showAllPost())
        
        setPost(data.data)
        loadData();
        console.log(post)
        
    }, [dispatch, post,])
const loadData=()=>{
    if(data){
        toast.success('Podaci su uspesno ucitani')
    }else{
        toast.error("Podaci nisu ucitani. Osvezite stranicu!")
    }
}

    return (
        <>
            
            <div style={{ backgroundColor: "#f0f5f5" }}>
                <div className='container  bg-info p-3 mt-3'>
                    {data.data && data.data.map((item) => (
                       
                        <Card key={item.id} post={item} />
                        

                    ))}


                </div>
            </div>
        </>
    )
}

export default Home
