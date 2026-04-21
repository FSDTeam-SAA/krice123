import Image from "next/image";
import React from "react";
import SafeHTML from "./SafeHTML";

type ProjectLeaderCardProps = {
  image: string;
  name: string;
  role: string;
  email: string;
  description: string;
};

const ProjectLeaderCard = ({
  image,
  email,
  name,
  role,
  description,
}: ProjectLeaderCardProps) => {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-[#e3ddd4] bg-white px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className="relative  overflow-hidden rounded-full  border-white shadow-md">
        <Image src={image} alt={name} width={232} height={232} className="object-cover  aspect-square" />
      </div>

      <h3 className="text-lg font-bold mt-6 text-[#2F3628] md:text-2xl">
        {name}
      </h3>
      <p className="text-sm font-medium text-[#444444] mt-1">
        {email || ""}
      </p>
      <h5 className="text-sm md:text-base leading-[120%] font-semibold text-[#2F3628]">{role}</h5>
      <div className="mt-4">
        <SafeHTML
          htmlContent={description}
          className="prose-sm text-[#2F3628] leading-[150%]"
        />
      </div>
    </article>
  );
};

export default ProjectLeaderCard;
