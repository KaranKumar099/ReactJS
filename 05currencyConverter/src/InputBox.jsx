
function InputBox({
  label,
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
  currencyOptions=[],
  amountDisable=false,
  currencyDisable=false
}) {

  return (
    <>
      <div className='bg-white w-xl h-30 rounded-2xl text-[#40676E] p-6 flex justify-between items-center relative'>
        <div className='flex flex-col'>
          <div className='absolute left-4 top-2'>{label}</div>
          <div className='text-xl'>
            Amount : <input type="number" value={amount} className='text-2xl' disabled={amountDisable} placeholder="Enter Amount"
              onChange={(e)=>{onAmountChange(e.target.value)}}/>
          </div>
        </div>
        <div className='text-md'>
          <select value={selectCurrency} onChange={(e)=>{onCurrencyChange(e.target.value)}}>
            <option value="" disabled>Select an option</option>
            {currencyOptions.map((opt, index) => (
              <option key={index} value={opt} disabled={currencyDisable}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox
