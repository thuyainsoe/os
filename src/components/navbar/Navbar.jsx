import logo from "@/assets/images/logo.png";
import shop from "@/assets/images/nav-items/shop.svg";
import fav from "@/assets/images/nav-items/fav.svg";
import category from "@/assets/images/nav-items/category.svg";
import cart from "@/assets/images/nav-items/cart.svg";
import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { useLoginStore } from "@/store/loginStore";
import LoginInputDialog from "@/components/login-input-dialog/LoginInputDialog";
import userLogo from "@/assets/images/common-icons/user-logo.svg";
import downIcon from "@/assets/images/common-icons/down-tiny-icon-white.svg";

const Navbar = () => {
  const itemCount = useCartStore((state) => state.itemCount);
  const setOpen = useLoginStore((state) => state.setOpen);
  const isOpen = useLoginStore((state) => state.isOpen);
  const username = useLoginStore((state) => state.username);
  const successSignIn = useLoginStore((state) => state.successSignIn);
  return (
    <div className="bg-primary w-full sticky top-0 z-[100] h-[78px]">
      <div className=" container-md  py-[15px] text-white flex justify-between">
        {/* Site Logo */}
        <Link to="/" className="flex gap-[6px] items-center">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
          <div>
            <h3 className="text-[14px] font-[500] leading-[16px]">
              OnlineShopMM
            </h3>
            <p className="text-[12px] font-[300]">Shop with Us</p>
          </div>
        </Link>

        {/* Nav Items */}
        <ul className="flex items-center gap-[10px] text-[14px]">
          <NavLink
            to="/shops"
            className="flex items-center py-[10px] px-[15px] gap-[5px]"
          >
            <img src={shop} alt="shop logo" />
            Shops
          </NavLink>
          <NavLink
            to="/categories"
            className="flex items-center py-[10px] px-[15px] gap-[5px]"
          >
            <img src={category} alt="categories logo" />
            Categories
          </NavLink>
          <NavLink className="flex items-center py-[10px] px-[15px] gap-[5px]">
            <img src={fav} alt="favourite logo" />
            Favorites
          </NavLink>
          <NavLink
            to="/cart"
            className="flex items-center py-[10px] px-[15px] gap-[5px]"
          >
            <img src={cart} alt="cart logo" />
            Carts({itemCount})
          </NavLink>

          {successSignIn ? (
            <button
              className="w-fit py-[10px] px-[15px] h-[36px] border border-white rounded-[50px]
            gap-[5px] flex items-center justify-center"
            >
              <img src={userLogo} alt="" />
              <span>{username.split(" ")[0]}</span>
              <img src={downIcon} alt="" />
            </button>
          ) : (
            <button
              className="bg-white text-primary py-[10px] px-[15px] rounded-[50px]"
              onClick={() => {
                setOpen();
              }}
            >
              Sign In
            </button>
          )}

          {isOpen && <LoginInputDialog />}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
