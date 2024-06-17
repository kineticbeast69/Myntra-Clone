import HomeItems from "../components/homeitems";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const UIitems = useSelector((store) => store.items);
  console.log(UIitems);
  return (
    <main>
      <div className="items-container">
        {UIitems.map((item) => (
          <HomeItems key={item.id} item={item}></HomeItems>
        ))}
      </div>
    </main>
  );
}
export default Home;
