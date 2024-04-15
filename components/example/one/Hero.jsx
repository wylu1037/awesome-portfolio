export default function Hero() {
    return (
        <section id="hero" className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row">
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Building Dreams, Crafting Homes</h2>
                
                <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5">Turning dreams into homes. Explore our exacptional craftsmanship and envision you prefect space.</p>
                
                <button className="primary-btn">Explore Our Projects</button>
            </div>
            <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
                <img className="hero-img" src="/assets/example/one/house1.png" alt="img one" />
                <img className="hero-img mt-[5%]" src="/assets/example/one/house2.png" alt="img two" />
                <img className="hero-img" src="/assets/example/one/house3.png" alt="img three" />
            </div>
        </section>
    );
}