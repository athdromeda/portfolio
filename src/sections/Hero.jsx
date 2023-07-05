function Hero() {
  return (
    <div className="flex flex-col gap-8 h-screen text-left justify-center items-center">
      <img src="webdev-flat.svg" className="w-4/5" alt="" />
      <div className="text-center">
        <h1 className="text-lg">Hi, it&apos;s</h1>
        <h1 className="text-4xl">
          <b> @athdromeda</b>
        </h1>
        <h2 className="text-md">Creative Web Developer</h2>
      </div>
    </div>
  );
}

export default Hero;
