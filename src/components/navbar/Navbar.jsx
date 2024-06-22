import logo from "@/assets/images/logo.png";
import shop from "@/assets/images/nav-items/shop.svg";
import fav from "@/assets/images/nav-items/fav.svg";
import category from "@/assets/images/nav-items/category.svg";
import cart from "@/assets/images/nav-items/cart.svg";
import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const Navbar = () => {
  const itemCount = useCartStore((state) => state.itemCount);
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
          <NavLink>
            <button className="bg-white text-primary py-[10px] px-[15px] rounded-[50px]">
              Sign In
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
