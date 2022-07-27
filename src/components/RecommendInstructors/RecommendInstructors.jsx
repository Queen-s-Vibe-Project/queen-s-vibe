import './RecommendInstructors.css'
import RecommendCard from './RecommendCard'

export default function RecommendInstructors (){
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