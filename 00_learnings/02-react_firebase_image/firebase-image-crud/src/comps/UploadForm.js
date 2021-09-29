import React,{useState} from 'react';
import ProgressBar from './ProgressBar';


const UploadForm =()=>{
    const [file,setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes =['image/png','image/jpeg','image/jpg'];

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        // console.log(selected)
        if(selected && allowedTypes.includes(selected.type) && selected.size <5000000){
            setFile(selected);
            setError(null);
        }else{
            setFile(null);
            setError('Please select image file(png or jpeg or jpg)');
        }

        if(!(selected.size <5000000 )){
            setFile(null);
            setError('Please select image file size <5MB')
        }
    }
    return (
        <form>

            <input type="file" onChange={changeHandler}/>
            {/* <pre>{file}</pre> */}
            <div className="output">
                {error && <div className="error">
                    {error}
                </div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}

            </div>
        </form>
    )
}
export default UploadForm;