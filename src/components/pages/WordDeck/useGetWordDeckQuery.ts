import { gql, useQuery } from '@apollo/client';
import { GetWordDeck } from 'types/generated/api';

const GET_WORD_DECK = gql`
  query GetWordDeck($id: Int) {
    wordDeck(where: { id: $id }) {
      id
      words {
        id
        name
        descriptions {
          id
          partsOfSpeech
          meanings
          examples {
            id
            ja
            vn
          }
        }
      }
    }
  }
`;

export const useGetWordDeckQuery = (id: number) => {
  const { loading, data, error } = useQuery<GetWordDeck>(GET_WORD_DECK, {
    variables: {
      id,
    },
  });

  return { loading, data, error };
};
