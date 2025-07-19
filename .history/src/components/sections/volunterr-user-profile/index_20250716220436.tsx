import React, { useEffect } from "react";
import "./_style.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,

  DialogTrigger,
} from "@/components/ui/dialog";
import { IoLocationOutline } from "react-icons/io5";

import { TbEdit } from "react-icons/tb";
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
  useEffect(() => {
    dispatch(fetchUser());
    const storedRole = localStorage.getItem("role") as
    | "volunterr"
    | "investor"
    | null;
    if (storedRole && !role) {
      dispatch(setRole(storedRole));
    }
  }, [dispatch,  role]);
  console.log(profile);
  console.log(role);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xato: {error}</div>;





  return (
    <div id="byUser" className="overflow-x-hidden">
      <div className="byUserImg">
        <div className="container mx-auto flex flex-col ">

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
                  <h4>{profile?.company_name}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-[18px]">
                      {role  !== "volunterr" ?(
                        <span>Voluneer</span>
                      ): (
                        <span>Investor</span>
                      )}

                    </p>
                    <span className="text-[13px] text-gray-500">{profile?.id}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span></span>
                    <div className="flex items-center">
                      {/* <Button></Button> */}
                      {/* <Button></Button> */}
                    </div>
                  </div>
                </div>

              </Dialog>
            </div>


            <div className="px-2 md:px-10 ">

              <div className=" bg-[#fff]  w-full p-6 rounded-md min-w-[300px] sm:min-w-[500px]">
                <div className="flex flex-col  gap-4 sm:flex-row justify-between md:w-[600px] lg:w-[800px] xl:w-[1000px]">
                  <div className="flex flex-col text-start justify-between gap-4">
                    <p className="text-gray-500">Telofon Raqam</p>
                    <span>+{profile?.user.phone_number}</span>
                    {profile?.email && (
                      <div>
                        <p>Elektron Pochta</p>
                        <span>{profile.email}</span>
                      </div>
                    )}
                    {profile?.passport_num && (
                      <div>
                        <p className="text-gray-500">Pasport Raqami</p>
                        <span>{profile.passport_num}</span>
                      </div>
                    )}
                    {profile?.company_name && (
                      <div>
                        <p className="text-gray-500">Kompaniya Nomi</p>
                        <span>{profile.company_name}</span>
                      </div>
                    )}
                    {profile?.inn && (
                      <div>
                        <p className="text-gray-500">INN</p>
                        <span>{profile.inn}</span>
                      </div>
                    )}
                     {profile?.gender && (
                      <div>
                        <p className="text-gray-500">Jins</p>
                        {profile.gender === "M" ?(
                          <span>Erkak</span>
                        ): (
                          <span>Ayol</span>
                        )}
                      </div>
                    )}
                    <p></p>
                  </div>
                  <div className="flex flex-col  sm:justify-between">
                    {profile?.date_of_birth && (
                      <div>
                        <p className="text-gray-500">Tug'ilgan Sanasi</p>
                        <span>{profile.date_of_birth}</span>
                      </div>
                    )}
                    {profile?.company_email && (
                      <div>
                        <p className="text-gray-500">Kompaniya Email</p>
                        <span>{profile.company_email}</span>
                      </div>
                    )}
                    {profile?.address && (
                      <div>
                        <p className="text-gray-500">Yashash Manzili</p>
                        <span
                          className="border border-blue-300 w-[200px] rounded-sm h-8 px-4 flex items-center justify-betw"
                        >{profile?.address.substring(0, 10)}... <IoLocationOutline />
                        </span>
                      </div>
                    )}
                    {profile?.company_website && (
                      <div>
                        <p className="text-gray-500">Kompaniya Veb Sayti</p>
                        <a href={profile.company_website}>

                          <span>{profile.company_website}</span>
                        </a>
                      </div>
                    )}
                    {profile?.company_owner && (
                      <div>
                        <p className="text-gray-500">Kompaniya Egasi</p>
                        <span>{profile.company_owner}</span>
                      </div>
                    )}
                   
                  </div>
                  <div className="flex flex-col items-center sm:justify-between">
                    <UsageTimer />
                    {profile?.passport_num && (
                      <div>
                        <p className="text-gray-500">Pasport Raqami</p>
                        <span>{profile.passport_num}</span>
                      </div>
                    )}

                  </div>
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
