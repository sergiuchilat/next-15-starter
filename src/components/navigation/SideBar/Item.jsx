import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import {ExpandMore, KeyboardArrowRight} from "@mui/icons-material";
import {Collapse, ListItem} from "@mui/material";
import NavIcons from "@/components/navigation/NavIcons";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";
import SideBarItems from "@/components/navigation/SideBar/Items";

export default function SideBarItem({item, isExpanded, handleToggle}){
  const locale = useLocale()
  const t = useTranslations('navigation');

  const NavIcon = NavIcons[item.icon] || NavIcons.HelpOutline;

  const createUrl = (path) => {
    return `/${locale}/${path || ''}`;
  }

  return (
    <ListItem>
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
  )
}
