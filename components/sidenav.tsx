import Docuements from "@/app/data";
import { Button } from "./ui/button";
import NewDocument from "./newDocument";
import User from "./user";

export default function Sidenav() {
  return (
    <div className="flex fixed flex-col justify-between w-[200px] border-r-[0.1px]  border-gray-300 h-screen  p-4">
      <div className="w-full h-full overflow-y-scroll">
        <User />
        <Docuements />
      </div>
      <NewDocument />
    </div>
  );
}
