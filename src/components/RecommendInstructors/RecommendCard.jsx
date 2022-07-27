import './RecommendInstructors.css'


export default function RecommendCard() {
    return(
        <div>
            <div className="card RC-card">
            <img
                className='avator' 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" 
                alt="picture" 
                srcset=""
                height={75}
            />
            <div className='RC-card-text'>
                <p>Sara</p>
                <p>She/her</p>
                <p>#POC</p>
            </div>
            </div>
        </div>
    )
}