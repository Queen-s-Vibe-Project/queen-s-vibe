import './RecommendInstructors.css'
import RecommendCard from './RecommendCard'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function RecommendInstructors (){
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(()=>{
        dispatch({
            type:'FETCH_RECOMMEND_INSTRUCTOR'
        })
    },[])

    const recommendInstructor = useSelector((store)=> store.recommendInstructor)

    if (recommendInstructor) {
        console.log(recommendInstructor);
    }

    return (
        <div className="recommendInstructor">
            <h3 className='recommendInstructor-header'>Recommended Instuctor</h3>
            <div className='RC-container'>
                { recommendInstructor && recommendInstructor.map( instructor => (
                    <div
                        onClick={()=>{
                            history.push('/instructor/' + instructor.id)
                        }}
                    >
                        <RecommendCard key={instructor.id} instructor={instructor}/>
                    </div>
                ))} 
            </div>
        </div>
    )
}