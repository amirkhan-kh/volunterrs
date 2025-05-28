import React from "react";
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setRole } from "@/store/role-slice";

const NavDropdaownAbout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`custom px-0 text-[15px] font-semibold bg-amber-600 ${
            location.pathname === "/"
              ? "text-indigo-400"
              : "text-[#1C1C1C]"
          }`}
        >
          Biz haqimizda
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border border-[#6495ED] rounded-[9px] p-3 mt-2 z-50 w-[170px]">
        <DropdownMenuGroup className="flex flex-col text-[14px] text-[#1C1C1C]">
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/volontyorlik-nima")}
          >
           <NavLink to="/volontyorlik-nima"
             className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
            > 
            Volontyorlik nima
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/tariximiz")}
          >
            <NavLink to="/tariximiz"
             className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
            > 
            Tariximiz
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/jamoamiz")}
          >
            <NavLink to="/jamoamiz"
             className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
            >
            Jamoamiz
            </NavLink>
            
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/rasmlar")}
          >
            <NavLink to="/rasmlar"
             className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
            > 
            Rasmlar
            </NavLink>
           
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdaownAbout;

export const NavDropdaownVolunterrs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`custom px-0 text-[15px] font-semibold ${
            location.pathname === "/volunterrs-page"
              ? "text-indigo-400"
              : "text-[#1C1C1C]"
          }`}
        >
          <NavLink to="/volunterrs-page"
          className={`custom px-0 text-[15px] font-semibold ${
            location.pathname === "/volunterrs-page"
              ? "text-indigo-400"
              : "text-[#1C1C1C]"
          }`}
          >

            Volontyor
          </NavLink>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border border-[#6495ED] rounded-[9px] p-3 mt-2 z-50 w-[140px]">
        <DropdownMenuGroup className="flex flex-col text-[14px] text-[#1C1C1C]">
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => {
              dispatch(setRole("volunterr"));
              localStorage.setItem("role", "volunterr");
              navigate("/login");
            }}
          >
            <NavLink to="/volunterrs-page"
          className={`custom px-0 text-[15px] font-semibold ${
            location.pathname === "/volunterrs-page"
              ? "text-indigo-400"
              : "text-[#1C1C1C]"
          }`}
          >

            Volontyorlik
          </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => {
              dispatch(setRole("investor"));
              localStorage.setItem("role", "volunterr");
              navigate("/login");
            }}
          >
            <NavLink to="/investor-page"
          className={`custom px-0 text-[15px] font-semibold ${
            location.pathname === "/investor-page"
              ? "text-indigo-400"
              : "text-[#1C1C1C]"
          }`}
          >

            Investor
          </NavLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
