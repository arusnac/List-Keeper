import { Typography, Box, Button, TextField, Modal } from "@mui/material";
import { useState } from "react";
import { ReactElement } from "react";
import ReactDOM from "react-dom";
import uuid from "react-uuid";
import Axios from "axios";

const BASE_URL = "http://localhost:8000";
const username = "arusnac";

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
let list: { id: string; value: string }[] = [];
const AddForm = () => {
  const [items, setItems] = useState<any>([]);
  const [title, setTitle] = useState<string>();
  const [listItems, setListItems] = useState<{ id: string; value: string }[]>(
    []
  );

  //Modal state handling
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let i: any[] = [];
  const AddItem = () => {
    setItems(
      items.concat(
        <Box>
          <TextField
            id={uuid()}
            label="List Item"
            variant="standard"
            onChange={(event) => {
              addListItem(event.target);
            }}
            key={uuid()}
          />
          <Button
            sx={{ paddingTop: "10px" }}
            onClick={handleOpen}
            variant="outlined"
          >
            Add Link
          </Button>
        </Box>
      )
    );
  };

  const addList = () => {
    //console.log(title);
    //setListItems(list);
    // console.log(listItems);
    Axios.post("http://localhost:8000/list/add", {
      username,
      listItems,
      title,
    }).then((response) => {
      console.log(response);
      //   ...plantList,
      //   { name, location, watered, image: imagePath, _id: response.data._id },
      // ]);
      handleClose();
      //Clear the image path after the image has been sucessfully uploaded
      //TODO: Check if related to bug with image upload not being consistent
      // dispatch(setImagePath(""));
      // handleClick("Plant Added!", "success");
    });
  };

  const addListItem = (listItem: any) => {
    const id = listItem.id;
    const value = listItem.value;

    const i = list.findIndex(({ id }) => id === listItem.id);
    if (i !== -1) list[i].value = value;
    else list.push({ id: listItem.id, value: listItem.value });
  };

  return (
    <>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a new list
        </Typography>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}
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
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          {items}
          <Button onClick={AddItem}>Add Item</Button>
          <Button onClick={addList}>Save</Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter a url
            </Typography>
            <TextField
              id="standard-basic"
              label="URL"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button>Add</Button>
              <Button onClick={handleClose} color="warning">
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default AddForm;
