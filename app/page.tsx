import Link from "next/link";
import NavBar from "./components/NavBar";
import imagePath from "./assets/your_image_icon.png";

const Home = () => {
    let items = ["Home", "Product", "Service"];

  return (
   <div>
          <NavBar
          brandName="My Brand"
          imageSrcPath={imagePath}
              navItems={items} />

      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
