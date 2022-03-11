import { API, graphqlOperation } from "aws-amplify";
import { listVaccines, getVaccine } from "../graphql/queries";

const list = async () => {
  try {
    const vaccines = await API.graphql(graphqlOperation(listVaccines));
    return vaccines.data.listVaccines.items;
  } catch (error) {
    console.error(error);
  }
};

const getById = async (vaccineId) => {
  try {
    const vaccine = await API.graphql(graphqlOperation(getVaccine(vaccineId)));
    return vaccine;
  } catch (error) {
    console.error(error);
  }
};

const createVaccine = async (vaccine) => {
  try {
    const newVaccine = await API.graphql(
      graphqlOperation(createVaccine, { input: vaccine })
    );
    return newVaccine;
  } catch (error) {
    console.error(error);
  }
};
const updateVaccine = async (vaccineId, vaccineName) => {
  try {
    const vaccineUpdated = await API.graphql(
      graphqlOperation(updateVaccine, {
        input: { id: vaccineId, name: vaccineName },
      })
    );
    return vaccineUpdated;
  } catch (error) {
    console.error(error);
  }
};
const deleteVaccine = async (vaccineId) => {
  try {
    const deletedVaccine = await API.graphql(
      graphqlOperation(deleteVaccine, { input: { id: vaccineId } })
    );
    return deletedVaccine;
  } catch (error) {
    console.error(error);
  }
};

export { list, getById, createVaccine, updateVaccine, deleteVaccine };
