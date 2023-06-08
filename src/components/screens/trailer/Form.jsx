import React from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "messages"), {
        timestamp: serverTimestamp(),
        userName: data.userName,
        userMessage: data.userMessage,
      });
    } catch (error) {
      alert(error);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-black">
      <input
        className="w-full py-2 px-4 outline-none mb-5"
        type="text"
        placeholder="Plz enter your name"
        maxLength={50}
        {...register("userName", { required: true })}
      />
      {errors.userName && (
        <span className="text-red-700">plz fill name field</span>
      )}
      <textarea
        className="w-full py-2 px-4 outline-none mb-5"
        type="text"
        placeholder="Enter your comments"
        maxLength={1000}
        rows={3}
        {...register("userMessage", { required: true })}
      />
      {errors.userMessage && (
        <span className="text-red-700">plz fill message field</span>
      )}
      <input
        type="submit"
        value="Add"
        className="hover-text-white block border-none py-2 px-4 outline-none mx-auto cursor-pointer bg-pink-800"
        style={{ minWidth: 140 }}
      />
    </form>
  );
};

export default Form;
