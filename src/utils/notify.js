import { toast } from 'react-toastify';

export const notifyWarning = username =>
  toast.warning(`Контакт ${username} вже існує!`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const notifySuccess = username =>
  toast.success(`${username} додано!`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const notifyError = () =>
  toast.error('Щось пішло не так.. Спробуйте знову!', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const notifyDeletedInfo = username =>
  toast.info(`${username} видалено ☹`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const notifyWarningAuth = () =>
  toast.warning(`Увійдіть, або зареєструйтесь!`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });