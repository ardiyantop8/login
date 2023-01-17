import React from 'react'
import loginImg from '../assets/gedung.png'

export default function Login() {
    const loginClick = async(e) => {
        e.preventDefault();
        let u = e.target.username.value;
        let p = e.target.passwd.value;
        // alert('Username : ' + u +' Password : ' +p );

        let cek_login = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: u,
              password: p,
              // expiresInMins: 60, // optional
            })
        })
        .then(res => res.json())
        .then(hasil => {return hasil});

        if (cek_login.username === undefined) {
            alert('Login Gagal. Username atau password salah !');
        }
        else {
            alert('Login Sukses, Username : ' + cek_login.username); 
        }
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={loginClick}>
                <h2 className='text-4xl text-white font-bold text-center pb-4'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>User Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name='username' id='idUsername' autoComplete='off'/>
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name='passwd' id='idPasswd'/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-lg text-white font-semibold' type='submit'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

