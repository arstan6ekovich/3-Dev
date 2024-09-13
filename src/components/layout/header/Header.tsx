import scss from "./Header.module.scss";
import Link from "next/link";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import Image from "next/image";
import header from "../../../assets/Images/header-logo.svg";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.Header}>
          <Image width={50} height={50} src={header} alt="img" />
          <div className={scss.nav}>
            <Link href={"/"}>Trade In</Link>
            <Link href={"/"}>Велосипеды</Link>
            <Link href={"/"}>Запчасти</Link>
            <Link href={"/"}>Экипировка</Link>
            <Link href={"/"}>Аксессуары</Link>
            <Link href={"/"}>Велостанки</Link>
          </div>
          <div className={scss.header_buttons}>
            <button>
              <CiSearch />
            </button>
            <button>
              <CiUser />
            </button>
            <button>
              <CiHeart />
            </button>
            <button>
              <LuShoppingCart />
            </button>
          </div>
          <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
