import "./CardImg.css";

const CardImg = ({ img }) => {
  return (
    <div className="CardImg">
      <img alt="img of trump" src={img} />
    </div>
  );
};

export default CardImg;
