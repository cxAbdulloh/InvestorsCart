import "./ImageGrid.css";

const ImageGrid = ({ iMG }) => {
  return (
    <div className="image-grid">
      <div className="image-row">
        <img className="img-icon" loading="lazy" alt="" src={iMG} />
      </div>
      <div className="image-row1">
        <div className="image-row2">
          <b className="darika-samak">Jerome Bell</b>
        </div>
        <div className="from-amazoncom">
          Co founder, Chairman, Executive Director
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
