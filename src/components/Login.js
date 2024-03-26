import React from "react";

const Login = () => {
  return (
    <>
      <form className="form-connection">
        <input type="text" name="name" placeholder="Nom" />
        <br />
        <input
          type="current-password"
          name="password"
          placeholder="Mot de passe"
        />
        <br />
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default Login;
