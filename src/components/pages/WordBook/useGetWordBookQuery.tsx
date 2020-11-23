import { gql, useQuery } from '@apollo/client';
import { GetWordBook } from 'types/generated/api';

const GET_WORD_BOOK = gql`
  query GetWordBook($id: Int) {
    wordBook(where: { id: $id }) {
      id
      wordDecks {
        id
        title
        summary
      }
    }
  }
`;

export const useGetWordBookQuery = (id: number) => {
  const { data, loading, error } = useQuery<GetWordBook>(GET_WORD_BOOK, {
    variables: {
      id,
    },
  });
  return { loading, data, error };
};
