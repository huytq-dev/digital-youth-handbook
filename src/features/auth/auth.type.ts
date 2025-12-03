import type {
<<<<<<< HEAD
    ApiResponse,
    ApiReponseSuccess,
    RoleName,
  } from "@/features/common/common.type";
  
  // Enums (using const objects for erasableSyntaxOnly compatibility)
  export const SocialProvider = {
    Google: 1,
    Facebook: 2,
  } as const;
  
  export type SocialProvider = (typeof SocialProvider)[keyof typeof SocialProvider];
  
  export const EmailType = {
    Verification: 1,
    ForgotPassword: 2,
    Notification: 3,
  } as const;
  
  export type EmailType = (typeof EmailType)[keyof typeof EmailType];
  
  export const EmailAction = {
    Send: 1,
    Resend: 2,
  } as const;
  
  export type EmailAction = (typeof EmailAction)[keyof typeof EmailAction];
  
  // Sign In (Login)
  export interface SignInRequestModel {
    Email: string;
    Password: string;
  }
  
  export interface SignInResponseDataModel {
    AccessToken: string;
    ExpiresIn: number;
    RefreshToken: string | null;
  }
  
  export type SignInResponseModel = ApiResponse<SignInResponseDataModel>;
  
  // Sign Up (Register)
  export interface SignUpRequestModel {
    Name: string;
    Email: string;
    Password: string;
  }
  
  export interface SignUpResponseDataModel {
    Email: string;
    IsVerified: boolean;
  }
  
  export type SignUpResponseModel = ApiResponse<SignUpResponseDataModel>;
  
  // Sign Out (Logout)
  export interface SignOutRequestModel {
    UserId: string; // Guid
  }
  
  export interface SignOutResponseDataModel {
    Message: string;
  }
  
  export type SignOutResponseModel = ApiResponse<SignOutResponseDataModel>;
  
  // Refresh Token
  export interface RefreshTokenRequestModel {
    UserId: string; // Guid
    RefreshToken: string;
  }
  
  export type RefreshTokenResponseModel = SignInResponseModel;
  
  // Social Login
  // AccessToken có thể là:
  // - ID token (cho Google Identity Services)
  // - Access token (cho Facebook)
  // - Authorization code (cho Google OAuth Authorization Code Flow)
  export interface SocialSignInRequestModel {
    AccessToken: string; // ID token, access token, hoặc authorization code
    Provider: SocialProvider; // Google = 1, Facebook = 2
  }
  
  // Social Login Response - Backend trả về giống SignInResponseModel
  // (AccessToken, ExpiresIn, RefreshToken)
  export type SocialSignInResponseModel = SignInResponseModel;
  
  // Email Verification
  export interface EmailRequestModel {
    Email: string;
    EmailType: EmailType;
    Action: EmailAction;
  }
  
  export interface SendEmailVerificationResponseDataModel {
    Message: string;
  }
  
  export type SendEmailVerificationResponseModel =
    ApiResponse<SendEmailVerificationResponseDataModel>;
  
  export interface VerifyEmailRequestModel {
    Token: string;
  }
  
  export interface ConfirmEmailResponseDataModel {
    Message: string;
  }
  
  export type ConfirmEmailResponseModel =
    ApiResponse<ConfirmEmailResponseDataModel>;
  
  // Password Reset
  export interface ForgotPasswordRequestModel {
    Email: string;
  }
  
  export interface ForgotPasswordResponseDataModel {
    Message: string;
  }
  
  export type ForgotPasswordResponseModel =
    ApiResponse<ForgotPasswordResponseDataModel>;
  
  export interface ResetPasswordRequestModel {
    Token: string;
    NewPassword: string;
    ConfirmPassword: string;
  }
  
  export interface ResetPasswordResponseDataModel {
    Message: string;
  }
  
  export type ResetPasswordResponseModel =
    ApiResponse<ResetPasswordResponseDataModel>;
  
  // Other Models
  export interface RoleModel {
    roleId: string;
    roleName: RoleName;
  }
  
  export type RolesResponse = ApiReponseSuccess<RoleModel[]>;
  
  export interface UserBanModel {
    userId: string;
    reasonId: string;
    createdAt: string;
  }
  
=======
  ApiResponse,
  ApiReponseSuccess,
  RoleName,
} from "@/features/common/common.type";

// Enums (using const objects for erasableSyntaxOnly compatibility)
export const SocialProvider = {
  Google: 1,
  Facebook: 2,
} as const;

export type SocialProvider = (typeof SocialProvider)[keyof typeof SocialProvider];

