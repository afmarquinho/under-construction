import { Landscape} from "@/components/Landscape";


const page = () => {
  return (
    <div className={`h-screen w-full text-slate-200 bg-radial-[at_50%_50%] from-gray-700 to-slate-950 flex flex-col justify-between items-center overflow-hidden`}>
      <h1 className={`text-2xl lg:text-5xl mt-10 lg:mt-20 text-center`}>Site under construction</h1>
      <Landscape/>
    </div>
  );
};
export default page;
