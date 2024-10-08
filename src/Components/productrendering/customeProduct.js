import { useState, useLayoutEffect } from "react"


function useProductFetch(data) {
  
  const [prodData, setProdData] = useState([])

  const dataFetch = async (data) => {
    const fetch_data = await fetch(data);
    const fetched_data = await fetch_data.json();
    setProdData(fetched_data)
  }

  
  useLayoutEffect(() => {
    dataFetch(data)
  }, [data])

  return {prodData}
}

export default useProductFetch






