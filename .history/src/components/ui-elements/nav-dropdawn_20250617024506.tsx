import React from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NavDropdaownAbout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("Header");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`custom px-0 text-[15px] font-semibold bg-amber-600 ${
            location.pathname === "/" ? "text-indigo-400" : "text-[#1C1C1C]"
          }`}
        >
          {t("nav2")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border border-[#6495ED] rounded-[9px] p-3 mt-2 z-50 w-[170px]">
        <DropdownMenuGroup className="flex flex-col text-[14px] text-[#1C1C1C]">
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/volontyorlik-nima")}
          >
            <NavLink
              to="/volontyorlik-nima"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              {t("selectOption1")}
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/tariximiz")}
          >
            <NavLink
              to="/tariximiz"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              {t("selectOption2")}
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/jamoamiz")}
          >
            <NavLink
              to="/jamoamiz"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              {t("selectOption3")}
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => navigate("/rasmlar")}
          >
            <NavLink
              to="/rasmlar"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              {t("selectOption4")}
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
  const { t } = useTranslation("Header");
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
          <NavLink
            to="/volunterrs-page"
            className={`custom px-0 text-[15px] font-semibold ${
              location.pathname === "/volunterrs-page"
                ? "text-indigo-400"
                : "text-[#1C1C1C]"
            }`}
          >
            {t("nav4")}
          </NavLink>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border border-[#6495ED] rounded-[9px] p-3 mt-2 z-50 w-[140px]">
        <DropdownMenuGroup className="flex flex-col text-[14px] text-[#1C1C1C]">
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => {
              localStorage.setItem("role", "volunterr");
              navigate("/login");
            }}
          >
            <NavLink
              to="/volunterrs-page"
              className={`custom px-0 text-[15px] font-semibold ${
                location.pathname === "/volunterrs-page"
                  ? "text-indigo-400"
                  : "text-[#1C1C1C]"
              }`}
            >
              {t("selectOption5")}
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="custom-element cursor-pointer"
            onSelect={() => {
              localStorage.setItem("role", "volunterr");
              navigate("/login");
            }}
          >
            <NavLink
              to="/investor-page"
              className={`custom px-0 text-[15px] font-semibold ${
                location.pathname === "/investor-page"
                  ? "text-indigo-400"
                  : "text-[#1C1C1C]"
              }`}
            >
              {t("selectOption6")}
            </NavLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
