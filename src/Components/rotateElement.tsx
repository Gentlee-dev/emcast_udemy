// import { useState, useEffect } from "react";

export interface RotateElementT {
  svg: React.ReactNode;
  isRotate: boolean;
}

const RotateElement = ({ svg, isRotate }: RotateElementT) => {
  return (
    // <div className={`transition03s ${isRotate && "rotate-90"}`}>{svg}</div>
    <div className={`rotate-90`}>{svg}</div>
  );
};

export default RotateElement;
