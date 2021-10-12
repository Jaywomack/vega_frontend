import Meta from "./components/partials/Meta";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Meta title="About | Vega Cloud" desc="Vega Cloud is awesome." />
      <main className="min-h-screen">
        {/* Start Hero Section */}
        <section className="">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center w-full">
              <p className="text-custom-color-2 font-bold">REIMAGINE CLOUD</p>
              <h1 className="title-font text-5xl mb-4 font-bold text-black">
                The most user-friendly cloud automation platform for all your
                cloud optimization needs
              </h1>
              <p className="mb-8 leading-relaxed">
                Vega unlocks the power of public cloud infrastructure, giving
                businesses the freedom to innovate and efficiently deliver
                world-className products and services
              </p>
              <div className="flex justify-center">
                <button className="inline-flex inline-flex text-custom-color-2 bg-white border-2 border-custom-color-2 rounded-full py-2 px-6  hover:bg-custom-color-2 hover:text-white hover:border-0 text-lg">
                  Request Demo
                </button>
                <button className="ml-4 inline-flex text-custom-color-2 bg-white border-2 border-custom-color-2 rounded-full py-2 px-6  hover:bg-custom-color-2 hover:text-white hover:border-0 text-lg">
                  Free Trial
                </button>
              </div>
            </div>
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
              alt="hero"
              width={889}
              height={451}
              // layout="fill"
              src="/static/images/vega_hero_complete.png"
            />
          </div>
        </section>
        {/* End Hero Section */}
        {/* Start Cloud Companies Images Section */}
        <section className="text-center mb-10">
          <div class="flex flex-wrap -mx-1 overflow-hidden items-center">
            <div class="my-1 px-1 w-1/2 overflow-hidden md:w-1/3 lg:w-1/6">
              <Image
                className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
                alt="hero"
                width={96}
                height={45}
                src="/static/images/vega_armor.webp"
              />
            </div>

            <div class="my-1 px-1 w-1/2 overflow-hidden md:w-1/3 lg:w-1/6">
              <Image
                className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
                alt="hero"
                width={115}
                height={55}
                src="/static/images/vega_aws.webp"
              />
            </div>

            <div class="my-1 px-1 w-1/2 overflow-hidden md:w-1/3 lg:w-1/6">
              <Image
                className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
                alt="hero"
                width={150}
                height={75}
                src="/static/images/vega_azure.webp"
              />
            </div>

            <div class="my-1 px-1 w-1/2 overflow-hidden md:w-1/3 lg:w-1/6">
              <Image
                className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
                alt="hero"
                width={127}
                height={75}
                src="/static/images/vega_google_cloud.webp"
              />
            </div>

            <div class="my-1 px-1 w-1/2 overflow-hidden md:w-1/3 lg:w-1/6">
              <Image
                className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
                alt="hero"
                width={131}
                height={55}
                src="/static/images/vega_qumulo.webp"
              />
            </div>

            <div class="my-1 px-1 w-1/2 overflow-hidden md:w-1/3 lg:w-1/6">
              <Image
                className="lg:w-2/6 md:w-3/6 w-5/6 mt-10  rounded"
                alt="hero"
                width={148}
                height={65}
                src="/static/images/vega_teradici.webp"
              />
            </div>
          </div>
        </section>
        {/* end Cloud Comanies Images Section */}
      </main>
    </>
  );
};

export default Home;
