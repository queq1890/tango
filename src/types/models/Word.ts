type Example = {
  vn: string;
  ja: string;
};

type Description = {
  type: 'noun'; // TODO
  meanings: string[];
  examples: Example[];
};

type Word = {
  descriptions: Description[];
};

export type { Example, Description, Word };
