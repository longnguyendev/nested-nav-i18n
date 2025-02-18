import { NestedNav } from "@/components";
import { LANGUAGES, MENU_WITH } from "@/constants";
import { onChangeLang } from "@/helpers";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

export function BaseLayout() {
  const defaultLang = localStorage.getItem("lang") ?? "en";
  return (
    <Box sx={{ display: "flex", minWidth: "100vw" }}>
      <NestedNav />
      <Box
        sx={{
          minHeight: "100vh",
          width: `calc(100vw - ${MENU_WITH}px)`,
          marginLeft: `${MENU_WITH}px`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="select"
          defaultValue={defaultLang}
          onChange={onChangeLang}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </Box>
        <br />
        <Outlet />
      </Box>
    </Box>
  );
}
