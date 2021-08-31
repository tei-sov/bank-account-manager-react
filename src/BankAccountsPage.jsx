import React from "react";
import BankAccounts from "./components/BankAccounts";
import { connect } from "react-redux";
import { deleteAccount } from "./action/action";

const BankAccountsPage = ({ state, deleteAccount }) => {
  return (
    <div>
      <BankAccounts accounts={state.accounts} deleteAccount={deleteAccount} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = { deleteAccount };

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountsPage);
