import { CheckCircle, Award, Users, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { icon: <Users className="h-6 w-6 text-primary" />, value: "10,000+", label: "Học viên" },
    { icon: <BookOpen className="h-6 w-6 text-primary" />, value: "200+", label: "Khóa học" },
    { icon: <Award className="h-6 w-6 text-primary" />, value: "50+", label: "Giảng viên" },
    { icon: <Clock className="h-6 w-6 text-primary" />, value: "5+", label: "Năm kinh nghiệm" }
  ];

  const features = [
    "Chứng chỉ được công nhận toàn cầu",
    "Học liệu đa phương tiện hiện đại",
    "Giảng viên có kinh nghiệm thực tế",
    "Hỗ trợ học viên 24/7",
    "Cập nhật nội dung thường xuyên",
    "Hệ thống học tập thông minh"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-xl -z-10"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop" 
                alt="Học viên EduVN" 
                className="w-full h-auto object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-1 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center">{stat.icon}</div>
                      <div className="text-xl md:text-2xl font-bold mt-2">{stat.value}</div>
                      <div className="text-sm text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Về <span className="heading-gradient">EduVN</span>
            </h2>
            
            <p className="text-lg text-slate-600">
              EduVN là nền tảng giáo dục trực tuyến hàng đầu Việt Nam, cung cấp các khóa học chất lượng cao 
              và dịch vụ tư vấn giáo dục chuyên nghiệp. Chúng tôi cam kết mang đến trải nghiệm học tập 
              hiệu quả, linh hoạt và phù hợp với nhu cầu của mỗi học viên.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="button-primary-gradient">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;