import { useEffect, useState } from "react";

const useFetch = url => {
  
  url = (process?.env?.ROOT_URL || "")+url
  
  const [state, setState] = useState({ data: null, loading: true });
  const [refresh, setRefresh] = useState(0);
  
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    console.log("Fetching from: "+url)
    fetch(url)
      .then(x => x.json())
      .then(res => {
        if(!url.startsWith("/api/menu/cityUtility"))
          console.log("Result from: "+url,res)
        if(res.error){
          setState({ data: null, loading: false, error: res.error })
        }else{
            /* console.log(res) */
          setState({ data: res, loading: false, error: false });
        }
      }).catch(e => {
        setState({ data: null, loading: false, error: e })
        setTimeout(function () {
          setRefresh(refresh+1)
        }, 5000);
      })
  }, [url,refresh]);

  return state;
};

export default useFetch