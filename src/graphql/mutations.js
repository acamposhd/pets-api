/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOwner = /* GraphQL */ `
  mutation CreateOwner(
    $input: CreateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    createOwner(input: $input, condition: $condition) {
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
export const updateOwner = /* GraphQL */ `
  mutation UpdateOwner(
    $input: UpdateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    updateOwner(input: $input, condition: $condition) {
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
export const deleteOwner = /* GraphQL */ `
  mutation DeleteOwner(
    $input: DeleteOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    deleteOwner(input: $input, condition: $condition) {
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
export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
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
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
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
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
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
export const createVaccine = /* GraphQL */ `
  mutation CreateVaccine(
    $input: CreateVaccineInput!
    $condition: ModelVaccineConditionInput
  ) {
    createVaccine(input: $input, condition: $condition) {
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
export const updateVaccine = /* GraphQL */ `
  mutation UpdateVaccine(
    $input: UpdateVaccineInput!
    $condition: ModelVaccineConditionInput
  ) {
    updateVaccine(input: $input, condition: $condition) {
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
export const deleteVaccine = /* GraphQL */ `
  mutation DeleteVaccine(
    $input: DeleteVaccineInput!
    $condition: ModelVaccineConditionInput
  ) {
    deleteVaccine(input: $input, condition: $condition) {
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
