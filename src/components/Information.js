import React from "react";

const Information = () => {
  return (
    <>
      <form>
        <input type="text" name="name" placeholder="Votre nom" />
        <br />
        <input
          type="current-password"
          name="password"
          placeholder=" Mot de passe"
        />
        <br />
        <input
          type="current-password"
          name="confirm-password"
          placeholder=" Confirmez"
        />
        <br />
        <input
          type="number"
          name="appartement"
          placeholder="Numero appartement"
        />
        <br />
        <button type="submit">Demande d'accés</button>
      </form>
    </>
  );
};

export default Information;
