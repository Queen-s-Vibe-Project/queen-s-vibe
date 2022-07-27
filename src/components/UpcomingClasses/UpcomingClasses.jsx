import './UpcomingClasses.css'
import UpcomingClassCard from './UpcomingClassCard'

export default function UpcomingClasses(){
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