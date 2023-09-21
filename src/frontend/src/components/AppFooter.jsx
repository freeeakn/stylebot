function AppFooter() {

    return (
        <>
        <footer className=" text-xs z-10 w-full md:text-base">
          <div className=" relative m-4">
            <nav className="glass p-4 flex flex-col items-center gap-2 lg:gap-0 lg:flex-row rounded-2xl">
  
                <div className="flex lg:basis-1/2 p-2">
                  <ul className="flex w-auto justify-center gap-5">
                    <li>
                      <a href="https://github.com/freeeakn"
                      className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200"
                      >
                        Freeakn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/KitFernin" className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                        KitFernin
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center">Tubiki&copy;2023</div>
  
                <div className="flex justify-end lg:basis-1/2 p-2">
                  <ul className="flex w-auto justify-center gap-5">
                    <li>
                      <a href="https://github.com/SD-Kalsky"
                      className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200"
                      >
                        SD-Kalsky
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/andreyakakudryash" className="p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                        andreyakakudryash
                      </a>
                    </li>
                  </ul>
                </div>
  
            </nav>
          </div>
        </footer>
        </>
      );
}

export default AppFooter;