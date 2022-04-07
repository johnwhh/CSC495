import {useState, useEffect} from "react";
import endpoint from "../api/endpoint.js";

const useEndpoint = () => {
  const [data, setData] = useState({
    slug: "",
    result: null,
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await endpoint.get(`/${data.slug}`);
            setData({...data, result: res.data});
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);

  return {data, setData};
};

export default useEndpoint;