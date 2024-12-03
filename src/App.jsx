
import Apeach from "./styles/apeach.webp";
import Frodo from "./styles/frodo.webp";
import Jayz from "./styles/jayz.webp";
import Neo from "./styles/neo.webp";
import './styles/index.css'


function App() {
  return (
    <div className='card'>
      <div className="profile">
        <img src={Apeach} alt="" />
        <h4>Apeach</h4>
        <p>카카오프렌즈 최고 잔망꾸러기 복숭아</p>
      </div>
      <div className="profile">
        <img src={Frodo} alt="" />
        <h4>Frodo</h4>
        <p>카카오프렌즈 최고 잔망꾸러기 복숭아</p>
      </div>
      <div className="profile">
        <img src={Jayz} alt="" />
        <h4>Jayz</h4>
        <p>카카오프렌즈 최고 잔망꾸러기 복숭아</p>
      </div>
      <div className="profile">
        <img src={Neo} alt="" />
        <h4>Neo</h4>
        <p>카카오프렌즈 최고 잔망꾸러기 복숭아</p>
      </div>
    </div>
  );
}

export default App;

