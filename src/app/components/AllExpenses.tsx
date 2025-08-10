import SingleExpense from "./SingleExpense";
import { useLanguageContext } from "../context/LanguageContext";

function AllExpenses() {
  return (
    <div className="mt-16">
      {/*List Header & Expenses List*/}
      <ListHeader />
      <ExpensesList />
    </div>
  );
}

function ListHeader() {
  const { t }  = useLanguageContext();
  return (
    <div className="flex justify-between mb-4 items-center px-1">
      <div>
        {/* Date */}
        <span className="font-bold text-[15px]">
          August 22th 2024
        </span>
      </div>

      <div className="flex gap-7 text-[13px] font-semibold">
        <span>{t.allExpenses.transactions}: 3 </span>
        <span>{t.allExpenses.value}: $2100</span>
      </div>
    </div>
  );
}

function ExpensesList() {
  return (
    <div className="flex p-1 mt-4 items-center flex-col gap-5 h-[400px] scrollbar-custom">
      <SingleExpense />
      <SingleExpense />
      <SingleExpense />
      <SingleExpense />
      <SingleExpense />

    </div>
  );
}

export default AllExpenses;