/**
 * @deprecated EmailType và EmailAction không còn được dùng trong API mới
 * Các endpoint đã được tách riêng:
 * - POST /api/auth/email/verification/send (không cần EmailType/Action)
 * - POST /api/auth/password/forgot (không cần EmailType/Action)
 * Giữ lại để backward compatibility với schema cũ
 */
export const EmailType = {
  Verification: 1,
  ForgotPassword: 2,
  Notification: 3,
} as const;

export type EmailType = (typeof EmailType)[keyof typeof EmailType];

export const EmailAction = {
  Send: 1,
  Resend: 2,
} as const;

export type EmailAction = (typeof EmailAction)[keyof typeof EmailAction];

// ==========================================
// 1️⃣ Authentication
// ==========================================

// POST /api/auth/login
export interface SignInRequestModel {
  email: string; // required
  password: string; // required
}

export interface SignInResponseDataModel {
  accessToken: string; // required
  expiresIn: number; // required (seconds)
  refreshToken?: string | null; // optional
}

export type SignInResponseModel = ApiResponse<SignInResponseDataModel>;

// POST /api/auth/register
export interface SignUpRequestModel {
  name: string; // required
  email: string; // required
  password: string; // required
}

export interface SignUpResponseDataModel {
  message: string; // required
}

export type SignUpResponseModel = ApiResponse<SignUpResponseDataModel>;

// POST /api/auth/logout
export interface SignOutRequestModel {
  userId: string; // required (Guid)
}

export interface SignOutResponseDataModel {
  message: string; // required
}

export type SignOutResponseModel = ApiResponse<SignOutResponseDataModel>;

// POST /api/auth/refresh-token
export interface RefreshTokenRequestModel {
  userId: string; // required (Guid)
  refreshToken: string; // required
}

export type RefreshTokenResponseModel = SignInResponseModel;

// POST /api/auth/social-login
// AccessToken có thể là:
// - ID token (cho Google Identity Services)
// - Access token (cho Facebook)
// - Authorization code (cho Google OAuth Authorization Code Flow)
export interface SocialSignInRequestModel {
  accessToken: string; // ID token, access token, hoặc authorization code
  provider: SocialProvider; // Google = 1, Facebook = 2
}

// Social Login Response - Backend trả về giống SignInResponseModel
// (accessToken, expiresIn, refreshToken)
export type SocialSignInResponseModel = SignInResponseModel;

// ==========================================
// 2️⃣ Email Verification
// ==========================================

// POST /api/auth/email/verification/send
export interface SendVerificationEmailRequestModel {
  email: string; // required
}

export interface SendVerificationEmailResponseDataModel {
  message: string; // required
}

export type SendVerificationEmailResponseModel =
  ApiResponse<SendVerificationEmailResponseDataModel>;

// POST /api/auth/email/verification/confirm
export interface VerifyEmailRequestModel {
  token: string; // required
}

export interface VerifyEmailResponseDataModel {
  message: string; // required
}

export type VerifyEmailResponseModel =
  ApiResponse<VerifyEmailResponseDataModel>;

// ==========================================
// 3️⃣ Password Reset
// ==========================================

// POST /api/auth/password/forgot
export interface ForgotPasswordRequestModel {
  email: string; // required
}

export interface ForgotPasswordResponseDataModel {
  message: string; // required
}

export type ForgotPasswordResponseModel =
  ApiResponse<ForgotPasswordResponseDataModel>;

// POST /api/auth/password/reset
export interface ResetPasswordRequestModel {
  token: string; // required
  newPassword: string; // required
  confirmPassword: string; // required
}

export interface ResetPasswordResponseDataModel {
  message: string; // required
}

export type ResetPasswordResponseModel =
  ApiResponse<ResetPasswordResponseDataModel>;

// ==========================================
// Other Models
// ==========================================

export interface RoleModel {
  roleId: string;
  roleName: RoleName;
}

export type RolesResponse = ApiReponseSuccess<RoleModel[]>;

export interface UserBanModel {
  userId: string;
  reasonId: string;
  createdAt: string;
}

// ==========================================
// Legacy/Deprecated Types (for backward compatibility)
// ==========================================

/**
 * @deprecated Use SendVerificationEmailRequestModel instead
 * Kept for backward compatibility
 */
export interface EmailRequestModel {
  email: string;
}

/**
 * @deprecated Use SendVerificationEmailResponseModel instead
 * Kept for backward compatibility
 */
export type SendEmailVerificationResponseModel = SendVerificationEmailResponseModel;

/**
 * @deprecated Use VerifyEmailResponseModel instead
 * Kept for backward compatibility
 */
export type ConfirmEmailResponseModel = VerifyEmailResponseModel;
>>>>>>> bd6d5d524b869f34ec4dd3fbf4acc06975bef341
