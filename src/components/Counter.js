import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Counter = ({
  id,
  value,
  onIncrement,
  onDecrement,
  counter,
  onDelete,
}) => {
  console.log(counter, "08243082348");
  return (
    <div className="counter-item" key={id}>
      <div className={`count ${value !== 0 && "blue"} `}>
        {value === 0 ? "Zero" : value}
      </div>
      <div className="add" onClick={() => onIncrement(id)}>
        +
      </div>
      <div className="minus" onClick={() => onDecrement(id)}>
        {" "}
        -
      </div>

      <div className="delete" onClick={() => onDelete(id)}>
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};
export default Counter;
