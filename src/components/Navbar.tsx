import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="flex justify-between items-center sm:w-2/5 w-4/5">
        {/*start*/}
        <p>Romain Bidault</p>
        {/*middle*/}
        <div></div>
        {/*end*/}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
