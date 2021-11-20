import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useContext } from "react";
import { AuthContext } from "../ContextApi/ContextProvider";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import category from "../data/in.json";

console.log(category);
const theme = createTheme();
export default function Ship() {
  //   const [data, setData] = useState(intital);
  //   const [city, setCity] = useState("");

  const { currentuser } = useContext(AuthContext);
  const [userid, setUserId] = useState(currentuser._id);
  console.log(currentuser._id);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [price, setPrice] = useState("");

  //   function handleData(e) {
  //     // if (l === undefined) {
  //     const { name, value } = e.target;
  //     setData({ ...data, [name]: value });
  //     // } else {
  //     //   const { name } = e.target;
  //     //   setData({ ...data, [name]: l });
  //     // }
  //   }
  async function handleSubmit(e) {
    e.preventDefault();
    //   console.log(from, to, phoneno);
    const data = { from: from, to: to, phoneno: phoneno, price: price };
    console.log(data);
    const res = await axios.post("http://localhost:9090/orders", data);
    console.log(res.data);
    const orderId = res.data.order._id;
    console.log(orderId);
    const list_order = await axios.put(
      `http://localhost:9090/users/orderuser/${userid}`,

      { orders: orderId }
    );
    console.log(list_order);
  }
  //   console.log(city);

  // cities start

  // cities end

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="ship">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.primary" }}>
                <LocalShippingIcon />
              </Avatar>
              <Typography component="h1" variant="h3">
                Shipping Details
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="Mobile No"
                      label="Mobile NO"
                      autoComplete="family-name"
                      onChange={(e) => setPhoneno(e.target.value)}
                      name="phoneno"
                    />
                  </Grid>
                  <Typography component="div" variant="h5">
                    From Address:
                  </Typography>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      id="addressAutocompleteField"
                      label="Address"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Town"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={category}
                      name="from"
                      renderInput={(params) => (
                        <TextField {...params} label="city" />
                      )}
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={category}
                      getOptionLabel={(option) => option.city}
                      //   getOptionSelected={(option, value) =>
                      //     option.label === value.label
                      //   }
                      //   defaultValue={category}
                      //   value={category}

                      onChange={(e, v) => setFrom(v.city)}
                      renderInput={(params) => (
                        <TextField {...params} label="city" />
                      )}
                    />
                  </Grid>
                  <Typography component="div" variant="h5">
                    To Address:
                  </Typography>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      id="addressAutocompleteField"
                      label="Address"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Town"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={category}
                      name="to"
                      //   onClick={handleData}
                      onChange={(e) => setFrom(e.target.value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="city"
                         
                        />
                      )}
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={category}
                      getOptionLabel={(option) => option.city}
                      //   getOptionSelected={(option, value) =>
                      //     option.label === value.label
                      //   }
                      //   defaultValue={category}
                      //   value={category}

                      onChange={(e, v) => setTo(v.city)}
                      renderInput={(params) => (
                        <TextField {...params} label="city" />
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <div id="package">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.primary" }}>
                <ShoppingCartOutlined />
              </Avatar>
              <Typography component="h1" variant="h3">
                Package Details
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={category1}
                      renderInput={(params) => (
                        <TextField {...params} label="Categories" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Message for Gift"
                      multiline
                      rows={2}
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Package Weight"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="dimensions"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                </Grid>
                <Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    Check Price
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
const category1 = [
  { label: "Medical Supplies" },
  { label: "Financial Documents" },
  { label: "Furniture" },
  { label: "Luggage" },
  { label: "Small consumer goods" },
  { label: "Pallet Shipments" },
  { label: "Food Products" },
  { label: "Packers and Movers" },
  { label: "Gifts" },
];
// const category = [
//   "Medical Supplies",
//   "Medical Supplies",
//   "Medical Supplies",
//   "Medical Supplies",
// ];
{
  /* <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={category}
  getOptionLabel={(option) => option.label}
  defaultValue={category}
  value={category}
  onChange={(_event, newCity) => {
    setCity(newCity);
  }}
  renderInput={(params) => <TextField {...params} label="category" />}
/>; */
}
// var timerId;
// // const handleFrom
// function throttel(c) {
//   if (timerId) {
//     return false;
//   }
//   timerId = setTimeout(() => {
//     main(c);
//     timerId = undefined;
//   }, 1000);
//   // console.log(timerId)
// }
// function main(c) {
//   searchCity(c);
// }
// function searchCity(c) {
//   const options = {
//     method: "GET",
//     url: `https://autocomplete-india.p.rapidapi.com/marketplace/autocomplete/india/cities/${city}`,
//     headers: {
//       "x-rapidapi-host": "autocomplete-india.p.rapidapi.com",
//       "x-rapidapi-key": "62e3a54a9fmshcaf6c447498edb4p19d00cjsn76642bd90203",
//     },
//   };
//   axios
//     .request(options)
//     .then(function (response) {
//       // console.log(response.data);
//       if (c === "city1") {
//         setCity1(response.data.Result);
//         console.log(city1);
//       } else {
//         setCity2(response.data.Result);
//         console.log(city2);
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }
