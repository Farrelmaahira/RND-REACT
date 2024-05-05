import { useEffect, useState } from "react";
import Card from "../components/Card";

const Posts = () => {
    const [data, setData] = useState([])
  const fetchAPI = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    return data.json();
  };

  useEffect(() => {
    fetchAPI()
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <div className="m-auto text-center border w-3/4 py-3 my-3">
        <h1 className="text-3xl font-bold">Post page</h1>
      </div>
      <div className="flex justify-start justify-items-center  flex-row flex-wrap border content-center">
        {
            data.map((result) => {
                return (
                    <Card data={result} key={result.id}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Posts;
