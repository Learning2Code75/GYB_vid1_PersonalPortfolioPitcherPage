import React from 'react'
import HomeAdd from '../cmps/Home/HomeAdd'
// import Certificate from '../cmps/Certificate/CertificateAdd';

import ImageAdd from '../cmps/Images/ImagesAdd'
import ImageView from '../cmps/Images/ImagesView'
import CreateHeader from '../cmps/CreateHeader'
function CreatePost() {
    return (
        <div className="createPage">
            <h1>Update and Preview Components</h1>
            <CreateHeader
                content="Home Component"
            />
            <HomeAdd/>

            <CreateHeader
                content="About Component"
            />
            <ul>
                <li>Current position</li>
                <li>Dev langs</li>
                <li>Database</li>
                <li>soft skills</li>
             </ul>
            <CreateHeader
                content="Contact Component"
            />
            <ul>
                <li>email</li>
                <li>number</li>
                <li>address</li>
                <li>linked in </li>
                <li>github </li>
             </ul>

             <h1>Add,Update,Delete and Preview Components</h1>
            <CreateHeader
                content="Certificates Component"
            />
            
            <ul>
                <li>title, organization 1, link </li>
                <li>title, organization 2, link </li>
             </ul>

            <CreateHeader
                content="Language Component"
            />

            <ul>
                <li>lang1 </li>
                <li>lang2 </li>
                <li>lang3 </li>
                <li>lang4 </li>

             </ul>

            <CreateHeader
                content="Interests Component"
            />
            <ul>
                <li>intersts1 </li>
                <li>intersts2 </li>
                <li>intersts3 </li>
                <li>intersts4 </li>
            </ul>

            <CreateHeader
                content="Education"
            />
            <ul>
                <li>10th  :CNMS date to from</li>
                <li>12th  :GPM date to from</li>
                <li>B.Tech CSE from VIT date to from</li>

            </ul>

            <CreateHeader
                content="Work Experience"
            />
            <ul>
                <li>position , compnay name, date : from to, place, achievement 1</li>
                <li>position , compnay name, date : from to, place, achievement 2</li>
                <li>position , compnay name, date : from to, place, achievement 3</li>
                <li>position , compnay name, date : from to, place, achievement 4</li>
                <li>position , compnay name, date : from to, place, achievement 5</li>
            </ul>

            <CreateHeader
                content="Project Component"
            />
            <h1>this project - portfolio builder product</h1>
            <div>-</div>
            <h1>grow your business product</h1>
            <div>-</div>

            <h1>crm product </h1>
            <div>-</div>

            <h1>Sem 1--> sem 6 projects </h1>
            <div>-</div>

            <h1>Freelancing projects  </h1>

            <ul>
                <li>invoice - bakery shop</li>
                <li>sales order - kiaana</li>

            </ul>
            <div>-</div>




            <ul>
                <li>name, date, description , photo, link to pitcher , actual link , github link 1 </li>
                <li>name, date, description , photo, link to pitcher , actual link , github link 2 </li>
                <li>name, date, description , photo, link to pitcher , actual link , github link 3 </li>
                <li>name, date, description , photo, link to pitcher , actual link , github link 4 </li>


            </ul>

            <CreateHeader
                content="Pitcher Page for Project x"
            />
            <ul>
                <li> (all of work card) + [title,subtitle, image, text, list, link] </li>
            </ul>

            <h1>Add,Update,Delete and View Components</h1>

            <CreateHeader
                content="Images Component"
            />
            <ImageAdd/>
            <ImageView/>
        </div>
    )
}

export default CreatePost
