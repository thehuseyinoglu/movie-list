import React from "react";

interface Props {
  params: { page: number; y: string | null; type: string; s: string };
  setParams: (value: any) => void;
  trigger: () => void;
}

const Filter = (props: Props) => {
  return (
    <div className="w-full  bg-white rounded-lg border border-gray-100 grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8  items-center px-6 jus py-3">
      <div className="flex flex-col">
        <label>Name:</label>
        <input
          value={props.params.s}
          onChange={(e) => {
            props.setParams((prevParams: any) => ({
              ...prevParams,
              s: e.target.value,
            }));
          }}
          type="text"
          id="name"
          name="name"
          className="h-11 border border-gray-300 rounded-lg pl-3"
        />
      </div>
      <div className="flex flex-col">
        <label>Year:</label>

        <input
          value={props.params.y ?? ""}
          onChange={(e) => {
            props.setParams((prevParams: any) => ({
              ...prevParams,
              y: e.target.value,
            }));
          }}
          id="name"
          name="name"
          className="h-11 border border-gray-300 rounded-lg pl-3"
        />
      </div>
      <div className="flex flex-col">
        <label>Type:</label>

        <select
          value={props.params.type}
          onChange={(e) => {
            props.setParams((prevParams: any) => ({
              ...prevParams,
              type: e.target.value,
            }));
          }}
          className="h-11 border border-gray-300 rounded-lg"
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Epsido</option>
        </select>
      </div>
      <div className="flex h-full items-end">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center border border-yellow-300 h-11 px-5 rounded-lg text-white  "
          onClick={props.trigger}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
