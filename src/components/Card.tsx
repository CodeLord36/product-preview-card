import Content from "./Content";
import Image from "./Image";

const Card = () => {
  return (
    <article className="w-full max-w-2xl flex flex-col overflow-hidden rounded-xl bg-white md:flex-row md:mb-10 md:mt-28 ">
      {/* Product Image */}
      <Image />

      {/* Product Information */}
      <Content />
    </article>
  );
};

export default Card;
