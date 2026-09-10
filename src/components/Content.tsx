import Button from "./Button";

const Content = () => {
  return (
    <div className="flex flex-col justify-between p-8 md:w-1/2 md:p-9">
      <p className="mb-6 font-montserrat text-xs uppercase tracking-[4px] text-grey md:mb-4 md:text-sm ">
        Perfume
      </p>
      <h1 className=" mb-6 font-fraunces text-3xl leading-8 text-black md:text-4xl md:leading-9 ">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p className="mb-4 font-montserrat text-sm text-grey md:text-base md:mb-6 ">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>

      <div className="flex flex-row items-center gap-4">
        <span className="font-fraunces text-green-500 text-[32px] ">
          $149.99
        </span>
        <span className="text-grey text-base line-through ">$169.99</span>
      </div>

      <Button />
    </div>
  );
};

export default Content;
