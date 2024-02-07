import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Stack,
  Input,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { products } from "../../service/api";
import styled from "@emotion/styled";
import FilterDropdowns from "./FilterDropdowns";
// import Uploadfile from "./Uploadfile";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TableContaint = styled(Box)`
  width: 169vh;
  padding: 20px 20px;
`;

const Tablecel = styled(TableCell)`
  font-size: 20px;
  font-weight: 600;
`;

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [fileDialog, setFileDialog] = useState(false);

  // const [uploadFile, setUploadFile] = useState(false);

  const handleOpenDialog = () => {
    setFileDialog(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setFileDialog(false);
  };

  const handleUpdate = () => {
    // here is the logic to update the content
    console.log("Updated Product:", selectedProduct);
    setOpenDialog(false);
  };

  const handleDelete = (index) => {
    //logic to delete the document
    console.log("Deleted Product at index:", index);
  };

  // This is upload file code

  // const [fileData, setFileData] = React.useState([]);

  const processFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const fileContent = e.target.result;
        processData(fileContent);
      };

      reader.readAsText(file);
    } else {
      alert("Please select a file.");
    }
  };

  const handleClick = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Container>
        <Stack direction={"row"} gap={3}>
          <Box sx={{ padding: 3 }}>
            <Typography variant="h2" sx={{ color: "black" }}>
              Products{" "}
            </Typography>
          </Box>

          <Button
            sx={{ cursor: "pointer", height: 40, marginTop: 5 }}
            onClick={handleOpenDialog}
            startIcon={<UploadFileIcon />}
          >
            Upload File
          </Button>
        </Stack>
        
         <FilterDropdowns/>

        <TableContaint style={{ borderRadius: "1rem" }} component={Paper}>
          <TableContainer
            style={{ borderRadius: "1rem", border: "1px solid #263043" }}
          >
            <Table style={{ borderRadius: "1rem" }}>
              <TableHead>
                <TableRow
                  sx={{
                    border: "2px solid #263043",
                    backgroundColor: "#e5fcf5",
                  }}
                >
                  <Tablecel>Name</Tablecel>
                  <Tablecel>Address</Tablecel>
                  <Tablecel>Age</Tablecel>
                  <Tablecel>Subject</Tablecel>
                  <Tablecel>Actions</Tablecel>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ border: "2px solid #263043" }}>
                      {product.name}
                    </TableCell>
                    <TableCell sx={{ border: "2px solid #263043" }}>
                      {product.address}
                    </TableCell>
                    <TableCell sx={{ border: "2px solid #263043" }}>
                      {product.age}
                    </TableCell>
                    <TableCell sx={{ border: "2px solid #263043" }}>
                      {product.subject}
                    </TableCell>
                    <TableCell sx={{ border: "2px solid #263043" }}>
                      <Stack direction="row">
                        <Button
                          variant="contained"
                          onClick={() => handleEditClick(product)}
                        >
                          Edit
                        </Button>
                        <div className="checkbox-apple">
                          <input
                            className="yep"
                            id="check-apple"
                            type="checkbox"
                          />
                          <label htmlFor="check-apple"></label>
                        </div>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Dialog for Edit */}

          <Dialog open={fileDialog} onClose={handleDialogClose}>
            <DialogTitle>Upload File</DialogTitle>
            <DialogContent>
              <div style={{ padding: "20px", marginRight: 7 }}>
                <Input
                  type="file"
                  onChange={processFile}
                  style={{ marginRight: "10px" }}
                />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent>
              {/* <div style={{ padding: "20px", marginRight: 7 }}>
                <Input
                  type="file"
                  onChange={processFile}
                  style={{ marginRight: "10px" }}
                />
              </div> */}
              {/* {selectedProduct && ( */}
              <>
                <TextField
                  label="Name"
                  // value={selectedProduct.name}
                  // onChange={(e) =>
                  //   setSelectedProduct({
                  //     ...selectedProduct,
                  //     name: e.target.value,
                  //   })
                  // }
                  sx={{ marginBottom: 2, marginTop: 2 }} // Add spacing below this TextField
                />
                <TextField
                  label="Address"
                  // value={selectedProduct.address}
                  // onChange={(e) =>
                  //   setSelectedProduct({
                  //     ...selectedProduct,
                  //     address: e.target.value,
                  //   })
                  // }
                  sx={{ marginBottom: 2, marginTop: 2, marginLeft: 2 }} // Add spacing below this TextField
                />
                <TextField
                  label="Age"
                  // value={selectedProduct.age}
                  // onChange={(e) =>
                  //   setSelectedProduct({
                  //     ...selectedProduct,
                  //     age: e.target.value,
                  //   })
                  // }
                  sx={{ marginBottom: 2 }} // Add spacing below this TextField
                />
                <TextField
                  label="Subject"
                  // value={selectedProduct.subject}
                  // onChange={(e) =>
                  //   setSelectedProduct({
                  //     ...selectedProduct,
                  //     subject: e.target.value,
                  //   })
                  // }
                  sx={{ marginLeft: 2 }}
                />
                {/* </Dialogupdate> */}
              </>
              {/* )} */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleUpdate}>Update</Button>
              <Button onClick={handleDialogClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </TableContaint>
      </Container>
    </>
  );
};

export default Products;
