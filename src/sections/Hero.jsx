function Hero() {
  return (
    <div className="flex flex-col gap-8 h-screen text-left justify-center items-center">
      <img src="webdev-flat.svg" className="max-w-4/5 w-96" alt="" />
      <div className="text-center">
        <h1 className="text-lg">Hi, it&apos;s</h1>
        <h1 className="text-4xl">
          <b> @athdromeda</b>
        </h1>
        <h2 className="text-md">Creative Web Developer</h2>
      </div>
      <div className="flex gap-3">
        <button className="border-white border py-1 px-2">PROJECTS</button>
        <button className="border-white border py-1 px-2">BLOGS</button>
      </div>
    </div>
  );
}

export default Hero;
