import Image from "next/image";
import thankyouImage from "../../public/images/icon-thank-you.svg";
export default function ThankYou() {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center gap-4">
      <Image
        src={thankyouImage}
        className="mt-5"
        width={80}
        height={80}
        alt="Thank You"
      />
      <h1 className="text-3xl font-bold text-blue-950">Thank you!</h1>
      <p className="text-center text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
