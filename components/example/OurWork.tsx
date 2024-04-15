export default function OurWork() {
  return (
    <section id="our-work" className="max-w-[1200px] pt-8 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">
        Our Work
      </h5>

      <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
        <div className="md:col-span-2">
          <img
            className="gallery-img"
            src="https://source.unsplash.com/featured/800x600?people"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="gallery-img"
            src="https://source.unsplash.com/featured/800x600?travel"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="gallery-img"
            src="https://source.unsplash.com/featured/800x600?sport"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="gallery-img"
            src="https://source.unsplash.com/featured/800x600?food"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="gallery-img"
            src="https://source.unsplash.com/featured/800x600?car"
            alt=""
          />
        </div>
        <div className="md:col-span-2">
          <img
            className="gallery-img"
            src="https://source.unsplash.com/featured/800x600?airplan"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
