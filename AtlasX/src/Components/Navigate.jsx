import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import {FiSearch} from "react-icons/fi"

function Navigate() {
  const [resData, setResData]=useState([]);
  const [search, setSearch]=useState("");
  // const [allCountries, setAllCountries]=useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
      const response = await res.json();
      setResData(response);
      // let countries=[];
      // response.map((curCountry) => (
      //   countries.push(curCountry.name.common)
      // ))
      // setAllCountries(countries);
    }
    fetchData();    
  }, []);
  const handleChange=(e)=>{
    setSearch(e.target.value);
    let newC=resData.filter((country)=>{
      return country.name.common.startsWith(search);
    })
    setResData(newC)
  }
  // useEffect(()=>{handleChange},[search])
  return (
    <>
      <div className='bg-slate-700 py-10 px-20 flex flex-col items-center gap-10'>
        <div className='flex justify-center items-center rounded-full bg-gray-500 w-2xl'>
          <input type="text" name="searchBar" value={search} placeholder='Search...' onChange={handleChange}
            className='w-full text-xl py-2 px-5 rounded-md'/>
          <span className='text-3xl mx-5'><FiSearch /></span>
        </div>
        <div className='flex flex-wrap justify-around gap-10'>
          {resData.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navigate