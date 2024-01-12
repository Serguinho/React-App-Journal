import Swal from 'sweetalert2'

import { types } from "../types/types"
import {firebase, provider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import { notesLogout } from './notes';





export const startLoginEmailPassword=(email,password)=>{
    return(dispatch)=>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=>{
              dispatch(finishLoading());
             dispatch(
                 login(user.uid, user.displayName)
             )
         })
         .catch(e=>{
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error'   )
            
        }) 
        }
       
    
};

export const startLoginEmailPasswordName=(email,password,name)=>{
    return(dispatch)=>{
        
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async({user})=>{
           await user.updateProfile({displayName:name})
            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(e=>{
            Swal.fire('Error', e.message, 'error'   )
        }) 
       

    }
};


export const startGoogleLogin=()=>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(provider)
        .then(({user})=>{
            dispatch(
                login(user.uid, user.displayName)
            )
        }); 
       
    }
};

export const login=(uid,displayName)=>({
    
        type:types.login,
        payload:{
            uid,
            displayName
        }
    

});

export const startLogout=()=>{
    return async(dispach)=>{
      await firebase.auth().signOut();

      dispach(logout());
      dispach(notesLogout());
    }
};

export const logout = () => ({
  type:types.logout 
})