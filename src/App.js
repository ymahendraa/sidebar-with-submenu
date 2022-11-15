import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const menuArr = [
  { id: 1, label: "Menu 1" },
  { id: 2, label: "Menu 2" },
  { id: 3, label: "Menu 3" },
  { id: 4, label: "Menu 4" },
];

const subMenuArr = [
  {
    id: 1,
    menu: [
      { id: 1, label: "Menu 1 submenu 1" },
      { id: 2, label: "Menu 1 submenu 2" },
      { id: 3, label: "Menu 1 submenu 3" },
    ],
  },
  {
    id: 2,
    menu: [
      { id: 1, label: "Menu 2 submenu 1" },
      { id: 2, label: "Menu 2 submenu 2" },
      { id: 3, label: "Menu 2 submenu 3" },
    ],
  },
  {
    id: 3,
    menu: [
      { id: 1, label: "Menu 3 submenu 1" },
      { id: 2, label: "Menu 3 submenu 2" },
      { id: 3, label: "Menu 3 submenu 3" },
    ],
  },
  {
    id: 4,
    menu: [
      { id: 1, label: "Menu 4 submenu 1" },
      { id: 2, label: "Menu 4 submenu 2" },
      { id: 3, label: "Menu 4 submenu 3" },
    ],
  },
];

function App() {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [selectedSubIdx, setSelectedSubIdx] = useState(-1);
  const [openSubMenu, setOpenSubMenu] = useState({ id: -1, isOpen: false });

  const clickHandler = (idx) => {
    setSelectedIdx(idx);
    setOpenSubMenu({
      id: idx,
      isOpen: selectedIdx == idx ? !openSubMenu.isOpen : true,
    });
  };
  const subMenuClickHandler = (idx) => {
    setSelectedSubIdx(idx);
    console.log(idx);
  };

  const RenderSubMenu = ({items}) => {
    return(
      <div className='submenu'>
        {items.map((item, index)=> (
            <button key={index} onClick={()=>subMenuClickHandler(index)} className={`btn-sub ${index == selectedSubIdx ? "btn-sub-active" : ""}`}>{item.label}</button>
        ))}
      </div>
    )
  }
  return (
    <div className="container">
      <div className="sidebar">
        {menuArr.map((menu, index) => (
          <button
            className={`btn ${index == selectedIdx ? "btn-active" : ""}`}
            key={index}
            onClick={() => clickHandler(index)}
          >
            {menu.label}
          </button>
        ))}
      </div>
      {(selectedIdx === openSubMenu.id) & openSubMenu.isOpen ? (
        <RenderSubMenu items={subMenuArr[selectedIdx].menu} />
      ) : null}
    </div>
  );
}

export default App;
