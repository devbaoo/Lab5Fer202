import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent";
import MenuComponent from "../components/MenuComponent";

const Home = () => {
  const h1Style = {
    color: "red",
    textAlign: "center", // Đưa văn bản vào giữa
    marginTop: "50px", // Căn lề từ trên xuống
  };

  return (
    <>
      <NavbarComponent />
      <div
        className="row-start-2 row-end-3 grid"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <div className="row-start-1 row-end-2">
          <CarouselComponent />
        </div>
      </div>
      <MenuComponent />
      <h1 style={h1Style}>This is Home Page</h1>
    </>
  );
};

export default Home;
