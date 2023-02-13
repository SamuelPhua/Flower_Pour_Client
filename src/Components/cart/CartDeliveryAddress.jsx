import React from "react";

const CartDeliveryAddress = () => {
  return (
    <div className=" text-darkBlueFont text-montserrat mb-10">
      <h1 className="tracking-widest text-2xl">Delivery Address</h1>
      <div className="flex flex-col">
        <select
          type="deliveryCountry"
          id="deliveryCountry"
          name="deliveryCountry"
          placeholder="Singapore"
          disabled
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-xxxs text-lightGrey/[0.75] placeholder:text-xxxs"
        >
          <option value="sg">Singapore</option>
        </select>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            id="custFirstName"
            name="custFirstName"
            placeholder="First Name"
            className="basis-1/2 mr-2 border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
          ></input>
          <input
            type="text"
            id="custLastName"
            name="custLastName"
            placeholder="LastName"
            className="basis-1/2 ml-2 border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
          ></input>
        </div>

        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          placeholder="Address"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>
        <input
          type="text"
          id="deliveryApartment"
          name="deliveryApartment"
          placeholder="Apartment, Suite, etc. (Optional)"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>
        <input
          type="text"
          id="deliveryPostal"
          name="deliveryPostal"
          placeholder="Postal Code"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>
      </div>
      <p className="text-lightGrey/[0.75] text-smallNote mt-8">
        To make payment, you will be redirected to HitPay Payment Gateway to
        complete your purchase securely to Flour Power under our Registered
        Business Name "Seeteey Pte Ltd".
      </p>
    </div>
  );
};

export default CartDeliveryAddress;