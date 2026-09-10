import Image from "./Image";

const Card = () => {
  return (
    <article className="w-full max-w-2xl flex flex-col overflow-hidden rounded-xl bg-whie md:flex-row ">
      {/* Product Image */}
      <Image />

      {/* Product Information */}
    </article>
  );
};

export default Card;
