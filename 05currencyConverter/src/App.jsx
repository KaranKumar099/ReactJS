import { useEffect, useState } from 'react'
import UseCurrencyInfo from './Hooks/UseCurrencyInfo.jsx'
import InputBox from './InputBox';


function App() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] =useState('0');
  const [convertedAmount, setConvertedAmount] =useState('0');
  
  const currencyInfo = UseCurrencyInfo(from);
  // console.log()

  const options=Object.keys(currencyInfo);
  // console.log(options)

  let swapHandler=()=>{
    setFrom(to);
    setTo(from);
    convert();
  }

  let convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  useEffect(()=>{
    convert();
  },[amount,from,to,currencyInfo,options])

  return (
    <>
      <div className='h-screen flex flex-col gap-3 justify-center items-center bg-cover'
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>
        <h1 className='bg-black/50 text-2xl text-white p-2 rounded-md'>Currency Converter</h1>
        <form action="" className='relative' onSubmit={(e)=>{
          e.preventDefault();
          convert();
        }}>
          <div className='mb-3'>
            <InputBox 
              label={"from"} 
              amount={amount} 
              selectCurrency={from} 
              currencyOptions={options} 
              onCurrencyChange={(currency)=>setFrom(currency)} 
              onAmountChange={(amount)=>setAmount(amount)}/>
          </div>
          <button className='bg-[#40676E] text-white px-4 py-2 rounded-lg absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer' onClick={swapHandler}>SWAP</button>
          <div>
            <InputBox 
            label={"to"} 
            amount={convertedAmount} 
            selectCurrency={to} 
            currencyOptions={options} 
            onCurrencyChange={(currency)=>setTo(currency)} 
            amountDisable={true}/>
          </div>
        </form>
        {/* <button type="submit" className="w-xl bg-blue-600 text-white px-4 py-3 rounded-lg">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button> */}
      </div>
    </>
  )
}

export default App
