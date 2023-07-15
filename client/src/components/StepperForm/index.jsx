/** @format */

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./Form";
import { useNavigate } from "react-router";

const steps = [
     {
          title: "Sign up details",
          formData: [
               {
                    id: "firstName",
                    label: "First name",
                    autoComplete: "given-name",
                    variant: "standard",

                    type: "text",
               },
               {
                    id: "lastName",
                    label: "Last name",
                    autoComplete: "family-name",
                    variant: "standard",

                    type: "text",
               },
               {
                    id: "email",
                    label: "Email address",
                    autoComplete: "email",
                    variant: "standard",

                    type: "email",
               },
               {
                    id: "password",
                    label: "Password",
                    autoComplete: "password",
                    variant: "standard",

                    type: "password",
               },
               {
                    id: "phone",
                    label: "Phone Number",
                    autoComplete: "phone",
                    variant: "standard",

                    type: "tel",
               },
          ],
     },
     {
          title: "Affiliation details",
          formData: [
               {
                    id: "studentId",
                    label: "Student ID",
                    autoComplete: "studentId",
                    variant: "standard",

                    type: "text",
               },
               {
                    id: "graduationYear",
                    label: "Graduation Year",
                    autoComplete: "graduationYear",
                    variant: "standard",

                    type: "number",
               },
               {
                    id: "organizationName",
                    label: "Organization Name",
                    options: [
                         {
                              name: "SNSCT",
                              value: "snsct",
                         },
                         {
                              name: "SNSCE",
                              value: "snsce",
                         },
                         {
                              name: "SNS Pharmacy",
                              value: "sns_pharmacy",
                         },
                    ],
                    autoComplete: "organizationName",
                    variant: "standard",

                    type: "select",
               },
          ],
     },
     {
          title: "Profile information",
          formData: [
               {
                    id: "education",
                    label: "Education",
                    placeholder: "Eg: BE.CSE",
                    variant: "standard",

                    type: "text",
               },
               {
                    id: "skills",
                    label: "Skills",
                    placeholder: "Eg: React, NodeJS",
                    variant: "standard",

                    type: "text",
               },
               {
                    id: "currentRole",
                    label: "Current Role",
                    placeholder: "Eg: Software Engineer",
                    options: [
                         {
                              name: "Employee",
                              value: "employee",
                         },
                         {
                              name: "Student",
                              value: "student",
                         },
                         {
                              name: "Freelancer",
                              value: "freelancer",
                         },
                         {
                              name: "Other",
                              value: "other",
                         },
                    ],
                    variant: "standard",

                    type: "select",
               },
               {
                    id: "currentJob",
                    label: "Current Job",
                    placeholder: "Eg: Software Engineer",
                    variant: "standard",
                    onChange: () => {},
                    type: "text",
               },
               {
                    id: "companyName",
                    label: "Company Name",
                    placeholder: "Eg: Google",
                    variant: "standard",
                    onChange: () => {},
                    type: "text",
               },
               {
                    id: "lookingFor",
                    label: "Looking For",
                    options: [
                         {
                              name: "Job",
                              value: "job",
                         },
                         {
                              name: "Internship",
                              value: "internship",
                         },
                         {
                              name: "Freelance",
                              value: "freelance",
                         },
                         {
                              name: "Hiring",
                              value: "hiring",
                         },
                         {
                              name: "Sponsorship",
                              value: "sponsorship",
                         },
                         {
                              name: "Investors",
                              value: "investors",
                         },
                         {
                              name: "Mentorship",
                              value: "mentorship",
                         },
                    ],
                    variant: "standard",
                    onChange: () => {},
                    type: "select",
               },
          ],
     },
];

const defaultTheme = createTheme();

export default function StepperForm({ handleSubmit, credentials, setCredentials }) {
     const navigate = useNavigate();

     function getStepContent(step) {
          return (
               <Form
                    data={steps[step]}
                    credentials={credentials}
                    setCredentials={setCredentials}
               />
          );
     }
     const [activeStep, setActiveStep] = React.useState(0);

     const handleNext = () => {
          setActiveStep(activeStep + 1);
     };

     const handleBack = () => {
          setActiveStep(activeStep - 1);
     };

     return (
          <ThemeProvider theme={defaultTheme}>
               <Container
                    component="main"
                    maxWidth="sm"
                    sx={{ mb: 4 }}>
                    <Paper
                         variant="outlined"
                         sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                         <Typography
                              component="h1"
                              variant="h5"
                              align="left">
                              Register to connect with us
                         </Typography>
                         <Stepper
                              activeStep={activeStep}
                              sx={{ pt: 3, pb: 5 }}>
                              {steps.map((i) => (
                                   <Step key={i.title}>
                                        <StepLabel>{i.title}</StepLabel>
                                   </Step>
                              ))}
                         </Stepper>
                         {activeStep === steps.length ? (
                              <React.Fragment>
                                   <Typography
                                        variant="h5"
                                        gutterBottom>
                                        Thank you for connect with us
                                   </Typography>
                                   <Typography variant="subtitle1">Sign in to explore connections</Typography>
                                   <Button
                                        variant="contained"
                                        onClick={() => {
                                             handleSubmit();
                                        }}
                                        sx={{ mt: 3, ml: 1 }}>
                                        Done
                                   </Button>
                              </React.Fragment>
                         ) : (
                              <React.Fragment>
                                   {getStepContent(activeStep)}
                                   <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        {activeStep !== 0 && (
                                             <Button
                                                  onClick={handleBack}
                                                  sx={{ mt: 3, ml: 1 }}>
                                                  Back
                                             </Button>
                                        )}
                                        {activeStep === 0 && (
                                             <Button
                                                  onClick={() => navigate("/")}
                                                  sx={{ mt: 3, ml: 1 }}>
                                                  Cancel
                                             </Button>
                                        )}
                                        <Button
                                             variant="contained"
                                             onClick={handleNext}
                                             sx={{ mt: 3, ml: 1 }}>
                                             {activeStep === steps.length - 1 ? "Save" : "Next"}
                                        </Button>
                                   </Box>
                              </React.Fragment>
                         )}
                    </Paper>
               </Container>
          </ThemeProvider>
     );
}
