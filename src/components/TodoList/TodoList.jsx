// system
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'redux/operatons';

// components
import TodoItem from 'components/TodoItem/TodoItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

// styles
import {
  BackLink,
  Container,
  TodoGallery,
  Button,
  ButtonWrapper,
} from './TodoList.styled';

const TodoList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const users = useSelector(state => state.users.items);
  const isLoading = useSelector(state => state.users.isLoading);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handlePrevPage = () => setPage(prev => (prev -= 1));
  const handleNextPage = () => setPage(prev => (prev += 1));

  console.log(page);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <BackLink to={backLinkHref}>Back home</BackLink>

          <TodoGallery className="gallery">
            {users.map(user => {
              return <TodoItem key={user.id} user={user} />;
            })}
          </TodoGallery>

          <ButtonWrapper>
            <Button
              disabled={isLoading || page === 1}
              onClick={handlePrevPage}
              type="button"
            >
              previous
            </Button>

            <Button
              disabled={isLoading || page === 6}
              onClick={handleNextPage}
              type="button"
            >
              next
            </Button>
            </ButtonWrapper>
            
          
        </Container>
      )}{' '}
    </>
  );
};

export default TodoList;
