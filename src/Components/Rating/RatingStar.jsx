import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CustomStar = (
  <path d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
);

const myStyles = {
  itemShapes: CustomStar,
  itemStrokeWidth: 1,
  activeFillColor: "#002B56",
  activeStrokeColor: "#002B56",
  inactiveStrokeColor: "#002B56",
};

export default function RatingStar({ value, className, showValue }) {
  return (
    <div className={className ? className : "flex gap-2 w-[100px]"}>
      <Rating readOnly value={value} itemStyles={myStyles} />
      {showValue ? <p>{value}</p> : null}
    </div>
  );
}
