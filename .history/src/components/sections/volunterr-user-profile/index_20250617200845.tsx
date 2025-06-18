import React from "react";
import "./_style.scss";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
 
  DialogTrigger,
} from "@/components/ui/dialog";
import { TbEdit } from "react-icons/tb";
import { Button } from "@/components/ui/button";
const VolunterUserProfile: React.FC = () => {
  return (
    <div id="byUser">
      <div className="byUserImg">
        <div className="flex items-center justify-center py-7">
          <div className="">
            <Avatar className="w-60 sm:w-80 h-60 sm:h-80 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Dialog>
            <div className="flex flex-col items-center justify-center translate-y-[-30px]">
             <DialogTrigger className="bg-[#ffffff] w-14 h-14 grid place-content-center rounded-full">
                <TbEdit size={30} color="silver" />
             </DialogTrigger>
              <h4 className="text-4xl font-medium">John Doe</h4>
              <div className="flex items-center gap-2">
                <p className="text-[18px]">Role</p>
                  <span className="text-[13px] text-gray-500">21341312</span>
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
        </div>
      </div>
    </div>
  );
};

export default VolunterUserProfile;
