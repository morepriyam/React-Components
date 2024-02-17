export default function Hero() {
  return (
    <div key="1" className="relative w-full">
      <img
        alt="Hero"
        className="aspect-[2/1] lg:aspect-[1/2] object-cover"
        src="https://pbs.twimg.com/profile_images/1669958005750734848/Y2x-zpAv_400x400.jpg"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to my project
          </h1>
        </div>
      </div>
    </div>
  );
}
