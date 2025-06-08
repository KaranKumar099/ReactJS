import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState("");

    useEffect(() => {
      // Call the async function inside useEffect
      githubInfoLoader().then(res => {
        setData(res);
      });
    }, []);

    return(
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github followers: {data.followers}
                <br />
                Github following: {data.following}
                <img src={data.avatar_url} alt="Git picture" width={300} />
                No. of repos: {data.public_repos}
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = (await fetch('https://api.github.com/users/KaranKumar099'))
    let res= await response.json();
    // console.log(res.public_repos)
    return res;
}