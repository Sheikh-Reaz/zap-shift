import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Register = () => {

  const {registerUser} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    registerUser(data.email,data.password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error) 
    })
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && <p className="text-red-600">Email is required</p>}
          {/*password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
             })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && <p className="text-red-600" >Password is required</p>}
          {errors.password?.type === "minLength" && <p className="text-red-600">Password must me 6 character</p>}
          {errors.password?.type === "pattern" && <p className="text-red-600">Password must contain at least one uppercase one lowercase one number and one special character </p> }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
