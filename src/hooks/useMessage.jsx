import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "messages"), orderBy("timestamp", "asc")),
        (snapshot) => {
            setMessages(
            snapshot.docs.map((doc) => ({
              _id: doc.id,
              ...doc.data(),
            }))
          );
        }
      ),
    []
  );
  return [messages, setMessages]
};
