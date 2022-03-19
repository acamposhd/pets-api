import React, { useEffect, useState } from "react";
import { list, create, onCreate } from "../../services/owner";

export default function OwnerPage() {
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
    </>
  );
}
