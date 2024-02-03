import React from "react";
import classes from "./paymentPage.module.css";
import Title from "../../components/Title/Title";

export default function PaymentPage() {
  return (
    <div className={classes.payment_container}>
      <Title title="Working on PaymentPage" margin="1.5rem 0 0 2.5rem" />
    </div>
  );
}
