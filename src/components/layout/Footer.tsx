import { Link } from "react-router-dom";
import {
  GraduationCap,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">EduVN</span>
            </div>
            <p className="text-slate-300">
              Nền tảng giáo dục trực tuyến hàng đầu Việt Nam, cung cấp các khóa học chất lượng cao và dịch vụ tư vấn giáo dục chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-slate-300 hover:text-primary transition-colors">Khóa học</Link>
              </li>
              <li>
                <Link to="/teachers" className="text-slate-300 hover:text-primary transition-colors">Giảng viên</Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-300 hover:text-primary transition-colors">Sự kiện</Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-300 hover:text-primary transition-colors">Tin tức</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-primary transition-colors">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-primary transition-colors">Liên hệ</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Danh mục khóa học</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/category/language" className="text-slate-300 hover:text-primary transition-colors">Ngoại ngữ</Link>
              </li>
              <li>
                <Link to="/courses/category/technology" className="text-slate-300 hover:text-primary transition-colors">Công nghệ thông tin</Link>
              </li>
              <li>
                <Link to="/courses/category/business" className="text-slate-300 hover:text-primary transition-colors">Kinh doanh</Link>
              </li>
              <li>
                <Link to="/courses/category/design" className="text-slate-300 hover:text-primary transition-colors">Thiết kế</Link>
              </li>
              <li>
                <Link to="/courses/category/skills" className="text-slate-300 hover:text-primary transition-colors">Kỹ năng mềm</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300">123 Đường Giáo Dục, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-300">(+84) 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-300">info@eduvn.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {currentYear} EduVN. Tất cả các quyền được bảo lưu.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 text-sm hover:text-primary transition-colors">Chính sách bảo mật</Link>
              <Link to="/terms" className="text-slate-400 text-sm hover:text-primary transition-colors">Điều khoản sử dụng</Link>
              <Link to="/faq" className="text-slate-400 text-sm hover:text-primary transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;