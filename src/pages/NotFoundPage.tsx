import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileSearch } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <FileSearch className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold">Trang không tìm thấy</h1>
          
          <p className="text-slate-600">
            Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
          </p>
          
          <div className="pt-4">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại trang chủ
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default NotFoundPage;