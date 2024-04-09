import useGetDetailById from "@/services/hooks/useGetDetailById";
import { useRouter } from "next/router";
import React from "react";
import Spin from "../shared/Spin";

const DetailCard = () => {
  const router = useRouter();

  const { data, isValidating } = useGetDetailById(router.query.id as string);

  return (
    <div className="w-[1000px] h-[410px] shadow-xl rounded-xl bg-white border-0 relative overflow-hidden">
      {isValidating ? (
        <Spin />
      ) : (
        <>
          <span className="absolute overflow-hidden  -bottom-[20%]  -left-[15%] h-[150%] rotate-[8deg]">
            <img
              src={data?.Poster}
              alt=""
              className=" blur-[6px] object-cover w-full h-full scale-150 z-10"
            />
          </span>

          <div className="grid grid-cols-3 gap-4 items-center h-full">
            <div className="z-50 justify-end flex ">
              <img
                src={data?.Poster}
                alt=""
                className="w-[140px] border border-2 shadow-xl"
              />
            </div>
            <div className="col-span-2  h-full p-2 flex items-center z-50">
              <div className=" flex flex-col gap-2">
                <span className=" text-2xl font-semibold">{data?.Title}</span>
                <span className=" text-xs text-gray-400">
                  {data?.Year} / {data?.Genre} / {data?.Runtime}
                </span>
                <p>{data?.Plot}</p>
                <span>
                  <span className=" font-semibold">Directed by:</span>{" "}
                  {data?.Director}
                </span>
                <span>
                  <span className=" font-semibold">IMDB:</span>{" "}
                  {data?.imdbRating}
                </span>
                <span>
                  <span className=" font-semibold">Actors:</span> {data?.Actors}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailCard;
