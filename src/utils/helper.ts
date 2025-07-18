import { toast, Zoom } from "react-toastify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getErrorMessage(error:any): string {
  return (
    error?.data?.error?.errorResponse?.codeName ||
    error?.data?.message ||
    "Something went wrong"
  );
}

type ToastType = 'success' | 'warn' | 'info' | 'error';

export const toastMessage = (type: ToastType, message: string) => {
  toast[type](message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Zoom,
  });
};
