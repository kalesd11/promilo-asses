import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import CryptoJS, { SHA256 } from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../State/actions";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [access_token, setaccess_token] = useState("");

  const { handleSubmit, formState, register, getValues, control } = useForm();
  const { errors } = formState;
  let pass = useWatch({ control, name: "password", defaultValue: "" });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.loginData);

  const onSubmit = (formData) => {
    // Hash the password using SHA-256
    const hashedPassword = SHA256(formData.password).toString(CryptoJS.enc.Hex);
    // Create FormData object
    const requestObject = new FormData();
    requestObject.append("username", formData.username);
    requestObject.append("password", hashedPassword);
    requestObject.append("grant_type", "password");

    // Dispatch the action with FormData
    dispatch(fetchData(requestObject));
  };

  // console.log(data)

  useEffect(() => {
    try {
      setaccess_token(data.response.access_token);
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  
  useEffect(() => {
    if (access_token) {
      navigate("/products");
    }
  }, [access_token]);  

  return (
    <div className="container my-5 login">
     
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header">
              <h3 className="card-title text-center text-primary">
                <b>Login to Continue...</b>
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
                <div className="mb-1 mt-3">
                  <label htmlFor="username" className="form-label text-primary">
                    <b>Username :</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    {...register("username", {
                      required: "Username is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.username && (
                  <p className="text-danger mb-2 mt-0 mx-1 font-monospace">
                    {errors.username.message}
                  </p>
                )}
                <div className="mb-1 mt-3">
                  <label htmlFor="password" className="form-label text-primary">
                    <b>Password :</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]+$/,
                        message: "Enter password in suggested pattern",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger mb-2 mt-0 mx-1 font-monospace">
                      {errors.password.message}
                    </p>
                  )}
                  <ul className="mt-3">
                    <li hidden={pass.length >= 8} className="text-warning">
                      Password should be of 8 or more Characters.
                    </li>
                    <li hidden={/[A-Z]/.test(pass)} className="text-warning">
                      Password should contain atleast one UpperCase Letter.
                    </li>
                    <li hidden={/[a-z]/.test(pass)} className="text-warning">
                      Password should contain atleast one Lowercase Letter.
                    </li>
                    <li hidden={/[0-9]/.test(pass)} className="text-warning">
                      Password should contain atleast one Number.
                    </li>
                    <li
                      hidden={/[!@#$%&*:+=]/.test(pass)}
                      className="text-warning"
                    >
                      Password should contain atleast one Symbol (!@#$%&*:+=).
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="text-center mt-3 card-footer">
              <button
                type="submit"
                className="btn btn-primary text-white fw-bold"
                form="loginForm"
              >
                Login
                {loading && (
                  <div className="spinner-border spinner-border-sm mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
              {error && <p className="text-danger">Error: {error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
