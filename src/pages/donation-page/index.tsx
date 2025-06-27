import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { Input } from "@/components/ui/input";
import { bankApps } from "@/db/org-btns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store-config";
import { createOrder, type CreateOrderResponse } from "@/store/payment-post";

const DonationPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const orderState = useSelector((state: RootState) => state.paymentPost);
  console.log("Order State:", orderState);

  // 📌 Input state'lar
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [paymentMethod, setPaymentMethod] = useState<"click" | "payme" | "">("");

  const handleSubmit = () => {
    if (!fullName || !address || !amount || !paymentMethod) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    dispatch(
      createOrder({
        customer_name: fullName,
        address: address,
        total_cost: Number(amount),
        payment_method: paymentMethod,
      })
    ).then((res) => {
    const payload = res.payload as CreateOrderResponse;
    if (payload?.payment_link) {
      window.location.href = payload.payment_link;
    }
  });
  };

  return (
    <div className="py-10 px-2 lg:px-24">
      <h3 className="flex items-center gap-9 font-medium text-2xl sm:text-3xl mb-14">
        <GoArrowLeft onClick={() => navigate(-1)} className="w-14 sm:w-8" />
        Inklyuziv yoshlarni qo’llab-quvvatlash uchun o’z hissangizni qo’shing
      </h3>

      <div className="bg-white py-16 px-2 lg:px-52 mb-4">
        <h4 className="text-[#2F2E2E] text-3xl font-medium">
          O’z hissangizni qo’shing
        </h4>
        <p className="text-[16px] mb-9">Kerakli ma’lumotlarni kiriting</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <p>F.I.SH</p>
          <Input
            placeholder="To’liq ismingizni kiriting"
            className="border border-[#6495ED] p-5 mb-8"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <p>Manzilingiz</p>
          <Input
            placeholder="Manzilingizni kiriting"
            className="border border-[#6495ED] p-5 mb-8"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <p>Ehson miqdorini kiriting</p>
          <Input
            type="number"
            placeholder="O’z miqdoringizni kiriting"
            className="border border-[#6495ED] p-5 mb-8"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <p>To’lov usulini tanlang</p>
          <RadioGroup
            value={paymentMethod}
            onValueChange={(val) => setPaymentMethod(val as "click" | "payme")}
            className="grid grid-cols-2 w-full gap-x-4 sm:gap-x-40"
          >
            {bankApps.map((item, i) => (
              <div
                key={i}
                className="border-[#EAEAEA] border my-2 rounded-[12px] gap-2 lg:gap-6 p-2.5 sm:w-64 flex items-center justify-between"
              >
                <img
                  src={item.img}
                  alt="Bank Apps Img"
                  className="w-16 sm:w-20 lg:w-36 h-10 sm:h-12 lg:h-14 object-cover"
                />
                <RadioGroupItem
                  value={item.value}
                  id={item.value}
                  className="border border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white w-5 h-5"
                />
              </div>
            ))}
          </RadioGroup>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#6495ED] text-white px-6 py-3 rounded-lg mt-8"
          >
            Hissangizni qo’shing
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
