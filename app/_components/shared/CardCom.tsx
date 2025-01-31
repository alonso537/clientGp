import React from "react";

interface CardComProps {
  span?: string;
  rowSpan?: string;
  bgCard?: string;
  content?: any;
}

const CardCom = ({
  span = "md:col-span-3",
  rowSpan = "row-span-6",
  bgCard = "bg-gray-200",
  content,
}: CardComProps) => {
  return (
    <div className={`${span} ${rowSpan}  rounded-xl  shadow-md`}>
      {content && content}
    </div>
  );
};

export default CardCom;
