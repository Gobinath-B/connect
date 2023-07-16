/** @format */
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Form({ data, credentials, setCredentials }) {
     return (
          <React.Fragment>
               <Typography
                    variant="h6"
                    gutterBottom>
                    {data.title}
               </Typography>
               <Grid
                    container
                    spacing={3}>
                    {data.formData.map((field, index) => {
                         return (
                              <Grid
                                   item
                                   xs={12}
                                   sm={6}
                                   key={index}>
                                   {field.type === "select" ? (
                                        <FormControl fullWidth>
                                             <InputLabel>{field.label}</InputLabel>
                                             <Select
                                                  labelId="demo-simple-select-label"
                                                  id={field.id}
                                                  required
                                                  defaultValue={field.label}
                                                  onChange={(e) => {
                                                       setCredentials({
                                                            ...credentials,
                                                            [field.id]: e.target.value,
                                                       });
                                                  }}
                                                  value={credentials[field.id]}
                                                  fullWidth
                                                  variant="outlined">
                                                  {field.options.map((option) => {
                                                       return <MenuItem value={option.value}>{option.name}</MenuItem>;
                                                  })}
                                             </Select>
                                        </FormControl>
                                   ) : (
                                        <>
                                             {credentials?.currentRole === "student" && (field?.id === "currentJob" || field.id === "companyName") ? null : (
                                                  <TextField
                                                       required
                                                       id={field.id}
                                                       label={field.label}
                                                       value={credentials[field.id]}
                                                       onChange={(e) => {
                                                            setCredentials({
                                                                 ...credentials,
                                                                 [field.id]: e.target.value,
                                                            });
                                                            console.log(field.id, "CREDENTIAL", credentials);
                                                       }}
                                                       fullWidth
                                                       variant="outlined"
                                                       type={field.type}
                                                  />
                                             )}
                                        </>
                                   )}
                              </Grid>
                         );
                    })}
               </Grid>
          </React.Fragment>
     );
}
