import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Menu from '../Menu/Menu/Menu';
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";



  const {
    signIn
  } = useContext(AuthContext)
  const [disabled, setLogindisabled] = useState(true)
  const captchaRef = useRef(null)
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire({
          title: 'Login successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true })
      })
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []
  )

  const handleCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue) == true) {
      setLogindisabled(false)
    }
  }
  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex lg:flex-row-reverse">
        <div className="text-center w-[500px] md:text-left lg:text-left">
          <h1 className="text-5xl text-center mb-6 font-bold">Login now!</h1>

          <div className="card flex  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  < LoadCanvasTemplate />
                </label>
                <input ref={captchaRef} type="text" name='captcha' placeholder="type the captcha" className="input input-bordered" required />
                <button onClick={handleCaptcha} className='btn btn-outline bg-white my-3'>Validate captcha</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} type='submit' className="btn btn-primary" value='login' />
              </div>
            </form>
          </div>
          <Link to='/signup'> Not registered ? Please register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;