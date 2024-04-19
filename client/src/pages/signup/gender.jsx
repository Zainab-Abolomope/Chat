export default function Gender({ onCheckBoxChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected" : ""}`}>
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 bg-white"
            checked={selectedGender === "Male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? "selected" : ""}`}>
          <span className="label-text ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 bg-white"
            checked={selectedGender === "Female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}
