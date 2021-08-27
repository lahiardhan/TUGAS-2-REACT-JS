import Header from "./Page/Header";
import MenuUtama from "./Page/MenuUtama";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import Footer from "./Page/Footer";

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuMakanan />

      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
