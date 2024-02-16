const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button onClick={()=>{window.open("https://www.google.com/maps/place/Malla+Reddy+University/@17.5624532,78.4438708,3a,75y,320h,110t/data=!3m8!1e1!3m6!1sAF1QipNNotYprwQQixXw7iXP35RaueJk8yFpjm862fc4!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNNotYprwQQixXw7iXP35RaueJk8yFpjm862fc4%3Dw224-h298-k-no-pi-20-ya298-ro-0-fo100!7i6720!8i3360!4m9!3m8!1s0x3bcb8ff8652b6823:0x981713dbb4b708c3!8m2!3d17.5625608!4d78.443864!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F11jh8v1fgp?entry=ttu")}}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-purple-900 text-white border-purple-900"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
