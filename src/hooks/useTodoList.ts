import { useEffect, useState } from "react";

export const useFetch = (url: string) =>{
    const initData = !!localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data") as string) : []
    const [data, setData] = useState(initData);
    const [loading,setLoading] = useState(true);
  
    const getData = async() =>{
      if(!loading) setLoading(true);
      const response = await fetch(url);
      const results = await response.json();
      setData(results);
      localStorage.setItem("data", JSON.stringify(data))
      setLoading(false);
    };
  
    useEffect(() =>{
     if(!!initData) getData();
    }, []);
    return [data, loading, getData]
  }