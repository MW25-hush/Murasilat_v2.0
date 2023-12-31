import { writtenDocumentValues_PROPS } from "@/universalTypes";
import React from "react";

type setDocValue = {
  setDocValue: React.Dispatch<
    React.SetStateAction<writtenDocumentValues_PROPS>
  >;
};

function TypeGroup({ setDocValue }: setDocValue) {
  const handleRadioClick: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setDocValue((prev: writtenDocumentValues_PROPS) => ({
      ...prev,
      docType: value as "normal" | "emergency" | "announcment" | "confidential",
    }));
  };

  return (
    <div className="flex justify-between w-1/2 max-w-lg mx-4 ">
      {/* Normal Button*/}
      <div className={`space-x-2`}>
        <label htmlFor="normal" className="text-lg ">
          عادی
        </label>
        <input
          type="radio"
          id="normal"
          name="docType"
          value="normal"
          className="checked:bg-black border  checked:border-black"
          onChange={handleRadioClick}
        />
      </div>

      {/* Emergency */}
      <div className={`space-x-2`}>
        <label htmlFor="emergency">اضطراری</label>
        <input
          type="radio"
          id="emergency"
          name="docType"
          value="emergency"
          className="checked:bg-black border checked:border-black"
          onChange={handleRadioClick}
        />
      </div>

      <div className={`space-x-2`}>
        <label htmlFor="announcment">اعلامیه</label>
        <input
          type="radio"
          id="announcment"
          name="docType"
          value="announcment"
          className="checked:bg-black border checked:border-black"
          onChange={handleRadioClick}
        />
      </div>

      {/* Confidential */}
      <div className={`space-x-2`}>
        <label htmlFor="confidential">محرمانه</label>
        <input
          type="radio"
          id="confidential"
          name="docType"
          value="confidential"
          className="checked:bg-black border checked:border-black"
          onChange={handleRadioClick}
        />
      </div>
    </div>
  );
}

export default TypeGroup;
