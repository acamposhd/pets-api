import { API, graphqlOperation } from "aws-amplify";
import { listOwners, getOwner } from "../graphql/queries";
import { createOwner, updateOwner, deleteOwner } from "../graphql/mutations";
import { onCreateOwner } from "../graphql/subscriptions";

const list = async () => {
  try {
    const owners = await API.graphql(graphqlOperation(listOwners));
    return owners.data.listOwners.items;
  } catch (error) {
    console.error(error);
  }
};

const getById = async (ownerId) => {
  try {
    const owner = await API.graphql(graphqlOperation(getOwner(ownerId)));
    return owner;
  } catch (error) {
    console.error(error);
  }
};

const create = async (owner) => {
  try {
    const newOwner = await API.graphql(
      graphqlOperation(createOwner, { input: owner })
    );
    return newOwner;
  } catch (error) {
    console.error(error);
  }
};
const update = async (ownerId, ownerName) => {
  try {
    const ownerUpdated = await API.graphql(
      graphqlOperation(updateOwner, { input: { id: ownerId, name: ownerName } })
    );
    return ownerUpdated;
  } catch (error) {
    console.error(error);
  }
};
const remove = async (ownerId) => {
  try {
    const deletedOwner = await API.graphql(
      graphqlOperation(deleteOwner, { input: { id: ownerId } })
    );
    return deletedOwner;
  } catch (error) {
    console.error(error);
  }
};

const onCreate = async (updateFunction) => {
  // Subscribe to creation of Todo
  const subscription = API.graphql(graphqlOperation(onCreateOwner)).subscribe({
    next: (todoData) => {
      console.log(todoData);
      updateFunction();
      // Do something with the data
    },
  });
  return subscription;
};

export { list, getById, create, update, remove, onCreate };
