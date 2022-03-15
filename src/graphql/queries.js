/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOwner = /* GraphQL */ `
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
      id
      name
      pets {
        items {
          id
          name
          createdAt
          updatedAt
          ownerPetsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOwners = /* GraphQL */ `
  query ListOwners(
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      name
      owner {
        id
        name
        pets {
          nextToken
        }
        createdAt
        updatedAt
      }
      vaccines {
        items {
          id
          name
          createdAt
          updatedAt
          petVaccinesId
        }
        nextToken
      }
      createdAt
      updatedAt
      ownerPetsId
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        vaccines {
          nextToken
        }
        createdAt
        updatedAt
        ownerPetsId
      }
      nextToken
    }
  }
`;
export const getVaccine = /* GraphQL */ `
  query GetVaccine($id: ID!) {
    getVaccine(id: $id) {
      id
      pet {
        id
        name
        owner {
          id
          name
          createdAt
          updatedAt
        }
        vaccines {
          nextToken
        }
        createdAt
        updatedAt
        ownerPetsId
      }
      name
      createdAt
      updatedAt
      petVaccinesId
    }
  }
`;
export const listVaccines = /* GraphQL */ `
  query ListVaccines(
    $filter: ModelVaccineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVaccines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pet {
          id
          name
          createdAt
          updatedAt
          ownerPetsId
        }
        name
        createdAt
        updatedAt
        petVaccinesId
      }
      nextToken
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      id
      route
      name
      createdAt
      updatedAt
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        route
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
