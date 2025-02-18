import { Collapse, List, ListItem, ListItemButton } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { type NavigationItem } from "@/types";

interface NavChildrenProps {
  item: NavigationItem;
  selectItems: string[];
  handleClick: (title: string) => void;
}

export function NavItem({ item, selectItems, handleClick }: NavChildrenProps) {
  const { t } = useTranslation();
  return (
    <>
      <ListItem key={item.title} disablePadding>
        <ListItemButton
          component={item?.path ? Link : "button"}
          {...(item?.path && { to: item.path })}
          onClick={() => handleClick(item.title)}
        >
          {t(item.title)}
          {Boolean(item?.children?.length) && (
            <>
              {selectItems.includes(item.title) ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </>
          )}
        </ListItemButton>
      </ListItem>
      {item?.children && (
        <Collapse
          timeout="auto"
          unmountOnExit
          in={selectItems.includes(item.title)}
        >
          <List component="div" disablePadding sx={{ pl: 1 }}>
            {item.children.map((children) => (
              <NavItem
                key={children.title}
                item={children}
                handleClick={handleClick}
                selectItems={selectItems}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}
