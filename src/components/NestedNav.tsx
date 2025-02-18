import { useState } from "react";
import { Box, List } from "@mui/material";
import { NavItem } from "./NavItem";
import { MENU_WITH, navItems } from "@/constants";

export function NestedNav() {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleClick = (title: string) => {
    setCheckedList((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      }
      return [...prev, title];
    });
  };
  return (
    <Box
      sx={{
        position: "fixed",
        minHeight: "100vh",
        width: MENU_WITH,
        left: 0,
        top: 0,
        backgroundColor: "antiquewhite",
      }}
    >
      <List>
        {navItems.map((item) => (
          <NavItem
            key={item.title}
            handleClick={handleClick}
            item={item}
            selectItems={checkedList}
          />
        ))}
      </List>
    </Box>
  );
}
