import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Axios from "axios";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Fab, Modal, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Navigation from "../components/Navigation";
import SideMenu from "../components/menu";
import List from "../components/list";
import AddForm from "../components/addForm";

const BASE_URL = "http://localhost:8000";
const username = "arusnac";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    Axios.get(BASE_URL + "/", {
      params: {
        username,
      },
    }).then((response) => {
      console.log(response);
    });
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (session) {
    return (
      <>
        <Container maxWidth={false} sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Navigation />

          <Box
            sx={{
              bgcolor: "white",
              height: "100vh",
            }}
            className={styles.homePage}
          >
            <Box className={styles.innerWrap} sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "15%",
                  backgroundColor: "#EAF4F4",
                  height: "100vh",
                  // borderRight: "solid 1px gray",
                  // borderLeft: "solid 1px gray",
                }}
              >
                <Box>
                  <SideMenu />
                </Box>
              </Box>
              <Box className={styles.contentArea}>
                <List
                  title="test title"
                  content={["Cheese", "Mushrooms", "Ground beef"]}
                  category="groceries"
                />
                <List
                  title="test title"
                  content={["Cheese", "Mushrooms", "Ground beef"]}
                  category="work"
                />
                <List
                  title="test title"
                  content={["Cheese", "Mushrooms", "Ground beef"]}
                  category="groceries"
                />
                <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
                  <Fab size="medium" color="secondary" onClick={handleOpen}>
                    <AddIcon />
                  </Fab>
                </Box>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <AddForm />
                </Modal>
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lists</title>
        <meta name="description" content="For all your list needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={() => signIn()}></button>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
};

export default Home;
