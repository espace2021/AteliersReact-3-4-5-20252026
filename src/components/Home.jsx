import Card from "./Card";
import { WondersArr } from "../Data";
function Home() {
    return ( 
        <>
        <h1>WORLD WONDERS</h1>
  <div className="row row-cols-1 row-cols-md-3 g-4 "> 
  {WondersArr.map((wonder) => (
    <Card key={wonder.id}
      wonder={wonder}
    />
  ))}
  </div>
        </>
     );
}

export default Home;