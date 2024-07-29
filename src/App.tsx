function App() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Click
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[415px] p-2 shadow"
      >
        <div className="flex w-[400px] h-[400px] bg-slate-600 border-red-400 border rounded-xl p-5">
          <div className="form-control w-full flex flex-col gap-4">
            <label className="label cursor-pointer flex gap-4 bg-white rounded-xl w-full">
              <span className="label-text text-2xl text-black p-2 flex justify-center items-center">
                esp player
              </span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
            <label className="label cursor-pointer flex gap-4 bg-white rounded-xl w-full">
              <span className="label-text text-2xl text-black p-2 flex justify-center items-center">
                esp item
              </span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
            <label className="label cursor-pointer flex gap-4 bg-white rounded-xl w-full">
              <span className="label-text text-2xl text-black p-2 flex justify-center items-center">
                esp inventory
              </span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default App;
