import { ModeToggle } from "./toggle-theme";

const Navbar = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="flex justify-between items-center w-9/12">
        {/*start*/}
        <div>Romain Bidault</div>
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
