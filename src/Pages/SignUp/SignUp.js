import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('')
    // required study from stackoverflow regrding regex(regular expressions)
    // https://stackoverflow.com/questions/5142103/regex-to-validate-password-strength

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);

    if(token){
        navigate('/')
    }

    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // navigate('/')
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)

            })
    }



    return (
        <div className='text-3xl flex justify-center items-center h-[800px]'>
            <div >
                <p>SignUp</p>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name is required'
                        }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p role='alert' className='text-red-500'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true,

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role='alert' className='text-red-500s'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="passwords"
                            {...register("password", {
                                required: "Password is required",

                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have an upper case,a special charecter and a number" }
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message} </p>}

                    </div>




                    <input type="submit" className='btn btn-accent w-full mt-5' value='SignUp' />
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
                <div>
                    <label className="label">
                        <span className="label-text"> <p>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p></span>
                    </label>
                    <div className='text-center my-4'>

                        <p>OR</p>
                    </div>
                    <button type="" className='btn btn-accent w-full'>Continue With Google</button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;