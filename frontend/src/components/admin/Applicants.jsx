import React, { useEffect } from "react";
import Header from "../shared/Header";
import ApplicantsTable from "./ApplicantsTable";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";

const Applicants=()=>{
    const params= useParams();
    const dispatch=useDispatch();
    const {applicants}=useSelector(store=>store.application)
    useEffect(()=>{
        const fetchAllApplicants= async()=>{
            try{
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
               
                    dispatch(setAllApplicants(res.data.job))

                
            }catch(error){
                console.log(error);
            }
        }
        fetchAllApplicants();
    },[])
    return(
        <div>
            <Header/>
            <div className="max-w-7xl mx-auto p-[25px_20px]">
               <h1 className="font-bold text-xl my-5">Applications {applicants?.applications?.length}</h1>
               <ApplicantsTable/>
            </div>
        </div>
    )
}

export default Applicants;