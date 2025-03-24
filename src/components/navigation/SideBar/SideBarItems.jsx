'use client'
import {useTranslations} from "next-intl";
import {Collapse, List, ListItem} from "@mui/material";
import NavIcons from "@/components/navigation/NavIcons";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import {ExpandMore, KeyboardArrowRight} from "@mui/icons-material";
import {useLocale} from "use-intl";

export default function SideBarItems({items}) {
  const locale = useLocale()
  const t = useTranslations('navigation');

  const [expandedItems, setExpandedItems] = useState({});

  const createUrl = (path) => {
    return `/${locale}/${path || ''}`;
  }

  const handleToggle = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <List>
      {items?.map((item) => {
        const NavIcon = NavIcons[item.icon] || NavIcons.HelpOutline;
        const isExpanded = expandedItems[item.id] || false;

        return (
          <ListItem key={item.id}>
            {!item.children?.length && (
              <Link href={createUrl(item.path)}>
                <NavIcon/>
                <span>{t(`${item.labelKey}.sidebar`)}</span>
              </Link>
            )}

            {item.children?.length > 0 && (
              <>
                <div onClick={() => handleToggle(item.id)}>
                  <NavIcon/>
                  <span>{t(`${item.labelKey}.sidebar`)}</span>
                  <IconButton size="small">
                    {isExpanded ? <KeyboardArrowRight/> : <ExpandMore/>}
                  </IconButton>
                </div>

                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <SideBarItems items={item.children}/>
                </Collapse>
              </>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}
