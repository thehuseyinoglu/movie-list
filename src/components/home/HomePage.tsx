import useGetMovies from "@/services/hooks/useGetMovies";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Card from "./Card";
import { useRouter } from "next/router";
import Spin from "../shared/Spin";

const HomePage = () => {
  const [params, setParams] = useState({
    page: 1,
    y: null,
    type: "movie",
    s: "Pokemon",
  });

  const { data, trigger, isMutating } = useGetMovies(params);
  const router = useRouter();

  useEffect(() => {
    trigger();
  }, [params.page]);


  return (
    <div className="flex flex-col p-2 md:p-20 xl:p-40 justify-center items-center ">
      <div className="bg-white p-6 flex gap-4 flex-col rounded-xl w-full">
        <Filter params={params} setParams={setParams} trigger={trigger} />
        <div>
      
        <div className="flex w-full  items-center justify-between mt-4">
          <span>Page: {params.page}</span>
          <div className="flex  items-center justify-center gap-3">
            <button
              onClick={() => {
                setParams((prevParams) => ({
                  ...prevParams,
                  page: prevParams.page != 1 ? prevParams.page - 1 : 1,
                }));
              }}
              className="py-2 px-4 text-white bg-red-400 rounded-lg"
            >
              Prev
            </button>
            <button
              onClick={() => {
                setParams((prevParams) => ({
                  ...prevParams,
                  page: prevParams.page + 1,
                }));
              }}
              className="py-2 px-4 text-white bg-yellow-400 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>

        {isMutating ? (
          <Spin />
        ) : (
          <div className="grid  grid-cols-1   sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-6  ">
            {data?.Search?.map((item) => (
              <div 
              className="flex justify-center"
                key={item.imdbID}
                onClick={() => router.push(`/detail/${item.imdbID}`)}
              >
                <Card data={item} />
              </div>
            ))}
          </div>
        )}
       
      </div>
    </div>
  );
};

export default HomePage;
