import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Cardskeleton = ({ cards }) => {
  console.log(cards);

  return (
    <>
      <div className="flex overflow-hidden ">
        {Array(cards)
          .fill(0)
          .map(() => (
            <div className="min-w-[340px] mr-3">
              <Skeleton
                height={400}
                width={340}
                style={{ backgroundColor: "#D0D0D0", marginRight: "10px" }}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default Cardskeleton;
