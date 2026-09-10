import cart from "../assets/icon-cart.svg";

const Button = () => {
  return (
    <button className="bg-green-500 flex flex-row border-none text-white mt-6 w-full items-center justify-center gap-3 rounded-lg px-6 py-4 font-montserrat font-bold transition hover:bg-green-700 hover:cursor-pointer ">
      <img className="w-4" src={cart} alt="cart-svg" />
      Add to Cart
    </button>
  );
};

export default Button;
