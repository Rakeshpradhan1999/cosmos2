import "./style.css";

const Index = ({ children, color, responsive = false, disabled, ...props }) => {
  return (
    <>
      {disabled ? (
        <button
          style={{ backgroundColor: "gray" }}
          className=" text-white button transition-all radius rounded py-1.5 px-6 text-sm md:py-2 md:px-10 md:text-md pointer-events-none"
        >
          {children}
        </button>
      ) : (
        <button
          {...props}
          className={`button transition-all radius uppercase
      ${
        color === "primary" ? "bg-primary text-white" : "bg-violet text-white"
      } rounded py-1.5 px-6 text-sm md:py-2 md:px-10 md:text-md ${
            responsive ? "hidden lg:block" : null
          }`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Index;
