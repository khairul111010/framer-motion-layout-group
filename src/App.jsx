import { useState } from "react";
import "./App.css";
import { LayoutGroup, motion  } from "framer-motion";

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export default function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(colors[0]);

  return (
    <LayoutGroup>
      <ul>
        {colors.map((color) => (
          <Item
            key={color}
            color={color}
            isSelected={selected === color}
            onClick={() => setSelected(color)}
          />
        ))}
      </ul>
    </LayoutGroup>
  );
}


function Item({ color, isSelected, onClick }) {
  return (
    <li className="item" onClick={onClick} style={{ backgroundColor: color }}>
      {isSelected && (
        <motion.div
          layoutId="modal"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  );
}