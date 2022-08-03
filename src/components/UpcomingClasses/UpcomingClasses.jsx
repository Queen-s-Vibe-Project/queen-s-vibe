import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './UpcomingClasses.css'
import UpcomingClassCard from './UpcomingClassCard'

export default function UpcomingClasses(){

    const user = useSelector((store)=> store.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type:'FETCH_UPCOMING_CLASSES',
            payload: user.id
        })
    },[])

    return(
        <div>
            <h3>Upcoming Classes</h3>
            <div className='upcomingClasses-section'>
                <UpcomingClassCard/>
                <UpcomingClassCard/>
                <UpcomingClassCard/>
                <UpcomingClassCard/>
                <UpcomingClassCard/>
            </div>
            
        </div>
    )
}