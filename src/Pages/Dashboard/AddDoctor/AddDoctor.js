import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/loading/Loading';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_api_key;
    // console.log(imageHostKey)
const navigate= useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddDoctor = data => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor= {
                        name: data.name, 
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    } 
                    fetch('http://localhost:5000/doctors',{
                        method:'POST',
                        headers:{ 
                            'content-type':'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res=>res.json())
                    .then(result=>{
                        // console.log(result)
                        toast.success(`${data.name} is added successfully as our doctor`)
                   navigate('/dashboard/managedoctors')
                    })
                }
            // console.log(imgData)
            })
        // console.log(img)
    }

    return (
        <div className='w-96 p-7'>
            <p className='text-3xl'>Add A Doctor</p>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty', { required: true })} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please select a specialty</option>
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>

                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: 'Photo is required'
                    }
                    )} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p role='alert' className='text-red-500'>{errors.image?.message}</p>}
                </div>




                <input type="submit" className='btn btn-accent w-full mt-5' value='Add Doctor' />

            </form>
        </div>
    );
};

export default AddDoctor;