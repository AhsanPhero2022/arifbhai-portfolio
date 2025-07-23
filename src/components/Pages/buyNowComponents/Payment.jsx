import payment1 from "../../../assets/payment6 (1).jpeg";
import payment2 from "../../../assets/payment6 (2).jpeg";
import payment3 from "../../../assets/payment6 (3).jpeg";
import payment4 from "../../../assets/payment6 (4).jpeg";
import payment5 from "../../../assets/payment6 (5).jpeg";
import payment6 from "../../../assets/payment6 (6).jpeg";

const Payment = () => {
  return (
    <div className="flex justify-center flex-wrap items-center gap-4">
      <img
        className="w-16 sm:w-12 md:w-14 lg:w-16"
        src={payment1}
        alt="Payoneer"
      />
      <img
        className="w-16 sm:w-12 md:w-14 lg:w-16"
        src={payment2}
        alt="remitly"
      />
      <img
        className="w-16 sm:w-12 md:w-14 lg:w-16"
        src={payment3}
        alt="Payoneer"
      />
      <img className="w-16 sm:w-12 md:w-14 lg:w-16" src={payment4} alt="xoom" />
      <img className="w-16 sm:w-12 md:w-14 lg:w-16" src={payment5} alt="wise" />
      <img
        className="w-16 sm:w-12 md:w-14 lg:w-16"
        src={payment6}
        alt="Payoneer"
      />
    </div>
  );
};

export default Payment;
