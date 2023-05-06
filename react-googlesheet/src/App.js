import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useRef } from "react";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        "https://sheet.best/api/sheets/177e2a10-76dd-4824-af7c-7cceb861cd8f",
        data
      )
      .then((response) => {
        alert("added successfully");
        console.log(response);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
        placeholder="FirstName"
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}

      <input
        {...register("lastName", { required: true })}
        aria-invalid={errors.lastName ? "true" : "false"}
        placeholder="lastName"
      />
      {errors.lastName?.type === "required" && (
        <p role="alert">Last name is required</p>
      )}

      <input
        label="age"
        {...register("age", { required: "Age Address is required" })}
        aria-invalid={errors.age ? "true" : "false"}
        placeholder="Age"
      />
      {errors.age && <p role="alert">{errors.age?.message}</p>}

      <input
        {...register("salary", { required: true })}
        aria-invalid={errors.salary ? "true" : "false"}
        placeholder="Salary"
      />
      {errors.salary?.type === "required" && (
        <p role="alert">Salary name is required</p>
      )}

      <input
        label="hobby"
        {...register("hobby", { required: "hobby Address is required" })}
        aria-invalid={errors.hobby ? "true" : "false"}
        placeholder="Hobby"
      />
      {errors.Hobby && <p role="alert">{errors.hobby?.message}</p>}

      <input type="submit" />
    </form>
  );
}
