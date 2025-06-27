import React, { useEffect } from "react";
import "./_style.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,

  DialogTrigger,
} from "@/components/ui/dialog";
import { IoLocationOutline } from "react-icons/io5";

import { TbEdit } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store-config";
import { fetchUser } from "@/store/gets/get-me";
import UsageTimer from "@/components/ui-elements/user-time-diogram";
import { setRole } from "@/store/role-slice";
const VolunterUserProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile, loading, error } = useSelector((state: RootState) => state.userMe);
  console.log("profile", profile);
  const role = useSelector((state: RootState) => state.role.role);
  console.log(role);
  useEffect(() => {
    dispatch(fetchUser());
    const storedRole = localStorage.getItem("role") as
      | "volunterr"
      | "investor"
      | null;
    if (storedRole && !role) {
      dispatch(setRole(storedRole));
    }
  }, [dispatch]);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xato: {error}</div>;




  console.log(role);

  return (
    <div id="byUser" className="overflow-x-hidden">
      <div className="byUserImg">
        <div className="container mx-auto flex flex-col ]">

          <div className="flex flex-col items-center justify-center py-7">
            <div className="">
              <Avatar className="w-60 sm:w-80 h-60 sm:h-80 mx-auto">
                {profile?.profile_pic ? (
                  <AvatarImage src={profile.profile_pic} />
                ) : (
                  <AvatarFallback className="bg-gray-200 text-gray-700 text-4xl">
                    {profile?.name
                      ? `${profile.name.charAt(0).toUpperCase()}${profile.name
                        .charAt(1)
                        .toLowerCase()}`
                      : "??"}
                  </AvatarFallback>
                )}
              </Avatar>
              <Dialog>
                <div className="flex flex-col items-center justify-center translate-y-[-30px]">
                  <DialogTrigger className="bg-[#ffffff] w-14 h-14 grid place-content-center rounded-full">
                    <TbEdit size={30} color="silver" />
                  </DialogTrigger>
                  <h4 className="text-4xl font-medium">{profile?.name} </h4>
                  <div className="flex items-center gap-2">
                    <p className="text-[18px]">
                      {role === "volunterr" ? "Volunteer" : "Investor"}
                    </p>
                    <span className="text-[13px] text-gray-500">{profile?.id}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span></span>
                    <div className="flex items-center">
                      <Button></Button>
                      <Button></Button>
                    </div>
                  </div>
                </div>

              </Dialog>
            </div>


            <div className=" px-10 ">

              <div className=" bg-[#fff]  w-full p-6 rounded-md">
                <div className="flex justify-between w-[1000px]">
                  <div className="flex flex-col justify-between gap-4">
                    <p className="text-gray-500">Telofon Raqam</p>
                    <span>+{profile?.user.phone_number}</span>
                    {profile?.email && (
                      <div>
                        <p>Elektron Pochta</p>
                        <span>{profile.email}</span>
                      </div>
                    )}
                    <p></p>
                  </div>
                  <div className="flex flex-col justify-between">
                    {profile?.date_of_birth && (
                      <div>
                        <p className="text-gray-500">Tug'ilgan Sanasi</p>
                        <span>{profile.date_of_birth}</span>
                      </div>
                    )}
                   
                    <p className="text-gray-500">Yashash Manzili</p>
                    <span
                      className="border border-blue-300 w-[200px] rounded-sm h-8 px-4 flex items-center justify-betw"
                    >{profile?.address.substring(0, 15)}... <IoLocationOutline /></span>
                  </div>
                  <div><UsageTimer /></div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default VolunterUserProfile;
