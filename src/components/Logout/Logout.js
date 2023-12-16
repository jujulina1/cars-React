import { useContext, useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";


export default function Logout(accessToken) {


 
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        context.onLogout(accessToken);
        navigate('/')

    },[]) 

}