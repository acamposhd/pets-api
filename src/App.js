import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import { list, create, onCreate } from "./services/owner";
import Nav from "./components/Navbar";
import MainLayout from "./layouts/Main";

Amplify.configure(config);

function App({ signOut, user }) {
  const [owner, setOwner] = useState({});
  const [owners, setOwners] = useState([]);

  async function listOwners() {
    const owners = await list();
    if (owners) setOwners(owners);
  }

  async function addOwner() {
    const ownerCreated = await create(owner);
    return ownerCreated;
  }

  function onSubmit(e) {
    e.preventDefault();
    addOwner(owner);
  }

  useEffect(() => {
    listOwners();
    let subscription;
    (async function suscribe() {
      subscription = await onCreate(listOwners);
    })();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <Nav />
      <MainLayout title={"Dashboard"}>
        <h4>Hello {user.username}</h4>
        <button onClick={signOut}>Sign out</button>

        <form name="createOwner" onSubmit={onSubmit}>
          <h1 className="text-3xl font-bold underline">Create new owner</h1>
          <input
            type="text"
            placeholder="Add a new owner name"
            onChange={(e) => setOwner({ name: e.target.value })}
          ></input>
          <button type="submit">Crear</button>
        </form>

        <h2>Owners list</h2>
        {owners &&
          owners.map((owner) => <p key={owner.id}>{`name: ${owner.name}`}</p>)}
      </MainLayout>
    </>
  );
}

export default withAuthenticator(App);
