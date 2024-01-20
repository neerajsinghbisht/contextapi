import react,{useState,useContext}from 'react';
import UserContext from '../context/UserContext';

function Profile(){
    const {user}=UserContext(UserContext)  
    if (!user) return <div>please login</div>  
    return <div> welcome {user.name}</div>
}
export default Profile;