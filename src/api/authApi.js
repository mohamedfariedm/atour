import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify"; // Import your toast library

const getToastMessages = () => ({
  loginSuccess: {
    ar: "تم تسجيل الدخول بنجاح",
    en: "Login successful",
  },
  logoutSuccess: {
    ar: "تم تسجيل الخروج بنجاح",
    en: "Logout successful",
  },
  changePasswordSuccess: {
    ar: "تم تغيير كلمة المرور بنجاح",
    en: "Password changed successfully",
  },
  resetPasswordSuccess: {
    ar: "تم إرسال طلب إعادة كلمة المرور",
    en: "Password reset request sent",
  },
  verifyCodeSuccess: {
    ar: "تم التحقق من الرمز بنجاح",
    en: "Code verified successfully",
  },
  confirmResetSuccess: {
    ar: "تم إعادة تعيين كلمة المرور بنجاح",
    en: "Password reset successfully",
  },
  updateProfileSuccess: {
    ar: "تم تحديث الملف الشخصي بنجاح",
    en: "Profile updated successfully",
  },
  registerSuccess: {
    ar: "تم تسجيل الحساب بنجاح",
    en: "Account registered successfully",
  },
  sendCodeSuccess: {
    ar: "تم إرسال رمز التحقق بنجاح",
    en: "Verification code sent successfully",
  },
  verifyOtpSuccess: {
    ar: "تم التحقق من رمز الأمان بنجاح",
    en: "OTP verified successfully",
  },
  updateEmailSuccess: {
    ar: "تم تحديث البريد الإلكتروني بنجاح",
    en: "Email updated successfully",
  },
  updatePhoneSuccess: {
    ar: "تم تحديث رقم الهاتف بنجاح",
    en: "Phone number updated successfully",
  },
  sendOtpSuccess: {
    ar: "تم إرسال رمز التحقق بنجاح",
    en: "OTP sent successfully",
  },
  fcmTokenSuccess: {
    ar: "تم تحديث رمز FCM بنجاح",
    en: "FCM token updated successfully",
  },
  genericError: {
    ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    en: "An error occurred. Please try again.",
  },
});

const getCurrentLanguage = () => {
  const language = localStorage.getItem("language");
  return language || "en"; // Default to English if no language is set
};

const AuthAPI = {
  login: async (username, password) => {
    try {
      const response = await axiosInstance.post("/login", { username, password });
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        toast.success(getToastMessages().loginSuccess[getCurrentLanguage()]);
      }
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/logout");
      localStorage.removeItem("token");
      toast.success(getToastMessages().logoutSuccess[getCurrentLanguage()]);
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await axiosInstance.post("/change-password", {
        current_password: currentPassword,
        password: newPassword,
        password_confirmation: newPassword,
      });
      toast.success(getToastMessages().changePasswordSuccess[getCurrentLanguage()]);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  // Other methods follow the same pattern...
};

const handleError = (error) => {
  const language = getCurrentLanguage();
  const toastMessages = getToastMessages();

  if (error.response && error.response.data && error.response.data.message) {
    toast.error(error.response.data.message);
  } else {
    toast.error(toastMessages.genericError[language]);
  }
};

export default AuthAPI;
