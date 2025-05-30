import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold m-8 text-center">Contact Us</h1>
      <div className="flex items-center justify-center gap-4 my-4">
        <div className="">
          <input
            type="text"
            placeholder="Success"
            className="input input-success"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Success"
            className="input input-success"
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <textarea
          placeholder="Success"
          className="textarea textarea-success"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactUs;
