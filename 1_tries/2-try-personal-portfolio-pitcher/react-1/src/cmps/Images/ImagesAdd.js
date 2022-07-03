import React,{useState} from 'react'
import {storage,db} from '../../firebase-config'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection,addDoc, serverTimestamp } from "firebase/firestore";


function ImagesAdd() {
  const [file,setFile] = useState("");
  const [imgData,setImgData] = useState({});

  const addImage= async(downloadURL)=>{
    setImgData({imgUrl:downloadURL})

    try{
      await addDoc(collection(db,"imgComponent"),
        {
          ...imgData,
          timestamp : serverTimestamp()
        }
      );
    }catch(error){
      console.log(error)
    }
  }

  const handleInputImage =  (e)=>{
    e.preventDefault();
    const name = new Date().getTime() +'_'+ file.name;
    // console.log(name)

    //uploading img to storage
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          // adding imgurl to img collection
          addImage(downloadURL);

        });
      }
    );
    // console.log(imgData)



  }
    return (
        <>
            <div className="grid">
              <div className="grid-card">
                <h1>Add Image here</h1>
                <form className="createHomeForm" onSubmit={handleInputImage}>
                  <div className="form-grid">
                  <div className="inputCD" >
                    <label>Image File(.png, .jpg, .jpeg)</label>
                    <input
                      placeholder = "Name of Project"
                      type="file"
                      id={`img`}
                      onChange = {(e)=> setFile(e.target.files[0])}
                    />
                  </div>
                  </div>


                  <button className="btn" type="submit" >Add Image</button>
                </form>



              </div>

            </div>


        </>
    )
}

export default ImagesAdd
