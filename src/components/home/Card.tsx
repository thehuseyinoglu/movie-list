/* eslint-disable @next/next/no-img-element */
import { GetMovieResponseSearch } from "@/services/types/get-movie-response";
import Image from "next/image";
import React from "react";

type Props = {
  data: GetMovieResponseSearch;
};

const Card = (props: Props) => {
  return (
    <div className="w-48  h-72 relative cursor-pointer ">
      <div className="absolute -right-2 -bottom-2   bg-yellow-400 h-full w-full "></div>

      <div className="relative group bg-black text-gray-50 h-72  border-4 border-white-700 py-8  overflow-hidden">
        <div className="z-50 relative flex justify-between flex-col h-full ">
          <div className=" px-4">
            <div className="h-1 w-10 bg-yellow-400 mb-2 "></div>
            <span className=" font-medium text-xl">{props.data.Title}</span>
          </div>
          <div className="flex flex-col ">
            <div className="bg-yellow-400/55 flex gap-1 justify-end ">
              <span className=" font-medium text-sm">
                {props.data.Year} - {props.data.Type}
              </span>
            </div>

            <span className=" text-yellow-400 text-end text-[10px] ">
             IMDB id -  {props.data.imdbID}
            </span>
          </div>
        </div>
        <img
          src={props.data.Poster}
          alt="poster"
          className=" z-20 absolute top-0 left-0 h-[288px] group-hover:opacity-40 opacity-20  duration-300"
        />
      </div>
    </div>
  );
};

export default Card;
