import { features } from "@/lib/config";

export default () => (
  <>
    <div className="mt-24 flex flex-wrap justify-center">
      {features.map((item, index) => (
        <div
          key={index}
          className="px-6 py-2 rounded-xl md:w-[35%] w-[90%] m-2 bg-white/5"
        >
          <span className="text-4xl w-fit bg-white/10 flex justify-center p-2 rounded-full">
            {item.icon}
          </span>
          <h1 className="my-2 text-2xl">{item.title}</h1>
          <p className="mt-2 flex flex-wrap text-white/25">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </>
);
