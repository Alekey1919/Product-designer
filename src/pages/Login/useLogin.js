import { useState } from "react";
import { auth } from "../../Firebase";
import { useHistory } from "react-router-dom";

const useLogin = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "guest@guest.com",
    password: "123guest",
  });
  const [recovery, setRecovery] = useState(false);

  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((auth) => {
        history.goBack();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleEmailInput = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handlePasswordInput = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      // It successfully created a new user with email and password
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const openChangePassword = () => {
    setRecovery(true);
  };

  const changePassword = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    console.log(email);
    auth
      .sendPasswordResetEmail(email)
      .then(() => alert("Recovery mail sent"))
      .catch((err) => alert(err.message));
  };

  const closeChangePassword = () => {
    setRecovery(false);
  };

  return {
    values,
    recovery,
    singIn,
    handleEmailInput,
    handlePasswordInput,
    register,
    openChangePassword,
    closeChangePassword,
    changePassword,
  };
};

export default useLogin;
