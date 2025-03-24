import {Drawer, TextField} from "@mui/material";
import SideBarItems from "./SideBarItems";
import {useState} from "react";
import {useTranslations} from "next-intl";

export default function SideBarNav({items, open, toggleSidebar}) {
  const [filteredItems, setFilteredItems] = useState(items);
  const t = useTranslations('navigation');

  const filterItems = (e) => {
    const value = e.target.value;

    const filter = (items) => {
      return items.filter((item) => {
        const matches = t(`${item.labelKey}.sidebar`).toLowerCase().includes(value.toLowerCase());
        if (item.children) {
          item.children = filter(item.children);
        }
        return matches || (item.children && item.children.length > 0);
      });
    };

    if (value === "") {
      setFilteredItems(items);
    } else {
      const filtered = filter(items);
      setFilteredItems(filtered);
    }
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <div className = {'sidebar-nav'}>
        <TextField onChange={filterItems} />
        <SideBarItems items={filteredItems} />
      </div>
    </Drawer>
  );
}
