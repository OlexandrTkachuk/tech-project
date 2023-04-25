// system
import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';

// services
import {
  fetchUsers,
  fetchfilteredUsers,
  updateUserInfo,
} from 'services/fetchAPI';

// components
import TodoItem from 'components/UserItem/UserItem';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

// styles
import {
  BackLink,
  Container,
  TodoGallery,
  Button,
  ButtonWrapper,
  FilterWrapper,
  FilterHeading,
  Filter,
  Wrapper,
} from './UsersList.styled';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const TodoList = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('all');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (selectedOption) {
      setPage(1);
    }
  }, [selectedOption]);

  const updateUserMutation = useMutation(item => updateUserInfo(item), {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const { data, isLoading, isError } = useQuery(
    ['users', page, selectedOption],
    () => fetchUsers(page, selectedOption),
    { keepPreviousData: true }
  );

  const {
    data: filter,
    isError: filterError,
    isFetched,
  } = useQuery(
    ['users', selectedOption],
    () => fetchfilteredUsers(selectedOption),
    { keepPreviousData: true }
  );

  const handlePrevPage = () => setPage(prev => (prev -= 1));
  const handleNextPage = () => setPage(prev => (prev += 1));
  const handleFollowUser = users => updateUserMutation.mutate(users);

  if (isError) {
    return <p>{console.alert('Smth going wrong')}</p>;
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <Wrapper>
            <BackLink to={backLinkHref}>Back home</BackLink>

            <FilterWrapper>
              <FilterHeading>Filter by status:</FilterHeading>
              <Filter
                name="Filter by status"
                defaultValue={selectedOption[0]}
                onChange={setSelectedOption}
                options={options}
              />
            </FilterWrapper>
          </Wrapper>

          <TodoGallery className="gallery">
            {data.map(user => {
              return (
                <TodoItem
                  key={user.id}
                  user={user}
                  onFollow={handleFollowUser}
                />
              );
            })}
          </TodoGallery>

          {isFetched && !filterError && filter.length > 3 && (
            <ButtonWrapper>
              <Button
                disabled={isLoading || page === 1}
                onClick={handlePrevPage}
                type="button"
              >
                previous
              </Button>
              <Button
                disabled={isLoading || page === filter.length / 3}
                onClick={handleNextPage}
                type="button"
              >
                next
              </Button>
            </ButtonWrapper>
          )}
        </Container>
      )}{' '}
    </>
  );
};

export default TodoList;
