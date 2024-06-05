// import React from 'react'
// import { Link,useNavigate } from 'react-router-dom'

// const Nav=()=>{
//     const auth=localStorage.getItem('user')
//     const navigate=useNavigate()

//     const logout=()=>{

//         localStorage.clear()
//         navigate('/signup')

//     }

//     return(
//         <div>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             <img 
//             src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg" 
//             alt="logo" 
//             class='logo'/>
//             {auth ? <ul class="nav-ul">
       

//                 <li><i class="fa fa-home"/> <Link to ="/">Home</Link></li>
//                 <li><i class="fa fa-plus-circle"/> <Link to ="/add">Add Product</Link></li>
//                 <li><i class="fa fa-external-link-square"/> <Link to ="/update">Update Product</Link></li>
//                 <li><i class="fa fa-calendar-minus-o"/> <Link to ="/taskassign">Task Assigned</Link></li>
//                 <li><i class="fa fa-circle-o-notch"/> <Link to ="/capstone">Capstone Details</Link></li>
//                 <li><i class="fa fa-question-circle"/> <Link to ="/addqueries">Queries</Link></li>
//                 <li><i class="fa fa-handshake-o"/> <Link to ="/requirement">Requirement</Link></li>
//                 <li><i class="fa fa-book"/> <Link to ="/applications">Applications</Link></li>
//                 <li><i class="fa fa-id-badge"/> <Link to ="/interviewtasks">Interview Tasks</Link></li>
//                 <li><i class="fa fa-id-card"/> <Link to ="/leaveapplications">Leave Applications</Link></li>
//                 <li><i class="fa fa-sign-out"/> <Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li> 
//             </ul>:
//             <div>
//                 {/* <li><i class="fa fa-home"/> <Link to ="/signup">Sign Up</Link></li>
//                 <li><i class="fa fa-sign-in"/> <Link to ="/login">Login</Link></li> */}
                    
//                     {/* <!-- Main navigation container --> */}
//                     <nav
//                     class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
//                     data-twe-navbar-ref>
//                     <div class="flex w-full flex-wrap items-center justify-between px-3">
//                         <div>
//                         <a class="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
//                             <img
//                             class="me-2"
//                             src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
//                             style="height: 20px"
//                             alt="TE Logo"
//                             loading="lazy"/>
//                         </a>
//                         </div>

//                         {/* <!-- Hamburger button for mobile view --> */}
//                         <button
//                         class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
//                         type="button"
//                         data-twe-collapse-init
//                         data-twe-target="#navbarSupportedContent4"
//                         aria-controls="navbarSupportedContent4"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         {/* <!-- Hamburger icon --> */}
//                         <span
//                             class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
//                             <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor">
//                             <path
//                                 fill-rule="evenodd"
//                                 d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                                 clip-rule="evenodd" />
//                             </svg>
//                         </span>
//                         </button>

//                         {/* <!-- Collapsible navbar container --> */}
//                         <div
//                         class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
//                         id="navbarSupportedContent4"
//                         data-twe-collapse-item>
//                         {/* <!-- Left links --> */}
//                         <ul
//                             class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
//                             data-twe-navbar-nav-ref>
//                             {/* <!-- Home link --> */}
//                             <li
//                             class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
//                             data-twe-nav-item-ref>
//                             <a
//                                 class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//                                 aria-current="page"
//                                 href="#"
//                                 data-twe-nav-link-ref
//                             >Dashboard</a>
//                             </li>
//                         </ul>

//                         <div class="flex items-center">
//                             <button
//                             type="button"
//                             data-twe-ripple-init
//                             data-twe-ripple-color="light"
//                             class="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
//                             Login
//                             </button>
//                             <button
//                             type="button"
//                             data-twe-ripple-init
//                             data-twe-ripple-color="light"
//                             class="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
//                             Sign up for free
//                             </button>
//                             <button
//                             type="button"
//                             data-twe-ripple-init
//                             data-twe-ripple-color="light"
//                             class="me-3 inline-block rounded bg-neutral-800 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
//                             <span class="[&>svg]:w-4">
//                                 <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24">
//                                 <path
//                                     d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                                 </svg>
//                             </span>
//                             </button>
//                         </div>
//                         </div>
//                     </div>
//                     </nav>
//             </div>
//             }

//         </div>
        
//     )
// }

// export default Nav

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  { useState } from "react";
import { MdDashboard } from "react-icons/md";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

    

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <br></br>
            {auth ? (
                <ul className="nav-ul bg-black">
                   <li>
                        <i className="fa-fa-dashboard text-white" /> <Link to="/">Student Dashboard</Link>
                    </li>
                    <li>
                        <i className="fa fa-home text-white" /> <Link to="/">Home</Link>
                    </li>
                    <li>
                        <i className="fa fa-plus-circle  text-white" /> <Link to="/add">Add Product</Link>
                    </li>
                    <li>
                        <i className="fa fa-plus-circle  text-white" /> <Link to="/personaldetails">Personal Details</Link>
                    </li>
                    <li>
                        <i className="fa fa-external-link-square  text-white" /> <Link to="/update">Update Product</Link>
                    </li>
                    <li>
                        <i className="fa fa-calendar-minus-o  text-white" /> <Link to="/taskassign">Task Assigned</Link>
                    </li>
                    <li>
                        <i className="fa fa-circle-o-notch  text-white" /> <Link to="/capstone">Capstone Details</Link>
                    </li>
                    <li>
                        <i className="fa fa-question-circle  text-white" /> <Link to="/addqueries">Queries</Link>
                    </li>
                    <li>
                        <i className="fa fa-handshake-o  text-white" /> <Link to="/requirement">Requirement</Link>
                    </li>
                    <li>
                        <i className="fa fa-book  text-white" /> <Link to="/applications">Applications</Link>
                    </li>
                    <li>
                        <i className="fa fa-id-badge  text-white" /> <Link to="/interviewtasks">Interview Tasks</Link>
                    </li>
                    <li>
                        <i className="fa fa-id-card  text-white"  /> <Link to="/leaveapplications">Leave Applications</Link>
                    </li>

                    <li>
                        <i className="fa fa-id-card  text-white"  /> <Link to="/Reference">Reference</Link>
                    </li>
                    <li>
                        <i className="fa fa-sign-out  text-white" />{' '}
                        <Link onClick={logout} to="/signup">
                            Logout({JSON.parse(auth).name})
                        </Link>
                    </li>

                   
                                    </ul>
            ) : (
        <div class=" text-center">
        <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          class="  mt-3 me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
          <Link to ="/login">Login</Link>
        </button>
        <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          class=" mt-3 me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
          <Link to ="/signup">Sign up for free</Link>
        </button>
      </div>    
            )}
        </div>
    );
};

export default Nav;
