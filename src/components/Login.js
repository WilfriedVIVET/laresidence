import React from "react";

const Login = () => {
  return (
    <>
      <form>
        <input type="text" name="name" placeholder="Votre nom" />
        <br />
        <input
          type="current-password"
          name="password"
          placeholder="Votre Mot de passe"
        />
        <br />
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default Login;
