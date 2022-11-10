import { toast } from 'react-toastify';

export const notify = username =>
  toast.error(`Контакт ${username} вже існує!`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
