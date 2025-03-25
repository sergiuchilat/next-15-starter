'use client'
import {List} from "@mui/material";
import {useState} from "react";
import Item from "@/components/navigation/SideBar/Item";

export default function SideBarItems({items}) {
  const [expandedItems, setExpandedItems] = useState({});

  const handleToggle = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <List>
      {
        items?.map((item) => (
            <Item
              item={item}
              isExpanded={expandedItems[item.id] || false}
              handleToggle={handleToggle}
              key={item.id}
            />
          )
        )
      }
    </List>
  );
}
