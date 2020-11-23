/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWordBook
// ====================================================

export interface GetWordBook_wordBook_wordDecks {
  __typename: "WordDeck";
  id: number;
  title: string;
  summary: string;
}

export interface GetWordBook_wordBook {
  __typename: "WordBook";
  id: number;
  wordDecks: GetWordBook_wordBook_wordDecks[];
}

export interface GetWordBook {
  wordBook: GetWordBook_wordBook | null;
}

export interface GetWordBookVariables {
  id?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWordBooks
// ====================================================

export interface GetWordBooks_wordBooks {
  __typename: "WordBook";
  id: number;
  title: string;
  summary: string;
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
