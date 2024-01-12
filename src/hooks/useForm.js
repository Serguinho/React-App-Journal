import { useState } from "react"


const useForm = (initialStade={}) => {
   const [values, setvalues] = useState(initialStade);

    const resetValues=(newFormState=initialStade)=>{
        setvalues(newFormState);
    }


    

    const handleInputChange=({target})=>{
        //console.log(e.target);
        setvalues({
         ...values,
         [target.name]:target.value
        })
       } 
       return [values,handleInputChange,resetValues]; 

}

export default useForm