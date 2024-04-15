export default function Footer() {
  return (
    <>
      <div className=" max-w-[1200px] mx-auto bg-dimBlue">
        <div className="flex flex-col items-center justify-center p-8">
          <img
            className="rounded w-20 mb-6"
            src="/assets/example/one/docker.svg"
            alt=""
          />

          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                About US
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Contact US
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-darkBlue hover:font-medium">
                Get Quotes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-darkBlue text-xs text-white text-center p-4">
        © 2024 All rights reserved.
      </div>
    </>
  );
}
