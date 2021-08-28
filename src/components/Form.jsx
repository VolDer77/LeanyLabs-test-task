import React, { useState } from "react";
import MaskedInput from "react-text-mask";

export const Form = ({ getGeolocation }) => {
  const [value, setValue] = useState("");

  const inputValidationProps = {
    guide: false,
    placeholderChar: "\u2000",
    mask: (value) => Array(value.length).fill(/[\d.]/),
    pipe: (value) => {
      if (value === "." || value.endsWith("..")) return false;

      const parts = value.split(".");

      if (
        parts.length > 4 ||
        parts.some((part) => part === "00" || part < 0 || part > 255)
      ) {
        return false;
      }

      return value;
    },
  };

  const searchLocation = () => {
    getGeolocation(value);
  };

  return (
    <section className="section-form">
      <MaskedInput
        {...inputValidationProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="section-form__input"
        placeholder="8 . 8 . 8 . 8"
      />
      <button className="section-form__btn" onClick={searchLocation}>
        Search
      </button>
    </section>
  );
};
