import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";

import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
    useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">SubPrice</TableCell>
            <TableCell align="center">-Del-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={row.item.image} alt="error:(" width="50" />
              </TableCell>
              <TableCell align="center">{row.item.name}</TableCell>
              <TableCell align="center">{row.item.category}</TableCell>
              <TableCell align="center">{row.item.price}</TableCell>
              <TableCell align="center">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </TableCell>
              <TableCell align="center">{row.subPrice}</TableCell>
              <TableCell align="center">
                <button onClick={() => deleteProductFromCart(row.item.id)}>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
        Total Price: {cart?.totalPrice}
        <Button
          variant="outlined"
          onClick={() => {
            // cartCleaner();
            navigate("/payment");
          }}
        >
          Buy Now
        </Button>
      </Typography>
    </TableContainer>
  );
}
