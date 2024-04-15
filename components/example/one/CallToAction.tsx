export default function CallToAction() {
  return (
    <div className="bg-secondary">
      <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
        <img
          className="w-full md:w-1/2 md:h-full object-cover"
          src="/assets/example/one/house.jpeg"
          alt="house"
        />

        <div className="p-10">
          <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">
            Find Out What It Costs
          </h5>

          <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
            With technology like JavaScript, fetching information from the
            browser became more popular than ever. This, in turn, affected
            search engines and their ability to understand pages, as most bots
            were only parsing the initial HTML from the server and loading it to
            the browser.
          </p>

          <button className="primary-btn">GET ESTIMATION</button>
        </div>
      </div>
    </div>
  );
}
