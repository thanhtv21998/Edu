import { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

import {
  BookOpen,
  CalendarCheck,
  Menu,
  X,
  Search,
  GraduationCap,
  BookOpen as CourseIcon,
  Phone,
  MessageSquare,
  LogIn,
  UserPlus
} from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <Link to="/" className="text-xl font-bold">
              <span className="heading-gradient">EduVN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-4">
              <Link to="/" className="nav-link nav-link-active">Trang chủ</Link>
              <Link to="/courses" className="nav-link">Khóa học</Link>
              <Link to="/teachers" className="nav-link">Giảng viên</Link>
              <Link to="/news" className="nav-link">Tin tức</Link>
              <Link to="/about" className="nav-link">Giới thiệu</Link>
              <Link to="/contact" className="nav-link">Liên hệ</Link>
              <Link
                to="/login"
                className="nav-link text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Đăng nhập
              </Link>
              <Link
                to="/signup"
                className="nav-link text-primary font-semibold flex items-center gap-1 hover:underline"
              >
                <UserPlus className="w-4 h-4" />
                Đăng ký
              </Link>
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2">
            {!isMobile && (
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            )}

            {!isMobile ? (
              <Button>
                Đăng ký tư vấn
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg animate-in slide-in-from-top">
            <nav className="container-custom py-4 flex flex-col space-y-3">
              <Link to="/" className="nav-link nav-link-active flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Trang chủ
              </Link>
              <Link to="/courses" className="nav-link flex items-center gap-2">
                <CourseIcon className="h-4 w-4" />
                Khóa học
              </Link>
              <Link to="/teachers" className="nav-link flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Giảng viên
              </Link>
              <Link to="/news" className="nav-link flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Tin tức
              </Link>
              <Link to="/about" className="nav-link flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Giới thiệu
              </Link>
              <Link to="/contact" className="nav-link flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Liên hệ
              </Link>

              {/* Đăng nhập / Đăng ký */}
              <Link to="/login" className="nav-link flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Đăng nhập
              </Link>
              <Link to="/signup" className="nav-link flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Đăng ký
              </Link>

              <div className="pt-2 flex items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Tìm kiếm khóa học..."
                    className="w-full pl-9 pr-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <Button className="w-full mt-2">
                <CalendarCheck className="mr-2 h-4 w-4" />
                Đăng ký tư vấn
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
