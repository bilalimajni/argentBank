import React from "react";
import "./acountList.css";

const AcountWapper = () => {
  const features = [
    {
      accountTitle: "Argent Bank Checking (x8349)",
      accountAmount: "$2,082.79",
      accountAmountDescription: "Available Balance",
    },
    {
      accountTitle: "Argent Bank Savings (x6712)",
      accountAmount: "$10,928.42",
      accountAmountDescription: "Available Balance",
    },
    {
      accountTitle: "Argent Bank Credit Card (x8349)",
      accountAmount: "$184.30",
      accountAmountDescription: "Current Balance",
    },
  ];

  return (
    <>
      {features.map((account, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.accountTitle}</h3>
            <p className="account-amount">{account.accountAmount}</p>
            <p className="account-amount-description">
              {account.accountAmountDescription}
            </p>
            <div></div>
          </div>
          <div className='class="account-content-wrapper cta"'>
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
};

export default AcountWapper;
