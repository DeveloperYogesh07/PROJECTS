import React, { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEqAfLJc5_lAOy0Lezt0VN8ZRJJJy0veqBBU4kKldlg&s"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfo">
          <span>1 Hour 14 Mins</span>
          <span className="limit">16+</span>
          <span>2020</span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi
          non fugit porro, assumenda asperiores tempora! Cupiditate at nostrum
          numquam?
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
