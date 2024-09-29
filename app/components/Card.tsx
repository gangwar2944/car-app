"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct hook for navigation in Next.js
import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  content: string;
  buttonText: string;
  price: number;
  id: number;
}

const Card = ({
  imageSrc,
  title,
  content,
  buttonText,
  price,
  id,
}: CardProps) => {
  const router = useRouter(); // useRouter hook to handle navigation

  const handleClick = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <div className="w-[350px] rounded-lg overflow-hidden shadow-md transition-transform transform">
      {/* Header: Image */}
      <div className="h-48">
        <Image
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={title}
          width={100}
          height={100}
        />
      </div>

      {/* Body: Content */}
      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          <div
            className="font-semibold text-lg mb-2 truncate whitespace-nowrap"
            title={title}
          >
            {title}
          </div>

          <p className="text-gray-600 text-base mb-2">{content}</p>
          <b className="text-gray-600 text-base mb-2">{price}</b>
        </div>

        {/* Footer: Action Button */}
        <div>
          <button
            className="text-blue-500 border border-blue-500 transition-colors py-2 px-4 rounded-md w-full"
            onClick={() => handleClick(id)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
