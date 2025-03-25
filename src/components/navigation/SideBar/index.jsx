import {debounce, Drawer, TextField} from "@mui/material";
import SideBarItems from "./Items";
import {useState} from "react";
import {useTranslations} from "next-intl";

export default function SideBar({items, toggleSidebar}) {
  const [filteredItems, setFilteredItems] = useState(items);
  const t = useTranslations('navigation');
  console.log(items)
  const filterItems = (e) => {
    console.log('filterItems', e.target.value);
    const value = e.target.value;

    const filter = (unfilteredItems) => {
      return unfilteredItems.filter((item) => {
        const matches = t(`${item.labelKey}.sidebar`).toLowerCase().includes(value.toLowerCase());
        if (item.children) {
          item.children = [...filter(item.children)];
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
    <Drawer anchor="left" open onClose={toggleSidebar}>
      <div className={'sidebar-nav'}>
        <TextField onChange={filterItems}/>
        <SideBarItems items={filteredItems}/>
      </div>
    </Drawer>
  );
}
