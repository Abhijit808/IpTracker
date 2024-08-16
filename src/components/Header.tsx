const Header = ({
  input,
  setInput,
  arrow,
  handlelocationClick,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  arrow: string;
  handlelocationClick: () => void;
}) => {
  return (
    <header className="bg-pattern-desktop bg-no-repeat bg-cover flex flex-col items-center justify-center p-6 h-[30vh]">
      <h1 className="capitalize ">ip address tracker</h1>
      <div className="input p-2 relative  w-[70vw] md:w-[50vw]">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          className="p-2 rounded-md w-full  placeholder:text-slate-400 placeholder:text-[13px] "
          placeholder="Search for any ip address or domain"
        />
        <button
          className="bg-black text-white  rounded-r-md p-2 flex items-center justify-center absolute sm:left-[90%] md:left-[80%] right-2 top-2 bottom-2 "
          onClick={handlelocationClick}
        >
          <img src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="locator bg-white">
        <div className="ipaddress"></div>
        <div className="location"></div>
        <div className="timezone"></div>
        <div className="isp"></div>
      </div>
    </header>
  );
};

export default Header;
