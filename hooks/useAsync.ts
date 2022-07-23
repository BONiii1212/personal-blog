import React,{ useState } from "react"

interface State<D> {
    error: Error | null;
    data: D | null;
    stat: "idle" | "loading" | "error" | "success";
}  

const defaultInitialState: State<null> = {
    stat: "idle",
    data: null,
    error: null,
};

//使用自定义hook，给异步请求添加idle｜loading｜error｜success状态
export const useAsync = <D>()=>{
    const [state,setState] = useState<State<D>>({
        ...defaultInitialState
    })
    //赋值更改状态
    const setData = (data:D)=>{
        setState({
            stat:"success",
            data:data,
            error:null,
        })
    }
    //报错时更改状态
    const setError = (error: Error)=>{
        setState({
            stat:"error",
            data:null,
            error:error
        })
    }
    //用于执行异步请求，管理状态
    const run = (promise: Promise<D>)=>{
        if(!(promise instanceof Promise)){
            throw new Error("请传入Promise类型的数据")
        }
        setState({...state,stat:"loading"}) //loading
        return promise.then((data)=>{
            setData(data)                   //success
            return data
        }).catch((error)=>{
            setError(error)                 //error
            return error
        })
    }
    return{
        isIdle: state.stat === "idle",
        isLoading: state.stat === "loading",
        isError: state.stat === "error",
        isSuccess: state.stat === "success",
        run,
        setData,
        setError,
        ...state
    }
}