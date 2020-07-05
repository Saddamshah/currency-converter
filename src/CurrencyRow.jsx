import React from 'react'

const CurrencyRow = (props) => {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions ? (
                   currencyOptions.map(option => (
                    <option key={option} value={option}>{option} </option>
                )) 
                ) : <option value="Error">Error</option>}
            </select>
        </div>
    )
}
 
export default CurrencyRow;