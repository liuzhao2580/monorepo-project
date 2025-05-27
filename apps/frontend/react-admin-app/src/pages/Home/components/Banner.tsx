import BannerImg from "@/assets/layout/banner.jpg";
const Banner = () => {
  return (
    <div className="w-full h-400px">
      <div className="absolute flex left-0 right-0">
        <div className="absolute flex left-0 right-0 w-full h-full">
          <img className="w-full border-radius-base " src={BannerImg} alt="" />
        </div>
        <div className="z-1 relative m-auto h-400px">
          <div className="pt-40 w-full flex flex-col font-color-base top-20 text-center">
            <span className="text-12">要找真房源 还是爪爪全</span>
            <span className="text-16">开始寻找属于你的家</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
