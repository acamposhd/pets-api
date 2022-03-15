import { API, graphqlOperation } from "aws-amplify";
import { listRoutes, getRoute } from "../graphql/queries";
import { createRoute, updateRoute, deleteRoute } from "../graphql/mutations";
import { onCreateRoute } from "../graphql/subscriptions";

const list = async () => {
  try {
    const routes = await API.graphql(graphqlOperation(listRoutes));
    return routes.data.listRoutes.items;
  } catch (error) {
    console.error(error);
  }
};

const getById = async (routeId) => {
  try {
    const route = await API.graphql(graphqlOperation(getRoute(routeId)));
    return route;
  } catch (error) {
    console.error(error);
  }
};

const create = async (route) => {
  try {
    const newRoute = await API.graphql(
      graphqlOperation(createRoute, { input: route })
    );
    return newRoute;
  } catch (error) {
    console.error(error);
  }
};
const update = async (routeId, routeName, route = routeName.toLowerCase()) => {
  try {
    const routeUpdated = await API.graphql(
      graphqlOperation(updateRoute, {
        input: { id: routeId, name: routeName, route },
      })
    );
    return routeUpdated;
  } catch (error) {
    console.error(error);
  }
};
const remove = async (routeId) => {
  try {
    const deletedRoute = await API.graphql(
      graphqlOperation(deleteRoute, { input: { id: routeId } })
    );
    return deletedRoute;
  } catch (error) {
    console.error(error);
  }
};

const onCreate = async (updateFunction) => {
  // Subscribe to creation of Todo
  const subscription = API.graphql(graphqlOperation(onCreateRoute)).subscribe({
    next: (todoData) => {
      console.log(todoData);
      updateFunction();
      // Do something with the data
    },
  });
  return subscription;
};

export { list, getById, create, update, remove, onCreate };
