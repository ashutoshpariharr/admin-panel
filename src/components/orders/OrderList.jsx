import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
// import { productsData } from "../../service/api";
import styled from "@emotion/styled";
import FilterDropdowns from "./FilterDropdowns";

const productsData = [
  {
    name: "John Doe",
    address: "123 Main St, Cityville",
    subject: "Mathematics",
    age: 25,
  },
  {
    name: "Jane Smith",
    address: "456 Oak Ave, Townsville",
    subject: "English",
    age: 30,
  },
  {
    name: "Bob Johnson",
    address: "789 Pine Blvd, Villagetown",
    subject: "Science",
    age: 22,
  },
  {
    name: "Alice Brown",
    address: "321 Cedar Ln, Hamlet City",
    subject: "History",
    age: 28,
  },
  {
    name: "Sam Wilson",
    address: "555 Elm St, Riverside",
    subject: "Computer Science",
    age: 26,
  },
  {
    name: "Eva Martinez",
    address: "888 Birch Ave, Mountainview",
    subject: "Art",
    age: 35,
  },
];

const TableContaint = styled(Box)`
  width: 169vh;
  padding: 20px 20px;
`;

const Tablecel = styled(TableCell)`
  font-size: 20px;
  font-weight: 600;
`;

function OrderList() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    subject: "",
  });
  const [products, setProducts] = useState(productsData);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDialogSubmit = () => {
    setProducts([...products, formData]);
    console.log("Form Data submitted:", formData);
    handleCloseDialog();
  };

  return (
    <div>
      <h1>This is Order History</h1>


      <FilterDropdowns/>

      <TableContaint component={Paper}>
        <TableContainer>
          <Table>
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
                    <Button variant="contained" onClick={handleOpenDialog}>
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableContaint>

      {/* Dialog for adding new order */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Order</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OrderList;
