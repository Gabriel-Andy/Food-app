import React from "react";

export default function Step({ steps }) {
  const stepcooking = steps.map((step) => {
    return step;
  });
  return <div>{stepcooking}</div>;
}
