export function removeUsers(name) {
    return {
      type: "REMOVE_USERS",
      payload: name,
    };
  }
  