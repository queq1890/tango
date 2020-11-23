import { PartsOfSpeech } from 'types/generated/api';

export const getPartsOfSpeech = (partsOfSpeech: PartsOfSpeech) => {
  switch (partsOfSpeech) {
    case PartsOfSpeech.ADJECTIVE:
      return '形';
    case PartsOfSpeech.ADVERB:
      return '副';
    case PartsOfSpeech.CONJUNCTION:
      return '接';
    case PartsOfSpeech.INTERJECTION:
      return '感';
    case PartsOfSpeech.INTERROGATIVE:
      return '疑';
    case PartsOfSpeech.NOUN:
      return '名';
    case PartsOfSpeech.PREPOSITION:
      return '前';
    case PartsOfSpeech.PRONOUN:
      return '代';
    case PartsOfSpeech.VERB:
      return '動';
    default:
      return '';
  }
};
