import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRole } from "../Redux/actions/getRole.action";

const Login = () => {
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    name: "",
    password: "",
  });
  const handleChangeName = (e) => {
    setAccount((prevAccount) => ({
      ...prevAccount,
      name: e.target.value,
    }));
  };

  const handleChangePassword = (e) => {
    setAccount((prevAccount) => ({
      ...prevAccount,
      password: e.target.value,
    }));
  };

  //se connecter, en fonction du compte changer la valeur et le nom dans la navbar
  const checkAccount = (e) => {
    dispatch(getRole(account));
    e.preventDefault();
  };

  return (
    <>
      <form className="form-connection">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          onChange={handleChangeName}
        />
        <br />
        <input
          type="current-password"
          name="password"
          onChange={handleChangePassword}
          placeholder="Mot de passe"
        />
        <br />
        <button type="" onClick={checkAccount}>
          Connexion
        </button>
      </form>
    </>
  );
};

export default Login;
