import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Thông báo đăng ký thành công
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    
    // Reset form (trong thực tế sẽ có xử lý gửi dữ liệu)
    const form = event.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="py-16 bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Đăng ký tư vấn <span className="heading-gradient">miễn phí</span>
            </h2>
            
            <p className="text-lg text-slate-600">
              Hãy để chúng tôi giúp bạn lựa chọn lộ trình học phù hợp. Đội ngũ tư vấn viên 
              chuyên nghiệp sẽ liên hệ với bạn trong vòng 24 giờ.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <p>Tư vấn lộ trình học tập phù hợp</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <p>Giới thiệu khóa học phù hợp với nhu cầu</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <p>Thông tin về ưu đãi học phí và học bổng</p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullname" className="text-sm font-medium">Họ và tên</label>
                    <Input 
                      id="fullname"
                      placeholder="Nhập họ và tên" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Số điện thoại</label>
                    <Input 
                      id="phone"
                      placeholder="Nhập số điện thoại" 
                      type="tel"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    placeholder="Nhập địa chỉ email" 
                    type="email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="course-interest" className="text-sm font-medium">Khóa học quan tâm</label>
                  <select 
                    id="course-interest"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="" disabled selected>Chọn khóa học</option>
                    <option value="language">Ngoại ngữ</option>
                    <option value="technology">Công nghệ thông tin</option>
                    <option value="business">Kinh doanh</option>
                    <option value="design">Thiết kế</option>
                    <option value="skills">Kỹ năng mềm</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Tin nhắn</label>
                  <textarea 
                    id="message"
                    placeholder="Nhập nhu cầu của bạn" 
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" className="w-full button-primary-gradient">
                  Đăng ký tư vấn ngay
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Bằng cách gửi form này, bạn đồng ý với <a href="#" className="text-primary hover:underline">Chính sách bảo mật</a> của chúng tôi
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;