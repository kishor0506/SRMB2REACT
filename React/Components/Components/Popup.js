import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ApiUrl from "../ApiUrl";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { TextField } from "../InputField/TextField";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
export default function Popup({ data, dataid, show, close,onUserAdd }) {
  const history = useHistory();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Modal show={show} onHide={close} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data
          .filter((x) => x.id == dataid)
          .map((d) => {
            return (
              <Formik
                initialValues={{
                  id: dataid,
                  firstName: d.firstName,
                  lastName: d.lastName,
                  email: d.email,
                  password: d.password,
                  confirmPassword: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  // console.log(JSON.stringify(values))
                  axios
                    .put(`${ApiUrl}Student/${dataid}`, values)
                    .then((res) => {
                      console.log(values);
                      console.log("=======")
                      onUserAdd(values);
                    })
                    .catch((err) => Swal.fire(err, "", "error"));
                  history.push("/ViewStudent");
                  close(false);
                  //   axios.post(`${ApiUrl}Student`,values).then((res)=>{
                  //     Swal.fire('GoodJOb',"","success")
                  //     setShow(false)
                  //   }).catch((err)=>Swal.fire(err,"","error"))
                }}
              >
                {(formik) => (
                  <div className="container mt-3" key={d.id}>
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="my-4 font-weight-bold .display-4">
                          Student Form
                        </h1>
                        <Form>
                          <TextField
                            label="First Name"
                            name="firstName"
                            type="text"
                          />
                          <TextField
                            label="last Name"
                            name="lastName"
                            type="text"
                          />
                          <TextField label="Email" name="email" type="email" />
                          <TextField
                            label="password"
                            name="password"
                            type="password"
                          />
                          <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                          />
                          <button className="btn btn-dark mt-3" type="submit">
                            Update
                          </button>
                          <button
                            className="btn btn-danger mt-3 ml-3"
                            type="reset"
                          >
                            Reset
                          </button>
                        </Form>
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
            );
          })}
      </Modal.Body>
    </Modal>
  );
}
