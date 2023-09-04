import Logo1 from "../styles/img/svg/select_car.svg";
import Logo2 from "../styles/img/svg/support.svg";
import Logo3 from "../styles/img/svg/lets_drive.svg";

const MapOfBook = () => {
  const data = [
    {
      img: Logo1,
      title: "select car",
      text: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
    },
    {
      img: Logo2,
      title: "select car",
      text: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
    },
    {
      img: Logo3,
      title: "select car",
      text: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
    },
  ];

  return (
    <div className="container">
      <div className="book--map">
        <p>Plan your trip now</p>
        <h2>Quick & easy car rental</h2>
        <div>
          {data.map((item) => (
            <div className="book--map--item">
              <img src={item.img} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapOfBook;
