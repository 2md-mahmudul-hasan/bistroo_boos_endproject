

import { useForm } from "react-hook-form"
import React, { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const { user,
    createUser,
    signIn,
    logOut,
    loading } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user.email)
      })
  }

  // const handleSignUp = (e) => {
  //   e.preventDefault()
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password)

  // }


  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex lg:flex-row-reverse">
        <div className="text-center w-[500px] md:text-left lg:text-left">
          <h1 className="text-5xl text-center mb-6 font-bold"> Sign up </h1>

          <div className="card flex  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" defaultValue="mahmudul hasan" {...register("name", { required: true })} />    </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" defaultValue="1@gamil.com" {...register("email", { required: true })} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", { required: true })} className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input type='submit' className="btn btn-primary" value='sign up' />
              </div>
            </form>
          </div>
          <Link to='/login'> already registered ? Please login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;