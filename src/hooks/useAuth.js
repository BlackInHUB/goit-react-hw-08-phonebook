import { useSelector } from 'react-redux';
import {
  selectAuthError,
  selectIsLogin,
  selectIsRefreshing,
  selectLoading,
  selectUser,
} from 'redux/auth/authSelectors';

const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const loading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectAuthError);

  return { isLogin, loading, isRefreshing, user, error };
};

export default useAuth;
