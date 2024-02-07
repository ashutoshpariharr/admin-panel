import styled from "@emotion/styled";
import {
    Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const products = [
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

function Payment() {
  return (
    <div>
      <h1>This is Payment</h1>

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
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Actions</TableCell>
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
                    <Button variant="contained">Add</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableContaint>
    </div>
  );
}

export default Payment;
