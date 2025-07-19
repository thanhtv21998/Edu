import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  const benefits = [
    "Giảng viên chất lượng cao",
    "Chương trình cập nhật liên tục",
    "Học mọi lúc, mọi nơi",
    "Chứng chỉ được công nhận"
  ];
  
  return (
    <section className="hero-section">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white/10 rounded-tl-[200px] blur-3xl" />
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-white/10 rounded-br-[100px] blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Content */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
            #1 Nền tảng giáo dục trực tuyến tại Việt Nam
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Khám phá tương lai <br />
            <span className="text-accent">giáo dục</span> cùng EduVN
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-lg">
            Nền tảng cung cấp các khóa học chất lượng cao với giảng viên hàng đầu, 
            giúp bạn phát triển kỹ năng và nâng cao kiến thức.
          </p>

          <div className="flex flex-wrap gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="button-primary-gradient">
              Khám phá khóa học
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Tư vấn miễn phí
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        {!isMobile && (
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop" 
                alt="Sinh viên học tập" 
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">10,000+</p>
                    <p className="text-sm text-gray-600">Học viên thành công</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;