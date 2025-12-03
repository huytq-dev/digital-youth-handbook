import { z } from "zod";
import {
  SocialProvider,
  EmailType,
  EmailAction,
} from "./auth.type";

// UUID/Guid validation regex
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Sign In Schema
<<<<<<< HEAD
// Backend: Email (Required, Valid email), Password (Required, Min 6 chars)
export const signInSchema = z.object({
  Email: z
    .string()
    .min(1, "Email is required")
    .email("Email is not a valid email format"),
  Password: z
=======
// Backend: email (Required, Valid email), password (Required, Min 6 chars)
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Email is not a valid email format"),
  password: z
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type SignInFormData = z.infer<typeof signInSchema>;

// Sign Up Schema
<<<<<<< HEAD
// Backend: Name (Required), Email (Required, Valid email), Password (Required, Min 6 chars)
export const signUpSchema = z
  .object({
    Name: z.string().min(1, "Name is required"),
    Email: z
      .string()
      .min(1, "Email is required")
      .email("Email is not a valid email format"),
    Password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    PasswordConfirm: z.string().min(1, "Password confirmation is required"),
    TermsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.Password === data.PasswordConfirm, {
    message: "Passwords do not match",
    path: ["PasswordConfirm"],
=======
// Backend: name (Required), email (Required, Valid email), password (Required, Min 6 chars)
export const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Email is not a valid email format"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
    passwordConfirm: z.string().min(1, "Password confirmation is required"),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;

// Sign Out Schema
<<<<<<< HEAD
// Backend: UserId (Required, must be valid Guid)
export const signOutSchema = z.object({
  UserId: z
=======
// Backend: userId (Required, must be valid Guid)
export const signOutSchema = z.object({
  userId: z
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
    .string()
    .min(1, "UserId is required")
    .regex(uuidRegex, "UserId has an invalid format"),
});

export type SignOutFormData = z.infer<typeof signOutSchema>;

// Refresh Token Schema
<<<<<<< HEAD
// Backend: UserId (Required, valid Guid), RefreshToken (Required, Min 10 chars)
export const refreshTokenSchema = z.object({
  UserId: z
    .string()
    .min(1, "UserId is required")
    .regex(uuidRegex, "UserId has an invalid format"),
  RefreshToken: z
=======
// Backend: userId (Required, valid Guid), refreshToken (Required, Min 10 chars)
export const refreshTokenSchema = z.object({
  userId: z
    .string()
    .min(1, "UserId is required")
    .regex(uuidRegex, "UserId has an invalid format"),
  refreshToken: z
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
    .string()
    .min(1, "RefreshToken is required")
    .min(10, "RefreshToken must be at least 10 characters"),
});

export type RefreshTokenFormData = z.infer<typeof refreshTokenSchema>;

// Social Login Schema
<<<<<<< HEAD
// Backend: AccessToken (Required), Provider (Required, enum: 1=Google, 2=Facebook)
export const socialSignInSchema = z.object({
  AccessToken: z.string().min(1, "AccessToken is required"),
  Provider: z.union([
=======
// Backend: accessToken (Required), provider (Required, enum: 1=Google, 2=Facebook)
export const socialSignInSchema = z.object({
  accessToken: z.string().min(1, "AccessToken is required"),
  provider: z.union([
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
    z.literal(SocialProvider.Google),
    z.literal(SocialProvider.Facebook),
  ], {
    message: "Provider has an invalid format",
  }),
});

export type SocialSignInFormData = z.infer<typeof socialSignInSchema>;

// Send Verification Email Schema
// Backend: Email (Required, Valid email), EmailType (Required, enum), Action (Required, enum)
export const sendVerificationEmailSchema = z.object({
  Email: z
    .string()
    .min(1, "Email is required")
    .email("Email is not a valid email format"),
  EmailType: z.union([
    z.literal(EmailType.Verification),
    z.literal(EmailType.ForgotPassword),
    z.literal(EmailType.Notification),
  ], {
    message: "EmailType has an invalid format",
  }),
  Action: z.union([
    z.literal(EmailAction.Send),
    z.literal(EmailAction.Resend),
  ], {
    message: "Action has an invalid format",
  }),
});

export type SendVerificationEmailFormData = z.infer<
  typeof sendVerificationEmailSchema
>;

// Verify Email Schema
<<<<<<< HEAD
// Backend: Token (Required)
export const verifyEmailSchema = z.object({
  Token: z.string().min(1, "Token is required"),
=======
// Backend: token (Required)
export const verifyEmailSchema = z.object({
  token: z.string().min(1, "Token is required"),
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
});

export type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

// Forgot Password Schema
<<<<<<< HEAD
// Backend: Email (Required, Valid email)
export const forgotPasswordSchema = z.object({
  Email: z
=======
// Backend: email (Required, Valid email)
export const forgotPasswordSchema = z.object({
  email: z
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
    .string()
    .min(1, "Email is required")
    .email("Email is not a valid email format"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// Reset Password Schema
<<<<<<< HEAD
// Backend: Token (Required), NewPassword (Required, Min 6 chars), ConfirmPassword (Required, Must match NewPassword)
export const resetPasswordSchema = z
  .object({
    Token: z.string().min(1, "Token is required"),
    NewPassword: z
      .string()
      .min(1, "NewPassword is required")
      .min(6, "NewPassword must be at least 6 characters"),
    ConfirmPassword: z.string().min(1, "ConfirmPassword is required"),
  })
  .refine((data) => data.NewPassword === data.ConfirmPassword, {
    message: "ConfirmPassword must match NewPassword",
    path: ["ConfirmPassword"],
=======
// Backend: token (Required), newPassword (Required, Min 6 chars), confirmPassword (Required, Must match newPassword)
export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, "Token is required"),
    newPassword: z
      .string()
      .min(1, "NewPassword is required")
      .min(6, "NewPassword must be at least 6 characters"),
    confirmPassword: z.string().min(1, "ConfirmPassword is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "ConfirmPassword must match NewPassword",
    path: ["confirmPassword"],
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

