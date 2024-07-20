import React from "react";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import classes from "./checkoutPage.module.css";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";
export default function CheckoutPage() {
  const { cart } = useCart();
  const { user } = useAuth();

  const [order, setOrder] = useState({ ...cart });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async (data) => {
    if (!order.addressLatLng) {
      toast.warning("Please select your location on the map");
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={classes.container}>
        <div className={classes.p_container}>
          <div className={classes.content}>
            <Title title="User" fontSize="1.6rem" />
            <div className={classes.inputs}>
              <Input
                defaultValue={user.name}
                label="Name"
                {...register("name")}
                error={errors.name}
              />
              <Input
                defaultValue={user.address}
                label="Address"
                {...register("address")}
                error={errors.address}
              />
            </div>
            <OrderItemsList order={order} />
          </div>

          <div className={classes.parent_right}>
            <div className={classes.location}>
              <Title title="Choose Delivery Location" fontSize="1.6rem" />
              <Map
                location={order.addressLatLng}
                onChange={(latlng) => {
                  console.log(latlng);
                  setOrder({ ...order, addressLatLng: latlng });
                }}
              />

              <div className={classes.buttons}>
                <Link to="/payment">
                  <Button
                    type="submit"
                    text="Complete Your Payment"
                    width="100%"
                    height="3rem"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
