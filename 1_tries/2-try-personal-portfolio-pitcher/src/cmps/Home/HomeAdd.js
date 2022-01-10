import React,{useState} from 'react'
import {SketchPicker} from 'react-color'
import {ChromePicker} from 'react-color'



function HomeAdd() {
    const [HomeCompData,setHomeCompData] = useState({
        name:"FirstName LastName",
        photo:{
            imgUrl:"https://picsum.photos/200",
            imgDesc:"Image Desc"
        },
        position:"Full Stack Webdev",
        personalPitch:"personal pitch paragraph is this paragraph",
        theme:{
            homecompBackground:{r:0,g:0,b:0,a:100},
            nameTheme:"#ffccff",
            photoTheme:"#ffccff",
            positionTheme:"#ffcccf",
            personalPitchTheme:"#ffccff"            
        },
        ui:"ui1"
    })
    // const generateRandomColor =()=> {
    //     const hexA = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    //     let res = "#";
    //     let i;
    //     for(i=0;i<6;i++){
    //         let randNo = Math.floor(Math.random()*hexA.length)
    //         res = res + hexA[randNo]
    //     }
    //     return res;
    // }
    // const homeThemeChange = () =>{
    //     const newColor = generateRandomColor();
    //     // console.log(newColor)
    //     setHomeCompData({...HomeCompData,theme:{homecompBackground:newColor}});
    //     // console.log(HomeCompData)
    // }
    // const nameThemeChange = ()=>{
    //     const newColor = generateRandomColor();
    //     setHomeCompData({...HomeCompData,theme:{nameTheme:newColor}})
    // }
    // const positionThemeChange = ()=>{
    //     const newColor = generateRandomColor();
    //     setHomeCompData({...HomeCompData,theme:{positionTheme:newColor}})
    // }
    // const personalPitchThemeChange = ()=>{
    //     const newColor = generateRandomColor();
    //     setHomeCompData({...HomeCompData,theme:{personalPitchTheme:newColor}})
    // }
    // const photoThemeChange = ()=>{
    //     const newColor = generateRandomColor();
    //     setHomeCompData({...HomeCompData,theme:{photoTheme:newColor}})
    // }

    return (
        <div className="HomeAdd">
            
            <div className="createHomeForm">
                <h2>Home Component Data</h2>
                <div className="form-grid">
                    <div className="inputCD">
                        <label>Name:</label>
                        <input placeholder="Full Name"></input>
                    </div>

                    <div className="inputCD">
                        <label>Position:</label>
                        <input placeholder="(Ex.Full Stack Developer)"></input>
                    </div>
                    <div className="inputCD">
                        <label>Personal Pitch:</label>
                        <input placeholder="Personal Pitch"></input>
                    </div>
                    <div className="inputCD">
                        <label>Image URL:</label>
                        <input placeholder="Image URL"></input>
                    </div>
                    {/* <div className="inputCD">
                        <label>Image Description:</label>
                        <input placeholder="Full Name"></input>
                    </div> */}
                </div>
            </div>
            <div className="HomeView">
                <div>
                    <div className="themeGrid">
                        <div className="tgComp">
                            <h3>Home Background</h3>
                            {/* <button className="btn-sm" onClick={homeThemeChange}>Change</button> */}
                            <SketchPicker
                                color={HomeCompData.theme.homecompBackground}
                                onChange={newColor => {setHomeCompData({...HomeCompData,theme:{...HomeCompData.theme,homecompBackground:newColor.rgb}}) 
                                    // console.log(HomeCompData)
                                } }
                            />
                        </div>
                        <div className="tgComp">
                            <h3>Name Color</h3>
                            {/* <button className="btn-sm" onClick={nameThemeChange}>Change</button> */}
                            <ChromePicker
                                color={HomeCompData.theme.nameTheme}
                                onChange={newColor=>setHomeCompData({...HomeCompData,theme:{...HomeCompData.theme,nameTheme:newColor.hex}})}
                            />
                        </div>
                        <div className="tgComp">
                            <h3>Position Color</h3>
                            {/* <button className="btn-sm" onClick={positionThemeChange}>Change</button> */}
                            <ChromePicker
                                color={HomeCompData.theme.positionTheme}
                                onChange={newColor=>setHomeCompData({...HomeCompData,theme:{...HomeCompData.theme,positionTheme:newColor.hex}})}
                            />
                        </div>
                        <div className="tgComp">
                            <h3>Personal Pitch Color</h3>
                            {/* <button className="btn-sm" onClick={personalPitchThemeChange}>Change</button> */}
                            <ChromePicker
                                color={HomeCompData.theme.personalPitchTheme}
                                onChange={newColor=>setHomeCompData({...HomeCompData,theme:{...HomeCompData.theme,personalPitchTheme:newColor.hex}})}
                            />
                        </div>
                        <div className="tgComp">
                            <h3>Image Border Color</h3>
                            {/* <button className="btn-sm" onClick={photoThemeChange}>Change</button> */}
                            <ChromePicker
                                color={HomeCompData.theme.photoTheme}
                                onChange={newColor=>setHomeCompData({...HomeCompData,theme:{...HomeCompData.theme,photoTheme:newColor.hex}})}
                            />
                        </div>

                        <div className="tgComp">
                                <h3>Select User Interface </h3>
                                <button className="btn-sm" onClick={()=>{setHomeCompData({...HomeCompData,ui:"ui1"})}}>UI 1</button>
                                <button className="btn-sm" onClick={()=>{setHomeCompData({...HomeCompData,ui:"ui2"})}}>UI 2</button>
                                <button className="btn-sm" onClick={()=>{setHomeCompData({...HomeCompData,ui:"ui3"})}}>UI 3</button>
                                <button className="btn-sm" onClick={()=>{setHomeCompData({...HomeCompData,ui:"ui4"})}}>UI 4</button>
                        </div>  


                    </div>

                    <div className="submit-div">
                        <h3>Confirm Data , Theme , UI </h3>
                        <button className="btn">Confirm</button>
                    </div>
                    
                </div>
                <div className={HomeCompData.ui} 
                    style={{backgroundColor:`rgba(${HomeCompData.theme.homecompBackground.r},${HomeCompData.theme.homecompBackground.g},${HomeCompData.theme.homecompBackground.b},${HomeCompData.theme.homecompBackground.a})`}}
                >
                    <h1 style={{color:`${HomeCompData.theme.nameTheme}`}} >{HomeCompData.name}</h1>
                    <h2 style={{color:`${HomeCompData.theme.positionTheme}`}}>{HomeCompData.position}</h2>
                    <p style={{color:`${HomeCompData.theme.personalPitchTheme}`}}>{HomeCompData.personalPitch}</p>
                    <img src={HomeCompData.photo.imgUrl} style={{border:`2px solid ${HomeCompData.theme.photoTheme}`}} />
                    {/* <h3 style={{color:`${HomeCompData.theme.photoTheme}`}}>{HomeCompData.photo.imgDesc}</h3> */}
                </div>
         
            {/* {<pre>
                {JSON.stringify(HomeCompData, null, 2)}
            </pre>} */}
            </div>
        </div>
    )
}

export default HomeAdd
