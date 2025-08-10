export type  Language = 'en' | 'hu';
export type Theme = 'light' | 'dark';

export type Translations = {
  theme: {
    dark:string;
    light:string;
  };
  header: {
    search: string;
    button: string;
  };
  subheader: {
    walletOptions: string;
    clearBtn: string;
  };
  expenseDialog: {
    addExpense: string;
    expenseName: string;
    addInput: string;
    error: string;
    amount: string;
    amountInput: string;
    walletName:string;
    selectWallets: string;
    cancelBtn: string;
    addBtn: string;
  };

  singleExpense:{
    expanseName:string;
    description:string;
  };

  allExpenses:{
    transactions: string;
    value: string;
  };
  
 // Later :
  // footer?: {
  //   copyright: string;
  // };
  // form?: {
  //   submit: string;
  //   cancel: string;
  // };
};

