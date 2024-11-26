// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, bgOutlines, close, magic } from "../assets";
// import { Link as LinkScroll } from "react-scroll";
// import clsx from "clsx";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 32);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const NavLink = ({ title }: { title: string }) => (
//     <LinkScroll
//       onClick={() => setIsOpen(false)}
//       to={`#${title.toLowerCase()}`}
//       spy
//       smooth
//       activeClass="nav-active"
//       className="transition-colors duration-500 cursor-pointer hover:text-p2 max-sm:my-4 max-sm:h5"
//     >
//       {title}
//     </LinkScroll>
//   );
//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
//     >
//       <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
//         <Link
//           to={"/"}
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="object-contain w-9 h-9 " />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex">
//             Abdullah &nbsp; <span className="hidden sm:block">| Al Zahabi</span>
//           </p>
//         </Link>
//         <ul className="flex-row hidden gap-10 list-none sm:flex">
//           {navLinks.length > 0 &&
//             navLinks.map((link) => (
//               <li
//                 key={link.id}
//                 className={`hover:text-white text-base font-medium cursor-pointer`}
//               >
//                 <NavLink title={link.title}></NavLink>
//               </li>
//             ))}
//         </ul>
//         <div
//           className={clsx(
//             "w-full max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:bg-black-100 max-sm:opacity-0",
//             isOpen
//               ? "max-sm:opacity-100 block"
//               : "max-sm:pointer-events-none hidden"
//           )}
//         >
//           <div className="max-sm:relative max-sm:flex max-sm:flex-col max-sm:min-h-screen max-sm:p-6 max-sm:overflow-hidden sidebar-before max-md:px-4">
//             <nav className="max-sm:relative max-sm:z-2 max-sm:my-auto">
//               <ul className="flex max-sm:block max-sm:px-12">
//                 <li className="nav-li">
//                   <NavLink title="features" />
//                   <div className="dot" />
//                   <NavLink title="pricing" />
//                 </li>

//                 <li className="nav-logo">
//                   <LinkScroll
//                     to=""
//                     spy
//                     smooth
//                     className={clsx(
//                       "max-sm:hidden transition-transform duration-500 cursor-pointer"
//                     )}
//                   >
//                     <img src={logo} width={160} height={55} alt="logo" />
//                   </LinkScroll>
//                 </li>

//                 <li className="nav-li">
//                   <NavLink title="faq" />
//                   <div className="dot" />
//                   <NavLink title="download" />
//                 </li>
//               </ul>
//             </nav>

//             <div className="sm:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
//               <img
//                 src={bgOutlines}
//                 width={960}
//                 height={380}
//                 alt="outline"
//                 className="relative z-2"
//               />
//               <img
//                 src={bgOutlines}
//                 width={960}
//                 height={380}
//                 alt="outline"
//                 className="absolute inset-0 mix-blend-soft-light opacity-5"
//               />
//             </div>
//           </div>
//         </div>

//         <button
//           className="z-10 flex items-center justify-center border-2 rounded-full sm:hidden size-10 border-secondary"
//           onClick={() => setIsOpen((prevState) => !prevState)}
//         >
//           <img
//             src={`${isOpen ? close : magic}`}
//             alt="magic"
//             className="object-contain size-1/2"
//           />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
