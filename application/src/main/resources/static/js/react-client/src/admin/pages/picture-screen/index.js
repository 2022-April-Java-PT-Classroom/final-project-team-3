import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import style from './style.module.scss';

const AdminPictureScreen = () =>{
    const xpictureName = document.querySelector("#pictureName"),
    xpictureUrl = document.querySelector("#pictureUrl"), 
    xtitle = document.querySelector("#title"), 
    xsubtitle  = document.querySelector("#subtitle"), 
    xdescription  = document.querySelector("#description"), 
    xcommentary  = document.querySelector("#commentary"),
    xup = document.querySelector("#up"),
    xpictureId = document.querySelector("#pictureId"),
    xpictureSubmit = document.querySelector("#pictureSubmit");
    ;
    //pictureName, pictureUrl, title, subtitle, description, commentary;
    const [pictureState, setPictureState] = useState({
        pictureName :"",
        pictureUrl : "",
        title : "",
        subtitle : "",
        description : "",
        commentary : ""
    });

    
    const handleReset =() => {
        xpictureName.value = "";
        xpictureUrl.value = "";
        xtitle.value = "";
        xsubtitle.value = "";
        xdescription.value = "";
        xcommentary.value = "";
        
        xup.value = "0";
        xpictureId.value = "0";
        xpictureSubmit.innerText = "Add Picture";
    }
    const handlePreUpdate = (pictureId, pictureName, pictureUrl, title, subtitle, description, commentary) => {
        xpictureName.value = pictureName;
        xpictureUrl.value = pictureUrl;
        xtitle.value = title;
        xsubtitle.value = subtitle;
        xdescription.value = description;
        xcommentary.value = commentary;

        xup.value = "up";
        xpictureId.value = pictureId;
        xpictureSubmit.innerText = "Update Picture";
    }


    const handleSubmit = (e) => {
        e.preventDefault();
       
        const pictureData = {
            pictureName : xpictureName.value,
            pictureUrl : xpictureUrl.value, 
            title : xtitle.value, 
            subtitle : xsubtitle.value, 
            description : xdescription.value, 
            commentary : xcommentary.value
        }; 
        

       // alert(up + " / " + pictureId);
        if(xup.value=="0" && xpictureId.value=="0"){
            Axios.post('http://localhost:8080/api/picture/add-picture', pictureData).then((response) => {
                console.log(response.status);
                console.log('DATA', response.data);
                setPictureState(response.data);
            });

            window.location.reload();
        } 
        if(xup.value=="up" && xpictureId.value>=0){
            Axios.put(`http://localhost:8080/api/picture/${xpictureId.value}/update-picture`, pictureData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);

                setPictureState(response.data);
            });
            window.location.reload();
        }

    };
    
    const handleDelete = (pictureId, pictureName) => {
        if(window.confirm("Delete " + pictureName + " " + pictureId +"?")){
            Axios.delete(`http://localhost:8080/api/picture/${pictureId}/delete-picture`).then((response) => {
                console.log('Delete successful');
                console.log('DATA', response.data);
                setPictureState(response.data);
            });
            window.location.reload();
        }
    }

    const [loadingPicture, setLoadingPicture] = useState(true),
    [pictures, setPictures] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/picture');
            setPictures(result.data);
        }

        if(pictures){
            setLoadingPicture(false);
        }

        const timer = setTimeout(() => {
            !pictures && fetchData(); 
        }, 2000);

        return () => clearTimeout(timer);

    },[pictures]);


    return(
        <div>
            <div className={style.picture}>
                <form onSubmit={handleSubmit}> 
                    <span id = "reset" onClick={() => handleReset()} >reset</span>
                    <input type="text" id ="pictureName" name = "pictureName"  placeholder="Enter a picture name (required)" required/>
                    <input type="text" id ="pictureUrl" name = "pictureUrl"  placeholder="Enter a picture Url (required)" required/>
                    <input type="text" id ="title" name = "title"  placeholder="Enter a title (required)" />
                    <input type="text" id ="subtitle" name = "subtitle"  placeholder="Enter a subtitle" />
                    <textarea id = "description" name = "description"  placeholder="Enter a description" />
                    <textarea id = "commentary" name = "commentary"  placeholder="Enter a commentary" />
                    <input type="hidden" id ="up" name = "up"  value="0" />
                    <input type="hidden" id ="pictureId" name = "pictureId"  value="0" />
                    <button type = "submit" id = "pictureSubmit">Add Picture</button>
                </form>
            </div>
            
            <div> 
            { loadingPicture ? <h3>Loading ...</h3> :
                <>
                    <h3>Pictures</h3>
                    <table>
                        <tr>
                            <th>Name</th><th>PictureUrl</th><th>Title</th><th>Subtitle</th>
                            <th>Description</th><th>Commentary</th><th></th><th></th>
                        </tr> 
                        {pictures.map(picture =>(
                            <tr key={picture.id}>
                                <td>{picture.pictureName}</td>
                                <td ><img src={picture.pictureUrl} width="50" title={picture.pictureUrl} /></td>
                                <td>{picture.title}</td>
                                <td>{picture.subtitle}</td>
                                <td className={style.fixLenght}>{picture.description}</td>
                                <td className={style.fixLenght}>{picture.commentary}</td>
                                <td><button onClick={() => handlePreUpdate(picture.id, picture.pictureName, picture.pictureUrl, 
                                    picture.title, picture.subtitle, picture.description, picture.commentary)}>up</button></td>
                                <td><button onClick={() => handleDelete(picture.id, picture.pictureName)}>x</button></td>
                            </tr>
                        ))}
                    </table>
                    
                </>   
             }
            </div>

            
        </div>

    );


}

export default AdminPictureScreen;