import { CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "EduVN ra mắt khóa học mới về Trí tuệ nhân tạo và Machine Learning",
    excerpt: "EduVN vừa chính thức ra mắt khóa học mới về Trí tuệ nhân tạo và Machine Learning, được thiết kế bởi các chuyên gia hàng đầu trong lĩnh vực.",
    date: "15/07/2025",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    category: "Công nghệ"
  },
  {
    id: 2,
    title: "Hợp tác chiến lược giữa EduVN và Hiệp hội Doanh nghiệp phần mềm Việt Nam",
    excerpt: "EduVN và Hiệp hội Doanh nghiệp phần mềm Việt Nam vừa ký kết thỏa thuận hợp tác nhằm nâng cao chất lượng đào tạo và cơ hội việc làm cho học viên.",
    date: "10/07/2025",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    category: "Tin tức"
  },
  {
    id: 3,
    title: "Xu hướng giáo dục trực tuyến năm 2025: Những thay đổi quan trọng",
    excerpt: "Cùng EduVN phân tích những xu hướng giáo dục trực tuyến nổi bật trong năm 2025 và cách thích ứng với những thay đổi này.",
    date: "05/07/2025",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=600&h=400&fit=crop",
    category: "Xu hướng"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tin tức & Sự kiện</h2>
            <p className="text-slate-600 max-w-2xl">
              Cập nhật những tin tức mới nhất về giáo dục, khóa học và các sự kiện của EduVN
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Xem tất cả tin tức
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="card-hover overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-white px-3 py-1 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="pt-5">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarCheck className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 line-clamp-3 text-sm">
                  {item.excerpt}
                </p>
                
                <Button variant="link" className="mt-3 p-0 h-auto text-primary hover:text-primary/80">
                  Đọc thêm
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;