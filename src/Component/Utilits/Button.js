import React from "react";

const Button = ({ details,other }) => {
  console.log(other);
  return (
    <div class="w-3/4  m-auto flex flex-col mb-2">
      <label class="font-semibold text-gray-600 py-2">{details.btnHade}</label>

      {details.option && (
        <select
          value={details.btnvalue}
          onChange={details.function.onChange}
          autocomplete="None"
          placeholder="Department"
          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          type={details.type ? details.type : "text"}
          name={details.btnName}
        >
          {details.option.map((optn) => (
            <option value={optn.value}>{optn.name}</option>)
            
          )}
          {other && other.map((room) => (
              <option value={room.roomnum || room.name }>
                {room.name || `${room.roomnum} || ${room.roomname}`}
              </option>
            ))}
        </select>
      )}

      {!details.option && (
        <input
          onChange={details.function.onChange}
          value={details.btnvalue}
          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          type={details.type ? details.type : "text"}
          name={details.btnName}
        />
      )}
    </div>
  );
};

export default Button;
