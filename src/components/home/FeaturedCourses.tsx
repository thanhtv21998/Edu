import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BookOpen, Clock, Users, Star, ArrowRight } from "lucide-react";

interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  lessons: number;
  duration: string;
  isFeatured: boolean;
  isNew: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Tiếng Anh Giao Tiếp Cho Người Mới Bắt Đầu",
    category: "Ngoại ngữ",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop",
    instructor: "Nguyễn Thị Minh",
    rating: 4.8,
    students: 1250,
    lessons: 42,
    duration: "3 tháng",
    isFeatured: true,
    isNew: false
  },
  {
    id: 2,
    title: "Lập Trình Web Frontend với React",
    category: "Công nghệ",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&h=400&fit=crop",
    instructor: "Trần Văn Công",
    rating: 4.9,
    students: 980,
    lessons: 36,
    duration: "2.5 tháng",
    isFeatured: true,
    isNew: true
  },
  {
    id: 3,
    title: "Kỹ Năng Lãnh Đạo và Quản Lý Nhóm",
    category: "Kỹ năng mềm",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    instructor: "Lê Hoàng Nam",
    rating: 4.7,
    students: 750,
    lessons: 24,
    duration: "1.5 tháng",
    isFeatured: true,
    isNew: false
  },
  {
    id: 4,
    title: "Marketing Số Cho Doanh Nghiệp Nhỏ",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
    instructor: "Phạm Thị Hương",
    rating: 4.6,
    students: 820,
    lessons: 30,
    duration: "2 tháng",
    isFeatured: true,
    isNew: true
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Khóa học nổi bật</h2>
            <p className="text-slate-600 max-w-2xl">
              Khám phá những khóa học chất lượng cao được thiết kế bởi các chuyên gia hàng đầu
              trong lĩnh vực, giúp bạn nâng cao kỹ năng và kiến thức.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Xem tất cả khóa học
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="card-hover overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {course.isNew && (
                    <Badge className="bg-accent">Mới</Badge>
                  )}
                  {course.isFeatured && (
                    <Badge className="bg-amber-500">Nổi bật</Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="pt-5">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">{course.category}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>Giảng viên: {course.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Users className="h-4 w-4" />
                    <span>{course.students} học viên</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} bài học</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4">
                <Button className="w-full button-primary-gradient">
                  Xem chi tiết
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;