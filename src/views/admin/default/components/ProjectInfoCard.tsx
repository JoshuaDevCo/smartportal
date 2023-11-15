import Card from '../../../../components/card';
import React from 'react';

const ProjectInfoCard = () => {
  return (
    <Card extra="!p-[20px]">
      <div className="mb-8 w-full"><h4 className="text-xl font-bold text-navy-700 dark:text-white">Tokenized Smart Contract</h4>
      <p className="mt-2 text-base text-gray-600">Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p></div>
      <ul>
        <li>Project name : Tokenized Reward Coin</li>
        <li>Symbol : TRC</li>
        <li>Current Supply: </li>
        <li>Max Supply: 1,000,000,000,000</li>
        <li>Market Cap: </li>
        <li>24/hr Volume: </li>


        <li>
          Contract Address:{' '}
          <a href="https://polygonscan.com/address/0x8Bb93979901cd159bF6763B223FBb315C31CCF7b" target="_blank">
            0×8Bb93979901cd159bF6...
          </a>
        </li>
        <li>Blockchain: Smart Chain and OP Binance.</li>
      </ul>
      <br />
      <ul className="list-unstyled">
        <li className="flex align-items-center border-bottom pb-2">
          <img
            src="https://pbs.twimg.com/profile_images/1609891604562694146/a_bCV2wH_400x400.jpg"
            className="rounded-full h-50 w-50 p-1 border"
            width="90"
            height="90"
            alt="..."
          />
          <div className="flex-grow-1 ms-3">
            <h5 className="mt-0 mb-1">CyberScope | Audit Scan</h5>
            <p>The project has general audit on Coinscope. You can check it from the link below.</p>
            <a href="https://www.cyberscope.io/cyberscan?address=0x6ca7c5931AF660fd258824Faed3A29955D9060FD" target="_blank">
              <h6>Validity check</h6>
            </a>
          </div>
        </li>
        <li className="flex align-items-center my-4 border-bottom pb-2">
          <img
            src="data:image/jpeg;base64,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"
            className="rounded-full h-50 w-50 p-1 border"
            width="90"
            height="90"
            alt="..."
          />
          <div className="flex-grow-1 ms-3">
            <h5 className="mt-0 mb-1">CoinBrain - TRC Market Data</h5>
            <p>The best way to purchase TRC Coin is using the CoinBrain Trade feature that automatically finds the cheapest and fastest swap option for you. Besides that, you can also buy it, for example, on Pancakeswap.</p>
            <a href="https://coinbrain.com/coins/bnb-0x6ca7c5931af660fd258824faed3a29955d9060fd" target="_blank">
              <h6>Validity Market</h6>
            </a>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default ProjectInfoCard;
