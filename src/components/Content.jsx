import ImageGrid from "./ImageGrid";
import "./Content.css";

const Content = () => {
  return (
    <section className="content">
      <div className="product">
        <ImageGrid iMG="/img@2x.png" />
        <ImageGrid iMG="/img-1@2x.png" />
        <ImageGrid iMG="/img-2@2x.png" />
        <ImageGrid iMG="/img-3@2x.png" />
      </div>
      <div className="footer">
        <img className="logos-icon" loading="lazy" alt="" src="/logos.svg" />
      </div>
    </section>
  );
};

export default Content;
