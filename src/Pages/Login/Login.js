import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  if (token) {
    navigate(from, { replace: true })
  }

  const handleLogin = data => {
    // console.log(data)
    setLoginError('')
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setLoginUserEmail(data.email)

      })
      .catch(error => {
        console.error(error.message)
        setLoginError(error.message)
      })

  }


  return (
    <div className='text-3xl flex justify-center items-center h-[800px]'>
      <div >
        <p>Login</p>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email", {
              required: 'Email address is required'
            })} className="input input-bordered w-full max-w-xs" />
            {errors.email && <p role='alert'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="passwords"  {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: 'Password must be 6 characters' }
            })} className="input input-bordered w-full max-w-xs" />
            {errors.password && <p role='alert'>{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forgot password?</span>
            </label>
          </div>




          <input type="submit" className='btn btn-accent w-full mt-5' value='Login' />
          <div>
            {loginError && <p>{loginError}</p>}
          </div>
        </form>
        <div>
          <label className="label">
            <span className="label-text"> <p>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create an account</Link></p></span>
          </label>
          <button type="" className='btn btn-accent w-full'>Continue With Google</button>
        </div>
      </div>

    </div>
  );
};

export default Login;