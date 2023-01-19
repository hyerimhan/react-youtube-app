import axios from 'axios';
import React, { useEffect,Dispatch,SetStateAction,useContext } from 'react'
import { useParams } from 'react-router-dom';
import ShowcontextProvider, { ShowContext } from 'src/contexts/store';
import { getSearchData } from './../../api/requests';

function VideoSearch() {
  const [shownav] = useContext(ShowContext)
  
  console.log(shownav);

  const { keyword } = useParams()
  useEffect(() => {
    // const getData = async () => {
    //   const res = await getSearchData(keyword);
    //   console.log(res);
    // }
    // getData();

    const getDataTest = async () => {
      const res = await fetch(`./videos/search.json`);
      console.log(res)
    }
    getDataTest();
  }, [keyword]);

  return (
    <div>VideoSearch</div>
  )
}

export default VideoSearch