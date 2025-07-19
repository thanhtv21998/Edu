import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    role: "Sinh viên ĐH Bách Khoa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "Khóa học của EduVN giúp tôi nắm vững kiến thức một cách hiệu quả. Giảng viên nhiệt tình, nội dung cập nhật và phù hợp với nhu cầu thực tế của thị trường.",
    course: "Lập trình Web Frontend với React"
  },
  {
    id: 2,
    name: "Lê Thị Mai",
    role: "Nhân viên văn phòng",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Tôi đã cải thiện kỹ năng giao tiếp tiếng Anh rất nhiều sau khi hoàn thành khóa học. Phương pháp giảng dạy dễ hiểu và có nhiều bài tập thực hành hữu ích.",
    course: "Tiếng Anh Giao Tiếp Cho Người Mới Bắt Đầu"
  },
  {
    id: 3,
    name: "Trần Minh Đức",
    role: "Quản lý dự án",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Khóa học đã trang bị cho tôi những kỹ năng quản lý và lãnh đạo thiết thực. Tôi đã áp dụng thành công vào công việc và nhận được phản hồi tích cực từ đồng nghiệp.",
    course: "Kỹ Năng Lãnh Đạo và Quản Lý Nhóm"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Học viên nói gì về chúng tôi</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Khám phá trải nghiệm học tập tại EduVN qua những chia sẻ chân thực từ học viên
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 card-hover relative"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className="mb-4">
                <p className="text-slate-600 relative z-10">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                    <p className="text-xs text-primary mt-1">Khóa học: {testimonial.course}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;