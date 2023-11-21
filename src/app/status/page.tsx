import Client from "./_components/Client";
import Lavalink from "./_components/Lavalink";

export default () => (
  <>
    <div className="flex flex-col items-center justify-center mt-12">
      <Lavalink />
      <div className="w-[90%] bg-white rounded my-4 h-[1px]" />
      <Client />
    </div>
  </>
);