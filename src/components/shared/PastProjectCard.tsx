import Image from "next/image";
import Link from "next/link";
import React from "react";

type PastProjectCardProps = {
  image: string;
  title: string;
  description: string;
  projectId?: string;
};

const PastProjectCard = ({
  image,
  title,
  description,
  projectId,
}: PastProjectCardProps) => {
  const href = projectId ? `/pastprojects/${projectId}` : "#";

  return (
    <Link href={href}>
      <article className="overflow-hidden rounded-2xl border border-[#e3ddd4] bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
        <div className="relative w-full aspect-5/3">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="space-y-2 px-4 py-4">
          <h3 className="text-xl font-semibold text-primary-foreground md:text-2xl">
            {title}
          </h3>
          <p className="text-base leading-[150%] sm:text-lg">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default PastProjectCard;
