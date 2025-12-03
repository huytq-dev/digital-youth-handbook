import { useEffect } from "react";
import { useLocation } from "react-router-dom";

<<<<<<< HEAD
=======
// Utility function để scroll to top mượt mà (có thể dùng ở bất kỳ đâu)
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Component tự động scroll to top khi route thay đổi
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
