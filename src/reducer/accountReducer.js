const initialState = {
  accounts: [
    {
      account_type: "Savings",
      account_name: "Tei Mensah",
      account_number: "0544444003030",
      bank_name: "Ecobank",
      bank_branch: "Adenta",
      id: 1,
    },

    {
      account_type: "Savings",
      account_name: "Kwaku Nii",
      account_number: "2929393940333",
      bank_name: "Ecobank",
      bank_branch: "Tema",
      id: 2,
    },
  ],
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      return 0;
    case "DELETE_USER":
      let newUsers = state.accounts.filter(
        (account) => action.payload != account.id
      );
      return { accounts: newUsers };
    default:
      return state;
  }
};
