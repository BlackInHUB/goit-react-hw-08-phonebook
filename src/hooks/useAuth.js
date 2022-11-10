import { useSelector } from 'react-redux';
import {
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

  return { isLogin, loading, isRefreshing, user };
};

export default useAuth;
