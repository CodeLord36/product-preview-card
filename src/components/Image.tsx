import productMobile from "../assets/image-product-mobile.jpg";
import productDesktop from "../assets/image-product-mobile.jpg";

const Image = () => {
  return (
    <div>
      <picture className="block md:w-1/2">
        <source media="(max-width: 767px)" srcSet={productMobile} />
        <img
          src={productDesktop}
          alt="Product Image"
          className="h-full w-full object-cover "
        />
      </picture>
    </div>
  );
};

export default Image;
