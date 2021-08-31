export const deleteAccount = (accountId) => {
  return {
    type: "DELETE_USER",
    payload: accountId,
  };
};

export const editAccount = (editedAccount) => {
  return {
    type: "EDIT_USER",
    payload: editedAccount,
  };
};
