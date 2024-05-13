import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";


const ForgotPassword = () => {
  const [emailSent, setEmailSent ] = useState(false);
  const [ email, setEmail ] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


   const handleOnSubmit = (e) =>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));

   }

  return (
    <div className="text-white flex items-center justify-center">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>
            {
                !emailSent ? "Reset your Password" : " Check Your Email"
            }
            </h1>
            <p>
                {
                    !emailSent ? "Lorem ipsum " : `lorem ipsum ${email}` 
                }
            </p>
            <form onSubmit={handleOnSubmit}>
                {
                    !emailSent && (
                    <label>
                        <p>Email Address*</p>
                        <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        />
                    </label>
                    )
                }
                <button type="submit">
                    {
                        !emailSent ? "Reset Password" : "Reset email"
                    }
                </button>
            </form>
            <div>
                <Link to="/login">
                <p>Back to login</p></Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
