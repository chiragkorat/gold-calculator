import React, { useEffect, useState } from 'react';

const GoldPurchaseCalculator = () => {
    const [investmentAmount, setInvestmentAmount] = useState(50000);
    const [goldPrice, setGoldPricet] = useState(40000);
    const [oneOZCommission, setOneOZCommission] = useState(0.065);
    const [tenOZCommission, setTenOZCommission] = useState(0.225);
    const [oneHundredthOZCommission, setOneHundredthOZCommission] = useState(0.30);
    const [oneThousandthOZCommission, setOneThousandthOZCommission] = useState(0.35);
    const [result, setResult] = useState('');

    const calculateGoldQuantity = () => {

        // Calculate cost of 1 OZ gold
        const costOfOneOZ = goldPrice + (goldPrice * oneOZCommission);

        // Calculate gold quantity for each type
        const calculateGoldQuantity = (commissionRate) => investmentAmount / (goldPrice + goldPrice * commissionRate);

        const goldQuantityOneOZ = calculateGoldQuantity(oneOZCommission);
        const goldQuantityTenOZ = calculateGoldQuantity(tenOZCommission);
        const goldQuantityOneHundredthOZ = calculateGoldQuantity(oneHundredthOZCommission);
        const goldQuantityOneThousandthOZ = calculateGoldQuantity(oneThousandthOZCommission);

        // Find the maximum quantity
        const maxGoldQuantity = Math.max(goldQuantityOneOZ, goldQuantityTenOZ, goldQuantityOneHundredthOZ, goldQuantityOneThousandthOZ);

        // Display the result
        setResult(`You can purchase ${maxGoldQuantity.toFixed(5)} OZ of gold.`);
    };

    useEffect(() => {
        calculateGoldQuantity()
    }, [investmentAmount, oneOZCommission, tenOZCommission, oneHundredthOZCommission, oneThousandthOZCommission, goldPrice])

    return (
        <div className="gold-purchase-calculator">

            <h2>Gold Purchase Calculator</h2>
            <label htmlFor="investmentAmount">1 OZ Gold Price: </label>
            <input type="number" id="investmentAmount" disabled value={goldPrice} onChange={(e) => setGoldPricet(e.target.value)} />

            <br />

            <label htmlFor="oneOZCommission">Enter Commission for 1 OZ: </label>
            <input type="number" id="oneOZCommission" step="0.001" value={oneOZCommission} onChange={(e) => setOneOZCommission(e.target.value)} />

            <br />

            <label htmlFor="tenOZCommission">Enter Commission for 10 OZ: </label>
            <input type="number" id="tenOZCommission" step="0.001" value={tenOZCommission} onChange={(e) => setTenOZCommission(e.target.value)} />

            <br />

            <label htmlFor="oneHundredthOZCommission">Enter Commission for 1/100 OZ: </label>
            <input type="number" id="oneHundredthOZCommission" step="0.001" value={oneHundredthOZCommission} onChange={(e) => setOneHundredthOZCommission(e.target.value)} />

            <br />

            <label htmlFor="oneThousandthOZCommission">Enter Commission for 1/1000 OZ: </label>
            <input type="number" id="oneThousandthOZCommission" step="0.001" value={oneThousandthOZCommission} onChange={(e) => setOneThousandthOZCommission(e.target.value)} />

            <br />
            <br />
            <label htmlFor="oneThousandthOZCommission">User will enter Price to purchase Gold </label>

            <input type="number" id="investmentAmount" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} />


            {/* <button onClick={calculateGoldQuantity}>Calculate</button> */}

            <p id="result">{result}</p>
        </div>
    );
};

export default GoldPurchaseCalculator;
