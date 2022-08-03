import './RecommendInstructors.css'

export default function RecommendCard({instructor}) {
    return(
        <div>
            <div className="card RC-card">
            <img
                className='avator' 
                src={instructor.avatar} 
                alt="picture" 
                srcset=""
                height={75}
            />
            <div className='RC-card-text'>
                <p>{instructor.name}</p>
                <p>{instructor.pronouns}</p>
                <p>{instructor.count} Matching Tags</p>
            </div>
            </div>
        </div>
    )
}