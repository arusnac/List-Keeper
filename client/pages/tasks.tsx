import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { ITask } from "../types";
import {
  Button,
  Container,
  Box,
  Modal,
  Fade,
  Typography,
  Backdrop,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Tasks: React.FC = () => {
  const BASE_URL = "http://localhost:8000";
  const username = "arusnac";
  const [taskList, setTaskList] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    Axios.get(BASE_URL + "/", {
      params: {
        username,
      },
    }).then((response) => {
      console.log(response.data.tasks);
      setTaskList(response.data.tasks);
    });
  }, []);
  return (
    <>
      <Container maxWidth={false} sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navigation />
        <div className={styles.taskPage}>
          <div>
            Tasks
            <Button onClick={handleOpen}>Add Task</Button>
          </div>
          <div>
            <ul>
              {taskList.map((task: ITask) => {
                return (
                  <li key={task.title}>
                    {task.title} --- {task.content}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Add Task
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Add a title and description for your task. Optionally add a time
                component.
              </Typography>
              <FormGroup>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-static"
                    label="Content"
                    multiline
                    rows={5}
                    variant="standard"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Add deadline"
                  />
                  <Button>Save</Button>
                  <Button>Cancel</Button>
                </Box>
              </FormGroup>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </>
  );
};

export default Tasks;
