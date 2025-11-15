import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

export default function Firestorage({path}) {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    try {
      // Path to your file in Firebase Storage
      const storageRef = ref(storage, path);

      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="LSMT Logo" style={{ width: "200px" }} />
      ) : (
        <p>Error Loading</p>
      )}
    </div>
  );
}
