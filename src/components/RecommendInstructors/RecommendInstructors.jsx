import './RecommendInstructors.css'
import RecommendCard from './RecommendCard'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';


export default function RecommendInstructors (){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({
            type:'FETCH_RECOMMEND_INSTRUCTOR'
        })
    })

    return (
        <div className="recommendInstructor">
            <h3 className='recommendInstructor-header'>Recommended Instuctor</h3>
            <div className='RC-container'>
                <RecommendCard/>
                <RecommendCard/>
                <RecommendCard/>
                <RecommendCard/>
            </div>
        </div>
    )
}