import React, { useState } from "react";
import { HiSelector } from "react-icons/hi";

type options = {
  id: number;
  value: string;
};

const SelectInputBox = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const options = [
    "Plumber",
    "House Keeping",
    "Care taker",
    "Driver",
    "Electrician",
  ];

  const [selectedValues, setSelectedValues] = useState<options[]>([]);
  console.log(selectedValues);
  const makeNewValues = (item: string, id: number) => {
    return {
      id: id,
      value: item,
    };
  };

  const selectItem = (value: string, index: number) => {
    const exist = selectedValues.some((item) => item.id == index);
    if (!exist) {
      makeNewValues(value, index);
      setSelectedValues([...selectedValues, makeNewValues(value, index)]);
    }
  };
  const deleteItem = (id: number) => {
    const filter = selectedValues.filter((item) => item.id !== id);
    setSelectedValues(filter);
  };
  return (
    <div className=" w-[300px] overflow-x-auto no-scrollbar">
      <div
        onClick={() => setShowOptions(!showOptions)}
        className=" px-2 py-3 border cursor-pointer  overflow-x-auto overflow-y-hidden  no-scrollbar    whitespace-nowrap  flex gap-2 border-gray-300 rounded-md "
      >
        {selectedValues.length > 0 ? (
          selectedValues.map((item) => (
            <span
              className="bg-blue-200 p-1 cursor-pointer  "
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item.id);
              }}
            >
              {item.value} x{" "}
            </span>
          ))
        ) : (
          <span className="text-gray-400">Choose</span>
        )}
      </div>
      <div
        className="absolute top-5 right-2 text-center cursor-pointer "
        onClick={() => setShowOptions(!showOptions)}
      >
        <HiSelector />
      </div>
      {showOptions && (
        <div className="flex flex-col absolute  mt-2 bg-[#DBEAFE] px-1 py-3 text-black w-[50%] rounded-lg">
          {options.map((o, index) => (
            <div
              className="cursor-pointer flex gap-2 hover:bg-white rounded-md px-1 "
              key={index}
              onClick={() => selectItem(o, index)}
            >
              <span>{index + 1}</span>
              <span>{o}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInputBox;
