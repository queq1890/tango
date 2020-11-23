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

// ====================================================
// GraphQL query operation: GetWordDeck
// ====================================================

export interface GetWordDeck_wordDeck_words_descriptions_examples {
  __typename: "Example";
  id: number;
  ja: string;
  vn: string;
}

export interface GetWordDeck_wordDeck_words_descriptions {
  __typename: "Description";
  id: number;
  partsOfSpeech: PartsOfSpeech;
  meanings: string[];
  examples: GetWordDeck_wordDeck_words_descriptions_examples[];
}

export interface GetWordDeck_wordDeck_words {
  __typename: "Word";
  id: number;
  name: string;
  descriptions: GetWordDeck_wordDeck_words_descriptions[];
}

export interface GetWordDeck_wordDeck {
  __typename: "WordDeck";
  id: number;
  words: GetWordDeck_wordDeck_words[];
}

export interface GetWordDeck {
  wordDeck: GetWordDeck_wordDeck | null;
}

export interface GetWordDeckVariables {
  id?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PartsOfSpeech {
  ADJECTIVE = "ADJECTIVE",
  ADVERB = "ADVERB",
  CONJUNCTION = "CONJUNCTION",
  INTERJUNCTION = "INTERJUNCTION",
  NOUN = "NOUN",
  PREPOSITION = "PREPOSITION",
  PRONOUN = "PRONOUN",
  VERB = "VERB",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
