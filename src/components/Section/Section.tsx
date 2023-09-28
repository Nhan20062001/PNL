import React from "react";
import "./style.scss";

type Props = {
  title: string;
  align: string;
  component?: React.ReactNode;
};

const Section = ({ title, align, component }: Props) => {
  return (
    <section className={`wrapper-section`}>
      {title ? (
        <h3 className={`wrapper-section-title title-${align}`}>{title}</h3>
      ) : (
        <h3>Loading</h3>
      )}
      {component ? component : ""}
    </section>
  );
};

export default Section;
