import React from "react";
import loginImg from "../assets/Images/login.webp";
import Template from "../components/core/auth/template";
import Footer from "../components/common/footer";

const login = () => {
  return (
    <>
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        image={loginImg}
        formType="login"
      />
      <Footer />
    </>
  );
};
export default login;
