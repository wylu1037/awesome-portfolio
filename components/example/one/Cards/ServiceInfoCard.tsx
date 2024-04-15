import { ServiceData } from "@/lib/data/exampleData";

export default function ServiceInfoCard({
  imgUrl,
  title,
  description,
}: ServiceData) {
  return (
    <div className=" bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row">
      <div className="flex-1">
        <img className="w-full h-80 md:h-full" src={imgUrl} alt={title} />
      </div>

      <div className="flex-1">
        <div className="p-10">
          <h6 className="text-md md:text-xl text-darkBlue font-medium mb-3">
            {title}
          </h6>
          <p className="text-sm md:text-base leading-6 text-darkBlue whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
