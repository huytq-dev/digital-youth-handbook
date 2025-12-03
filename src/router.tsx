import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/scroll-to-top";

const LandingPage = lazy(() => import("@/pages/landing-page"));
<<<<<<< HEAD
const SignInPage = lazy(() => import("@/pages/home/sign-in"));
const SignUpPage = lazy(() => import("@/pages/home/sign-up"));
const ForgotPasswordPage = lazy(() => import("@/pages/home/forgot-password"));
const ResetPasswordPage = lazy(() => import("@/pages/home/reset-password"));
=======
const HomePage = lazy(() => import("@/pages/home"));
const LearningTopicsPage = lazy(() => import("@/pages/learning-topics"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const SignInPage = lazy(() => import("@/pages/auth/sign-in"));
const SignUpPage = lazy(() => import("@/pages/auth/sign-up"));
const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"));
const ResetPasswordPage = lazy(() => import("@/pages/auth/reset-password"));
const VerifyEmailPage = lazy(() => import("@/pages/auth/verify-email"));
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[hsl(var(--blue-600))]" />
  </div>
);

export const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
=======
        <Route path="/home" element={<HomePage />} />
        <Route path="/learning-topics" element={<LearningTopicsPage />} />
        <Route path="/learning-topics/:slug" element={<LearningTopicsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
<<<<<<< HEAD
=======
        <Route path="/auth/verify-email" element={<VerifyEmailPage />} />
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
      </Routes>
    </Suspense>
  );
};
