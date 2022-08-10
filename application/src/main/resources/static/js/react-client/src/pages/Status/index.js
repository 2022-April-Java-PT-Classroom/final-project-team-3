import React,{useEffect, useState} from "react";

import Axios from "axios";
import ImageComponent from "../../components/imageDisplay/imageComponent";

const Status = () => {

        const [loadingStatus, setStatus] = useState(true),
        [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/posts');
            setPosts(result.data);
        }

        if (posts) {
            setStatus(false);
        }

        const timer = setTimeout(() => {
            !posts && fetchData(); 
        }, 1000);
        return () => clearTimeout(timer);

    }, [posts]);


    

    return (
        <div>
          
            <div >
                
            

            </div>
            {loadingStatus ? <h3></h3> :
                <>
                    
                    
                    
                    <div >
                    {posts.map(status => (
                        <div >
                            
                            <div key={status.id}>
                            <p >Article Title: {status.userPoster}</p>
                            <p><ImageComponent url={status.foodImages}/></p>
                             <p >Status: {status.status}</p> 
                            <p >Date Created: <br /> {status.date}</p>
                               
                            </div>    
                            
                        </div>
                    ))}
                    </div>
                </>
            }

        </div>
    );
}

export default Status;