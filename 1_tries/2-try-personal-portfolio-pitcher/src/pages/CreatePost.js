import React from 'react'
import HomeAdd from '../cmps/Home/HomeAdd'
import ImageAdd from '../cmps/Images/ImagesAdd'
import ImageView from '../cmps/Images/ImagesView'
function CreatePost() {
    return (
        <div className="createPage">
            <h1>Add to Components</h1>
            <hr></hr>
            <HomeAdd/>
            <ImageAdd/>
            <ImageView/>
        </div>
    )
}

export default CreatePost
