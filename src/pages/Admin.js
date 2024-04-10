import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

import CreationCompte from "../components/CreationCompte.js";
import ListeUtilisateur from "../components/ListeUtilisateur.js";
import { getUtilisateur } from "../Redux/actions/getUtilisateur.action.js";
import { isEmpty } from "../Utils/Utils";
import store from "../Redux/store/store";

const Admin = () => {
  useEffect(() => {
    if (isEmpty(store.getState().getUtilisateur));
    store.dispatch(getUtilisateur());
  }, []);

  return (
    <>
      <div className="content">
        <Navbar />
        <div className="title">
          <h1>Administrateur</h1>
        </div>

        <div className="container-admin">
          <CreationCompte />
          <ListeUtilisateur />
        </div>
      </div>
    </>
  );
};

export default Admin;
