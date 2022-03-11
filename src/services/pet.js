import { API, graphqlOperation } from "aws-amplify";
import { listPets, getPet } from "../graphql/queries";

const list = async () => {
  try {
    const pets = await API.graphql(graphqlOperation(listPets));
    return pets.data.listPets.items;;
  } catch (error) {
    console.error(error);
  }
};

const getById = async (petId) => {
  try {
    const pet = await API.graphql(graphqlOperation(getPet(petId)));
    return pet;
  } catch (error) {
    console.error(error);
  }
};

const createPet = async (pet) => {
  try {
    const newPet = await API.graphql(
      graphqlOperation(createPet, { input: pet })
    );
    return newPet;
  } catch (error) {
    console.error(error);
  }
};
const updatePet = async (petId, petName) => {
  try {
    const petUpdated = await API.graphql(
      graphqlOperation(updatePet, {
        input: { id: petId, name: petName },
      })
    );
    return petUpdated;
  } catch (error) {
    console.error(error);
  }
};
const deletePet = async (petId) => {
  try {
    const deletedPet = await API.graphql(
      graphqlOperation(deletePet, { input: { id: petId } })
    );
    return deletedPet;
  } catch (error) {
    console.error(error);
  }
};

export { list, getById, createPet, updatePet, deletePet };
