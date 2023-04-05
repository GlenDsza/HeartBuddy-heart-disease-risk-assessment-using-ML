import { useDispatch } from "react-redux";

const FieldContainer = ({ colSize, type, label, name, val, func, options }) => {
  const dispatch = useDispatch();

  const getOptions = () => {
    return options.map((element, index) => {
      return (
        <option key={index} className="text-black" value={element.value}>
          {element.label}
        </option>
      );
    });
  };

  return (
    <div className={`col-${colSize}`}>
      <div className="text-left">
        <label
          htmlFor={`${name}`}
          className="form-label fw-bold text-[#0dcaf0]"
        >
          &bull; &nbsp; {label}
        </label>
      </div>
      {type === "input" ? (
        <input
          type="text"
          name={`${name}`}
          className="form-control"
          placeholder="Enter..."
          value={val}
          required={true}
          onChange={(e) => dispatch(func(e.target.value))}
        />
      ) : (
        <select
          name={`${name}`}
          className="form-select"
          value={val}
          onChange={(e) => dispatch(func(e.target.value))}
        >
          <option value="" disabled>
            Select ...
          </option>
          {getOptions()}
        </select>
      )}
    </div>
  );
};

export default FieldContainer;
