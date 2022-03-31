export interface NewCard {
  'new word': string;
  translation: string;
}

export interface NewDeck {
  title: string;
  description: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegistrationData extends LoginData {
  name: string;
}
