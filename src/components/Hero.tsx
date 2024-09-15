const Hero = () => {
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-white text-3xl font-extrabold sm:text-5xl">
            Hacktoberfest 2024
            <strong className="font-extrabold text-green-500 sm:block">
              {" "}
              avec Galsen DEV{" "}
            </strong>
          </h1>

          <p className="text-gray-400 mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium bg-green-500 text-gray-200 shadow hover:text-gray-300 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              S&apos;inscrire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
