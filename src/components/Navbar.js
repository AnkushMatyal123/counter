import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
const Navbar = ({ totalCount }) => {
  return (
    <>
      <div className="pointer">
        <ProductionQuantityLimitsIcon />
      </div>
      <div className="count pointer">{totalCount}</div>
      <div
        style={{
          fontWeight: 600,
          fontSize: "22px",
          color: "black",
          cursor: "pointer",
        }}
      >
        Items
      </div>
    </>
  );
};
export default Navbar;
