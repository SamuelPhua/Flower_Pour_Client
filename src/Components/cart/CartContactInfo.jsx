import React from "react";

const CartContactInfo = () => {
  return (
    <div className=" text-darkBlueFont text-montserrat mb-10">
      <h1 className="tracking-widest text-3xl">Contact Information</h1>
      <div className="flex flex-col">
        <input
          type="tel"
          id="custPhone"
          name="custPhone"
          placeholder="Your Phone Number"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>
        <input
          type="email"
          id="custEmail"
          name="custEmail"
          placeholder="Your Email Address"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>
        <div className="flex flex-row mt-5">
          <input
            type="checkbox"
            id="subscription"
            name="subscription"
            className="mr-2"
          ></input>
          <label
            htmlFor="subscription"
            className="text-lightGrey/[0.75] text-xxxs"
          >
            Email me with news and offer.
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartContactInfo;
