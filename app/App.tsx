import NavBar from "./components/NavBar";
import imagePath from "./assets/IronOreEgg.png";
function App() {
    let items = ["Home", "Product", "Service"];
    return (
        <div>
            <NavBar
                brandName="My Brand"
                imageSrcPath={imagePath}
                navItems={items} />
        </div>
    );
}
export default App;