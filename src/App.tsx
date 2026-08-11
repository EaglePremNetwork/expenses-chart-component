import logoImg from "./assets/logo.svg";
import expenseData from "./data.json";

const maxAmount = Math.max(...expenseData.map((day) => day.amount));

function App() {
  return (
    <main className="min-h-dvh flex flex-col">
      <article className="flex flex-col gap-4 lg:px-120 lg:pt-10">
        <section className="flex mt-15 mx-4 p-5 items-center justify-between rounded-xl bg-red-500">
          <div className="flex flex-col">
            <span className="text-[16px] text-red-100 lg:text-lg">
              My balance
            </span>
            <span className="font-bold text-2xl text-red-100 lg:text-3xl">
              $921.48
            </span>
          </div>
          <picture>
            <source media="(min-width: 1024px)" srcSet={logoImg} />
            <img src={logoImg} alt="Logo image" />
          </picture>
        </section>

        <section className="flex flex-col mx-4 p-5 rounded-xl bg-white">
          <h1 className="pb-12 font-bold text-2xl text-brown-950 lg:pb-4 lg:text-3xl">
            Spending - Last 7 days
          </h1>
          <ul className="grid grid-cols-7 items-end justify-center gap-2">
            {expenseData.map((day) => {
              return (
                <li key={day.day} className="flex flex-col group items-center">
                  <span className="hidden lg:flex mb-2 opacity-0 group-hover:opacity-100 font-bold px-2 py-1.5 rounded-md text-red-100 bg-brown-950">
                    {`$${day.amount}`}
                  </span>
                  <div
                    style={{
                      height: `${(day.amount / maxAmount) * 160}px`,
                      backgroundColor:
                        day.day.trim() === "wed"
                          ? "var(--color-blue-300)"
                          : "var(--color-red-500)",
                    }}
                    className="w-8.5 rounded-sm cursor-pointer hover:opacity-80 lg:w-10"
                  ></div>
                  <span className="pt-2 pb-6 text-sm text-brown-400">
                    {day.day}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="pt-6 border-t-2 border-red-100"></div>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="text-[16px] text-brown-400">
                Total this month
              </span>
              <span className="font-bold text-3xl text-brown-950 lg:text-4xl">
                $478.33
              </span>
            </div>
            <div className="flex flex-col">
              <span className="self-end font-bold text-brown-950">+2.4%</span>
              <span className="-mt-1.5 text-[16px] text-brown-400">
                from last month
              </span>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default App;
