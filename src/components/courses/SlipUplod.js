import axios from "axios";
import { useState } from "react";

const SlipUplod = () => {
  const [file, setFile] = useState("");
  const [semester, setsemester] = useState("Fall 2021");
  const [fileName, setFileName] = useState("");
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("semester", semester);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/courses/slip",
        formData
      );
      console.log(res.data);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default SlipUplod;
