import Card from '../../../../components/card';
import React from 'react';

const TokenomicsCard = () => {
  return (
    <Card extra="!p-[20px] radius-10 w-100 ">
      <div className="mb-8 w-full"><h4 className="text-xl font-bold text-navy-700 dark:text-white">Tokenized Community Allocation</h4>
      <p className="mt-2 text-base text-gray-600">Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p></div>
        <div className="table-responsive">
          <table className="table table-borderless align-middle mb-0">
            <tbody>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Public Sale:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '32%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">32%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Burning:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-purple" role="progressbar" style={{ width: '20%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">20%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Team:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-success" role="progressbar" style={{ width: '6%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">6%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Liquidity Pool:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-warning" role="progressbar" style={{ width: '14%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">14%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Ecosystem:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '3%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">3%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">User Acquisition:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '3%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">3%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Marketing:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '3%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">3%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="country-icon">
                    <img src="https://tbcrewardcoin.online/assets/trcfrontend/images/favicon.png" alt="" width="32" />
                  </div>
                </td>
                <td>
                  <div className="country-name h6 mb-0">Locked:</div>
                </td>
                <td className="w-100">
                  <div className="progress flex-grow-1" style={{ height: '5px' }}>
                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '17%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="percent-data">17%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </Card>
  );
};

export default TokenomicsCard;
