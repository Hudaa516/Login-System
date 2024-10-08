import { useRef, useState } from "react"

export default function App() {
  const email = useRef();
  const password = useRef();
  if (localStorage.getItem('localLogin') == null) {
    localStorage.setItem('localLogin', JSON.stringify([]));
  }

  return (
    <>
      <div className=' App col-12 d-flex'>
        <div className='col-12'>
          <h1 className='p-3 m-3 '>Login Form</h1>
        </div>
      </div>
      <div className=' log col-12 d-flex justify-content-center'>
        <div className='login col-8  d-flex'>
          <div className='col-6 '>
            <div className='col-12'>
              <h2>We Missed You!</h2>
              <p>Login To Continue</p>
            </div>
            <div className='col-12'>
              <form>
                <label htmlFor="email" />
                <input className='col-10 p-2 m-3' type='email' id='email' placeholder='Enter Your Email' ref={email} />
                <label htmlFor="password" />
                <input className='col-10 p-2 m-3' type='password' id='password' placeholder='Enter Your Password' ref={password} />
                <button className='btn' onClick={() => {
                  if (email.current.value === '' || password.current.value === '') {
                    alert('Please, write your Email and Password.');
                  } else {
                    const arr = JSON.parse(localStorage.getItem('localLogin'));
                    arr.push({ email: email.current.value, password: password.current.value });
                    localStorage.setItem('localLogin', JSON.stringify(arr));


                  }
                }}>Login</button>
              </form>
              <div className="icons">

                <p>Or Login in via</p>
                    </div>
            </div>

          </div>
          <div>
            <img src='./mountain.jpg' className='col-12' />
          </div>
        </div>
      </div>
    </>
  )
}
