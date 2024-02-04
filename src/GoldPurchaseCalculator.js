import React, { useEffect, useState } from 'react';

const GoldPurchaseCalculator = () => {
    const [goldRate, setGoldRate] = useState(40000);
    const [amount, setAmount] = useState(0);
    const [com1, setCom1] = useState(0.065);
    const [com01, setCom01] = useState(0.225);
    const [com001, setCom001] = useState(0.3);
    const [com0001, setCom0001] = useState(0.35);
    const [com00001, setCom00001] = useState(0.20);
    const [goldCount, setGoldCount] = useState(0);
    const [goldValue, setgoldValue] = useState(0);
    const [remainGoldAmount, setremainGoldAmount] = useState(0);



    const calculateGoldQuantity = () => {
        let remainingAmount = amount;

        const calculateGold = (goldValue, commission, increment) => {
            let goldCount = 0;
            while (remainingAmount >= goldValue) {
                goldCount += increment;
                remainingAmount -= goldValue;
            }
            return goldCount;
        };

        const goldCount1 = calculateGold(goldRate + goldRate * com1, com1, 1);
        const goldCount01 = calculateGold((goldRate / 10) + ((goldRate / 10) * com01), com01, 0.1);
        const goldCount001 = calculateGold((goldRate / 100) + ((goldRate / 100) * com001), com001, 0.01);
        const goldCount0001 = calculateGold((goldRate / 1000) + ((goldRate / 1000) * com0001), com0001, 0.001);
        const goldCount00001 = calculateGold((goldRate / 10000) + ((goldRate / 1000) * com00001), com00001, 0.001);

        setGoldCount(goldCount1 + goldCount01 + goldCount001 + goldCount0001 + goldCount00001);

        console.log(`Total gold: ${goldCount}`);
        console.log(`Pending amount: ${remainingAmount}`);
        setgoldValue(goldCount)
        setremainGoldAmount(remainingAmount)
    };

    useEffect(() => {
        calculateGoldQuantity()
    }, [goldRate, amount, com1, com01, com001, com0001, goldCount])

    return (
        <div className="gold-purchase-calculator">
            <h2>Gold Purchase Calculator</h2>

            <label htmlFor="goldRate">Enter Gold Rate (in rupees): </label>
            <input type="number" id="goldRate" value={goldRate} onChange={(e) => setGoldRate(e.target.value)} />

            <br />

            <label htmlFor="amount">Enter Investment Amount (in rupees): </label>
            <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

            <br />

            <label htmlFor="com1">Enter Commission for 1 OZ: </label>
            <input type="number" id="com1" step="0.001" value={com1} onChange={(e) => setCom1(e.target.value)} />

            <br />

            <label htmlFor="com01">Enter Commission for 1/10 OZ: </label>
            <input type="number" id="com01" step="0.001" value={com01} onChange={(e) => setCom01(e.target.value)} />

            <br />

            <label htmlFor="com001">Enter Commission for 1/100 OZ: </label>
            <input type="number" id="com001" step="0.001" value={com001} onChange={(e) => setCom001(e.target.value)} />

            <br />

            <label htmlFor="com0001">Enter Commission for 1/1000 OZ: </label>
            <input type="number" id="com0001" step="0.001" value={com0001} onChange={(e) => setCom0001(e.target.value)} />

            <br />
            <label htmlFor="com00001">Enter Commission for 1/10000 OZ: </label>
            <input type="number" id="com00001" step="0.001" value={com00001} onChange={(e) => setCom00001(e.target.value)} />

            <br />

            {/* <button onClick={calculateGoldQuantity}>Calculate</button> */}
            <br />
            You can purchase: {goldValue} OZ of gold.
            <br />
            Remain Amount: {remainGoldAmount}
        </div>
    );
};

export default GoldPurchaseCalculator;
