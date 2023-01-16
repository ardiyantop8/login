import React from 'react'
import loginImg from '../assets/gedung.png'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img src={loginImg} alt="" />
        </div>

        <div>
            <form>
                <h2>SIGN IN</h2>
                <div>
                    <label>User Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                    <p><input type="checkbox" />Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

