import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//custom
import { useProducts } from "../../../contexts/ProductContextProvider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const FilterProduct = () => {
  const { fetchByParams } = useProducts();

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            className="label-filter"
          >
            CATEGORIES
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
            className="radio-btns"
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="Brandy"
              control={<Radio />}
              label="Brandy"
            />
            <FormControlLabel value="Vodka" control={<Radio />} label="Vodka" />
            <FormControlLabel
              value="Whiskey"
              control={<Radio />}
              label="Whiskey"
            />
            <FormControlLabel value="Rum" control={<Radio />} label="Rum" />
            <FormControlLabel
              value="Tequila"
              control={<Radio />}
              label="Tequila"
            />
            <FormControlLabel value="Gin" control={<Radio />} label="Gin" />
            <FormControlLabel
              value="Red Wine"
              control={<Radio />}
              label="Red Wine"
            />
            <FormControlLabel
              value="White Wine"
              control={<Radio />}
              label="White Wine"
            />
            <FormControlLabel
              value="Champagne"
              control={<Radio />}
              label="Champagne"
            />
            <FormControlLabel
              value="Absinthe"
              control={<Radio />}
              label="Absinthe"
            />
            <FormControlLabel
              value="Cognac"
              control={<Radio />}
              label="Cognac"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default FilterProduct;
