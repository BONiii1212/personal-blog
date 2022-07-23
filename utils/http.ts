const http = async(url : string, {headers, ...customConfig }: RequestInit = {})=>{
    const config = {
        method:"GET",
        headers: {
            "Content-Type": customConfig.body ? "application/json" : "",
            'Access-Control-Allow-Origin':'*',
            withCredentials:true
        },
        ...customConfig,
    }
    // @ts-ignore
    return fetch(url,config)
    .then(async (response)=>{
        const data = await response.json()
        if(response.ok){
            return data
        }else{
            // 异常捕获
            return Promise.reject(data)
        }
    })
}

export default http