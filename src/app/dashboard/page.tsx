import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Calendar from "../components/Calendar";

export default function page() {
  return (
    <>
      <div className="flex justify-between items-center gap-5 px-14 py-6 ">
        <div className="w-2/3"><Calendar/></div>
        <div className="flex flex-col gap-10 w-1/3 justify-center items-center">
          <div className="max-w-sm w-full flex flex-col items-center bg-primaryColor gap-2.5 py-3.5 rounded-xl">
            <div>
              <Label className="text-xs text-white">Task Name</Label>
              <Input className="w-xs bg-white" />
            </div>
            <div>
              <Label className="text-xs text-white">Deadline:</Label>
              <Input className="w-xs bg-white" />
            </div>
            <div>
              <Label className="text-xs text-white">Duration (in hours):</Label>
              <Input className="w-xs bg-white" />
            </div>
            <div>
              <Label className="text-xs text-white">
                Additional Details (Optional):
              </Label>
              <Input className="w-xs bg-white" />
            </div>
            <div className="w-xs">
              <button className="bg-mustardColor hover:bg-amber-600 w-full text-xs py-2 rounded-4xl cursor-pointer font-semibold">
                Add Task
              </button>
            </div>
          </div>
          <button className="bg-primaryColor hover:bg-blue-500 text-white font-semibold max-w-sm w-full justify-center items-center flex py-3.5 rounded-xl cursor-pointer">
            Export to Google Calendar
          </button>
          <div className="bg-primaryColor max-w-sm w-full justify-center items-center flex flex-col py-3.5 rounded-xl">
            <h2 className="text-white text-lg font-semibold text-center mb-4">
              Smart Suggestions
            </h2>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700 text-sm w-[300px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Vestibulum ut neque et velit dignissim malesuada. In
                hac habitasse platea dictumst. Curabitur fermentum orci at
                lectus gravida, in faucibus justo tempus. Suspendisse potenti.
                Fusce nec turpis nec risus rhoncus suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
