import Container from '../.../../components/Container';
import UserLayout from './UserLayout';
import UserPage from './UserPage';

const userPage = () => {
  return (
    <UserLayout>
      <UserPage />
    </UserLayout>
  );
};

export default userPage;
