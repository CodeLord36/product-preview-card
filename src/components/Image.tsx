import productMobile from "../assets/image-product-mobile.jpg";
import productDesktop from "../assets/image-product-desktop.jpg";

const Image = () => {
  return (
    <picture className="block md:w-1/2 md:h-full ">
      <source media="(max-width: 767px)" srcSet={productMobile} />
      <img
        src={productDesktop}
        alt="Product Image"
        className="h-full w-full object-cover "
      />
    </picture>
  );
};

export default Image;
