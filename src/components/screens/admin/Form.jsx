import React from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db} from "../../../firebase";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
        await addDoc(collection(db, 'series'),{
          timestamp: serverTimestamp(),
            thumbnailPath: data.thumbnailPath,
            videoUrl: data.videoUrl,
        })
    } catch (error) {
        alert(error)
    }
    reset();
  };

  return (
    <div
      className="py-10 px-20"
      style={{ background: "rgba(0,0,0,0.5)", width: "45%" }}
    >
      <h2 className="mb-8 text-white font-bold text-2xl text-center">
        Add new series
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter thumbnail path"
          className="w-full py-2 px-4 outline-none block mb-5 text-white"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          {...register("thumbnailPath", { required: true })}
        />
        {errors.thumbnailPath && (
          <span className="text-red-700">plz fill thumbnailpath field</span>
        )}
        <input
          type="text"
          placeholder="Enter video url"
          className="w-full py-2 px-4 outline-none block mb-5 text-white"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          {...register("videoUrl", { required: true })}
        />
        {errors.videoUrl && (
          <span className="text-red-700">plz fill video url field</span>
        )}

        <input
          type="submit"
          value="Add"
          className="hover-text-white block border-none py-2 px-4 outline-none mx-auto mt-10 cursor-pointer bg-pink-800"
          style={{ minWidth: 140 }}
        />
      </form>
    </div>
  );
};

export default Form;
