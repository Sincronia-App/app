import React from "react";
import { FiMusic } from "react-icons/fi";
import {StatusBanner as Banner} from "./index";

const StatusBanner = (props) => {
  return (
    <Banner>
      <p>
        <FiMusic />
        Título:
        {props.children}
      </p>
    </Banner>
  );
};

export default StatusBanner;
