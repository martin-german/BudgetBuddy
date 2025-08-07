export type  Language = 'en' | 'hu';

export type Translations = {
  header: {
    search: string;
    button: string;
  };
  subheader: {
    walletOptions: string;
    clearBtn: string;
  };
  
 // Később :
  // footer?: {
  //   copyright: string;
  // };
  // form?: {
  //   submit: string;
  //   cancel: string;
  // };
};

export type Theme = 'light' | 'dark';