import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "./useSubmit";

function Forms() {
  const navigate = useNavigate();
  const { isLoading, response, submit } = useSubmit();
  const today = new Date();
  const currentDate =
    today.getFullYear() + "-" + today.getMonth() + 1 + "-" + today.getDate();
  const phoneRegex = RegExp(/^\(?([0-9]{4})\)?[-. ]?([0-9]{4})$/);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      numPeople: 1,
      bookDate: new Date(),
      occasion: "None",
      chosentime: "17:00",
    },
    onSubmit: (values) => {
      submit("https://alvink.com/booking", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters"),
      lastName: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(phoneRegex, "Invalid phone")
        .required("Phone is required"),
      numPeople: Yup.number().min(1, "At least 1 people"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        formik.resetForm();
        navigate("/confirmation");
      }
    }
  }, [response]);

  return (
    <div className="center">
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} className="center">
            <FormControl
              className="center"
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel htmlFor="fname">First Name</FormLabel>
              <Input
                id="fname"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              className="center paddingPage"
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            >
              <FormLabel htmlFor="lname">Last Name</FormLabel>
              <Input
                id="lname"
                name="lastName"
                {...formik.getFieldProps("lastName")}
              />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl
              className="center paddingPage"
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                {...formik.getFieldProps("email")}
              ></Input>
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              className="center paddingPage"
              isInvalid={formik.errors.phone && formik.touched.phone}
            >
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                id="phone"
                name="phone"
                placeholder="XXXX-XXXX"
                {...formik.getFieldProps("phone")}
              ></Input>
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>

            <FormControl
              className="center paddingPage"
              isInvalid={formik.errors.numPeople && formik.touched.numPeople}
            >
              <FormLabel htmlFor="numPeople">Number of people</FormLabel>
              <Input
                id="numPeople"
                name="numPeople"
                type="number"
                min={1}
                {...formik.getFieldProps("numPeople")}
              ></Input>
              <FormErrorMessage>{formik.errors.numPeople}</FormErrorMessage>
            </FormControl>
            <FormControl
              className="center paddingPage"
              isInvalid={formik.errors.bookDate && formik.touched.bookDate}
            >
              <FormLabel htmlFor="date">Select date</FormLabel>
              <Input
                id="date"
                name="bookDate"
                type="date"
                min={new Date().toJSON().slice(0, 10)}
                {...formik.getFieldProps("bookDate")}
              ></Input>
            </FormControl>
            <FormControl className="center paddingPage">
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
              >
                <option value="NA">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>

            <FormControl className="center paddingPage">
              <FormLabel htmlFor="Time">Time</FormLabel>
              <Select id="Time" name="Time" {...formik.getFieldProps("Time")}>
                <option value="1700">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
              </Select>
            </FormControl>
            <Button
              className="paddingPage"
              type="submit"
              colorScheme="purple"
              width="full"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </form>
        </Box>
      </VStack>
    </div>
  );
}

export default Forms;
