import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructorCardItem from "../InstructorCardItem/InstructorCardItem";


export default function FavoriteInstructor(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type:'FETCH_FAVORITE_INSTRUCTOR'
        })
    })

    return (
        <div>

        </div>
    )
}