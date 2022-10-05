import Link from "next/link";
import React from "react";
import { Container, Box, Button, IconButton, CssBaseline } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Navigation.module.css";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Navigation: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <Box className={styles.navigation} sx={{ color: "blue" }}>
        <Box
          className={styles.links}
          sx={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* <p>Welcome {session?.user?.email}</p> */}
          <IconButton onClick={() => signOut()}>
            <AccountBoxIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
