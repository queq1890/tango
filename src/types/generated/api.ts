/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWordBooks
// ====================================================

export interface GetWordBooks_wordBooks_wordDecks {
  __typename: "WordDeck";
  id: number;
  title: string;
  summary: string;
}

export interface GetWordBooks_wordBooks {
  __typename: "WordBook";
  id: number;
  title: string;
  summary: string;
  wordDecks: GetWordBooks_wordBooks_wordDecks[];
}

export interface GetWordBooks {
  wordBooks: GetWordBooks_wordBooks[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
