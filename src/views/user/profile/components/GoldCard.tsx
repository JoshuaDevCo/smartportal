import Card from "../../../../components/card";

import banner from "../../../../assets/img/profile/1.png";
// import banner1 from "../../../../assets/img/profile/2.png";
// import banner from "../../../../assets/img/profile/3.png";



const GoldCard = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 mb-2 text-xl font-bold text-navy-700 dark:text-white">
          Tokenized Gold 
        </h4>
        <img className="h-200 w-200" src={banner} alt="" />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Minting Price</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          0.6646 BNB
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Actual earning value</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          1.66 BNB
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">$TRC per Epoch</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          500,000
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">NFT to Token ratio saves</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          0.9991 BNB
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GoldCard;
