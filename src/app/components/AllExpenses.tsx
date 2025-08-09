import SingleExpense from "./SingleExpense";

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
  return (
    <div className="flex justify-between mb-4 items-center px-1">
      <div>
        {/* Date */}
        <span className="font-bold text-[15px] text-slate-700">
          August 22th 2024
        </span>
      </div>

      <div className="flex gap-7 text-slate-400 text-[13px] font-semibold">
        <span>Number of transaction: 03</span>
        <span>Value: $2100</span>
      </div>
    </div>
  );
}

function ExpensesList() {
  return (
    <div className="flex p-1 mt-4 items-center flex-col gap-5 h-[400px] overflow-auto">
      <SingleExpense />
    </div>
  );
}

export default AllExpenses;
