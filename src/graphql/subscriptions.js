/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOwner = /* GraphQL */ `
  subscription OnCreateOwner {
    onCreateOwner {
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
export const onUpdateOwner = /* GraphQL */ `
  subscription OnUpdateOwner {
    onUpdateOwner {
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
export const onDeleteOwner = /* GraphQL */ `
  subscription OnDeleteOwner {
    onDeleteOwner {
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
export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet {
    onCreatePet {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet {
    onUpdatePet {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet {
    onDeletePet {
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
export const onCreateVaccine = /* GraphQL */ `
  subscription OnCreateVaccine {
    onCreateVaccine {
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
export const onUpdateVaccine = /* GraphQL */ `
  subscription OnUpdateVaccine {
    onUpdateVaccine {
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
export const onDeleteVaccine = /* GraphQL */ `
  subscription OnDeleteVaccine {
    onDeleteVaccine {
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
