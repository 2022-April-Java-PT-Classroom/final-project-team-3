import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import style from './style.module.scss';
import NeedLogin from "../../../components/need-login";

const AdminContentScreen = () => {
    // contentName, title, subtitle, description, commentary, content
    const
        xcontentId = document.querySelector("#contentId"),
        xcontentName = document.querySelector("#contentName"),
        xtitle = document.querySelector("#title") ,
        xsubtitle = document.querySelector("#subtitle") ,
        xdescription = document.querySelector("#description") ,
        xcommentary = document.querySelector("#commentary") ,
        xup = document.querySelector("#up"),
        xcontent = document.querySelector("#content") ,
        xpictureId = document.querySelector("#pictureId") ,
        xcontentSubmit =  document.querySelector("#contentSubmit") ;


    const [contentState, setContentState] = useState({
        contentName : "",
        title : "",
        subtitle : "",
        description : "",
        commentary : "",
        content : ""
    });
        
    const handleReset =() => {
        xcontentName.value = "";
        xtitle.value = "";
        xsubtitle.value = "";
        xdescription.value = "";
        xcommentary.value = "";
        xcontent.value = "";
        
         for (const o of xpictureId.options) {
            o.selected = false;
        }

        xup.value = "0";
        xcontentId.value = "";
        xcontentSubmit.innerText = "Add Content";
    }

    const handlePreUpdate = (contentId, contentName, title, subtitle, description, commentary, content, pictures) => {
        
        xcontentName.value = contentName;
        xtitle.value = title;
        xsubtitle.value = subtitle;
        xdescription.value = description;
        xcommentary.value = commentary; 
        xcontent.value = content; 
        
        for (const o of xpictureId.options) {
            o.selected = false;
        }
        
        //
        for (const o of xpictureId.options) {
        for(const i of pictures)
        if (i.id == o.value) {
            o.selected = true
        }
        }
        xup.value = "up";
        xcontentId.value = contentId;
        xcontentSubmit.innerText = "Update Content";
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        var z =""; var i=0;
        for (const o of xpictureId.options) {
        if (o.selected == true) 
        {
            if(i>0) z+=",";
          z +=o.value;
          i++;
        }
      }
      const xpictureIds = z;
        const contentData = {
            contentName : xcontentName.value,
            title : xtitle.value,
            subtitle : xsubtitle.value,
            description : xdescription.value,
            commentary : xcommentary.value,
            content : xcontent.value,
            pictureId: xpictureIds
        }; 
        

        console.log(contentData);
        if(xup.value=="0" && xcontentId.value=="0"){
            Axios.post('http://localhost:8080/api/content/add-content', contentData).then((response) => {
                console.log(response.status);
                console.log('DATA', response.data);
                setContentState(response.data);
            });

            window.location.reload();
        } 
        if(xup.value=="up" && xcontentId.value>=0){
            Axios.put(`http://localhost:8080/api/content/${xcontentId.value}/update-content`, contentData).then((response) => {
                console.log('Update successful');
                console.log('DATA', response.data);

                setContentState(response.data);
            });
            window.location.reload();
        }

    };
    
    const handleDelete = (contentId, contendName) => {
        if(window.confirm("Delete " + contendName  + " " + contentId +"?")){
            Axios.delete(`http://localhost:8080/api/content/${contentId}/delete-content`).then((response) => {
                console.log('Delete successful');
                console.log('DATA', response.data);
                setContentState(response.data);
            });
            window.location.reload();
        }
    }

    const [loadingContent, setLoadingContent] = useState(true),
    [contents, setContents] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await Axios('http://localhost:8080/api/content');
            setContents(result.data);
        }

        if(contents){
            setLoadingContent(false);
        }

        const timer = setTimeout(() => {
            !contents && fetchData(); 
        }, 1000);

        return () => clearTimeout(timer);

    },[contents]);

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
        }, 1000);

        return () => clearTimeout(timer);

    },[pictures]);



    return(
        <div>
            <NeedLogin/>
            <div className={style.content}>
                <form onSubmit={handleSubmit}>  
                    <span id = "reset" onClick={() => handleReset()} >reset</span>
                    <input type="text" id ="contentName" name = "contentName"  placeholder="Enter content Name (required)" required/>
                    <input type="text" id ="title" name = "title"  placeholder="Enter title" />
                    <input type="text" id ="subtitle" name = "subtitle"  placeholder="Enter subtitle" />
                    <textarea id = "description" name = "description"  placeholder="Enter description" />
                    <textarea id = "commentary" name = "commentary"  placeholder="Enter  commentary" />
                    <textarea id = "content" name = "content"  placeholder="Enter content" />
                    <input type="hidden" id ="up" name = "up"  value="0" />
                    <input type="hidden" id ="contentId" name = "contentId"  value="0" />
                    { loadingPicture ? <h3>Loading ...</h3> :
                        <select id="pictureId" name="pictureId" multiple required>
                            <option disabled>Please Select Picture (required)</option>
                        {pictures.map(picture =>(
                            <option key={picture.id} value={picture.id}>{picture.pictureName}</option> 
                            // style={{background:`url(${picture.pictureUrl})no-repeat`, backgroundSize:"10%",backgroundPositionX:"right", margin:"5px"}} 
                        ))}
                        </select>
                    }
                    <button type = "submit" id = "contentSubmit">Add Content</button>
                </form>
            </div>
            
            <div> 
            { loadingContent ? <h3>Loading ...</h3> :
                <>
                    <h3>Contents</h3>
                    <table>
                        <tr>
                            <th>Name</th><th>title</th>
                            <th>subtitle</th><th>description</th>
                            <th>commentary</th><th>content</th>
                            <th>picture</th><th></th><th></th>
                        </tr>
                        {contents.map(content =>(
                            <tr key={content.id}>
                                <td>{content.contentName}</td>
                                <td>{content.title}</td>
                                <td>{content.subtitle}</td>
                                <td className={style.fixLenght}>{content.description}</td>
                                <td className={style.fixLenght}>{content.commentary}</td>
                                <td className={style.fixLenght}>{content. content}</td>
                                
                                <td style={{width:"120px"}}>
                                {content.pictures.map(picture =>(
                                     <li key={picture.id}>{picture.pictureName} <img src={picture.pictureUrl} className={style.img} /></li>
                                    // <div key={picture.id} className={style.pictures}>
                                    //     <div >{picture.pictureName}</div><div ><img src={picture.pictureUrl} className={style.img} /></div>
                                    // </div>
                                 ))}
                                </td>
                                <td><button onClick={() => handlePreUpdate(content.id, content.contentName, content.title, content.subtitle, content.description, content.commentary, content.content, content.pictures)}>up</button></td>
                                <td><button onClick={() => handleDelete(content.id, content.contentName)}>x</button></td>
                            </tr>
                        ))}
                    </table>
                    
                </>   
             }
            </div>

            
        </div>

    );


    
}

export default AdminContentScreen;