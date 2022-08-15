import React,{useEffect, useState} from "react";

import Axios from "axios";
import ImageComponent from "../../components/imageDisplay/imageComponent";
import StatusForm from "./StatusForm";

const StatusPost = () => {

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
                    <StatusForm/>
                    
                    
                    <div >
                    {posts.map(status => (
                        <div >
                            
                            <div key={status.id}>
                            <p><ImageComponent url={status.foodImages}/></p>
                            {/* <p >UserName: {status.userPoster}</p> */}
                            <p >Status: {status.status}</p> 
                            
                               
                            </div>    
                            
                        </div>
                    ))}
                    </div>
                </>
            }

        </div>
    );
}

export default StatusPost;