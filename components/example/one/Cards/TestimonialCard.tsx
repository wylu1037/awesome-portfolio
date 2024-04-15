import { TestimonialData } from "@/lib/data/exampleData";

const starIcon: string = "/assets/example/one/star.svg";
export default function TestimonialCard({
  id,
  name,
  imgUrl,
  review,
  description,
}: TestimonialData) {
  return (
    <div className="bg-white rounded-md p-5 border mx-2">
      <div className="flex items-center gap-3 mb-4">
        <img
          className="w-14 h-14 rounded-full md:w-16 md:h-16"
          src={imgUrl}
          alt={name}
        />

        <div>
          <p className="text-sm md:text-base mb-1">{name}</p>

          <div className="flex items-end gap-[2px]">
            <img className="w-4 h-4 object-contain" src={starIcon} alt="" />
            <img className="w-4 h-4 object-contain" src={starIcon} alt="" />
            <img className="w-4 h-4 object-contain" src={starIcon} alt="" />
            <img className="w-4 h-4 object-contain" src={starIcon} alt="" />
            <img className="w-4 h-4 object-contain" src={starIcon} alt="" />
          </div>
        </div>
      </div>

      <h6 className="text-sm md:text-base font-medium mb-1">{review}</h6>

      <span className=" text-xs md:text-[13px] text-slate-500">
        {description}
      </span>
    </div>
  );
}
