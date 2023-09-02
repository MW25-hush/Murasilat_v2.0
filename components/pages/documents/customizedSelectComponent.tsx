import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Person from "@/components/UI_Molecules/personSendList";
import SelectedPerson from "@/components/UI_Molecules/personSelectedAvatar";

type personProps = {id : number,  name: string; position: string; image: string };

function CustomizedSelectComponent() {
  const [listVisbile, setListVisible] = useState(true);
  const showList = () => {
    setListVisible(!listVisbile);
  };
  const [personInfo, setPersonInfo] = useState<personProps[]>([]);
  console.log(personInfo);

  return (
    <div
      dir="rtl"
      className="relative grow text-end pr-4 border-l border-primary-400 h-16 py-4 ml-2"
    >
      <div
        className="flex items-center justify-between pl-2"
        onClick={showList}
      >
        <div className="flex items-center">
          <p> ارسال به</p>
          <BsChevronDown className="mr-3"/>
        </div>
        <SelectedPerson removeSelectedPerson={setPersonInfo} />
      </div>
      <div
        hidden={listVisbile}
        className="bg-primary-100 shadow-lg w-72  py-4  space-y-4 "
      >
        <Person setPersonInfo={setPersonInfo} />
        <div className="border border-primary-400" />
      </div>
    </div>
  );
}

export default CustomizedSelectComponent;
