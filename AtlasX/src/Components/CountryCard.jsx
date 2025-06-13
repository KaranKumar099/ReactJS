import React from 'react'

function CountryCard({country}) {
  return (
    <>
    <div className='border-2 border-white p-4 bg-black rounded-2xl'>
        <div className='w-3xs text-white'>
            <div className='h-[160px] w-full overflow-hidden'>
                <img src={country.flags.png} alt={country.flags.alt} className='h-full w-full object-cover'/>

            </div>
            <div className='px-2 pt-2'>
                <h1>Country : {country.name.common}</h1>
                <h1>Capital : {country.capital}</h1>
                <h1>Population : {country.population}</h1>
                <h1>Region : {country.region}</h1>
            </div>
        </div>
    </div>
    </>
  );
}

export default CountryCard