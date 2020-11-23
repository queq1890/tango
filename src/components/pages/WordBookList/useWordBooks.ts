import { gql, useQuery } from '@apollo/client';
import { GetWordBooks } from 'types/generated/api';

const GET_WORD_BOOKS = gql`
  query GetWordBooks {
    wordBooks {
      id
      title
      summary
    }
  }
`;

export const useGetWordBooksQuery = () => {
  const { loading, data, error } = useQuery<GetWordBooks>(GET_WORD_BOOKS);
  return { loading, data, error };
};
