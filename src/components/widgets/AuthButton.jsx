import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AuthButton() {

    const handleLogin = async (e) => {
        const credentials = {
            "username": "df8d77ced1fc4a6dd2851577ceb13832601fbc34",
            "password": "HaV5vCfbfdkDIfpNx9VgOwfuF2GmjDl"
        }

        try {
            const response = await axios.post('http://api.ayoba.me/v2/login', credentials);
            console.log("EXPECTING TOKEN ...", response.data);
            localStorage.setItem('token', response.data.access_token);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    }

    return (
        <>
            <button onClick={handleLogin} className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8387ff" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5" />
                </svg>
            </button>
        </>
    )
}

export default AuthButton