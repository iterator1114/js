function stringify(data){
    if (typeof data === "function"){
        return undefined
    }else if(typeof data === "string"){
        return `"${data}"`
    }else if(data === Infinity || data === -Infinity || data === undefined || data === null){
        return null
    }else if(typeof data === "number" || typeof data === 'boolean'){
        return `${data}`
    }else if (Array.isArray(data)){
        const res = data.map((item)=>{
            return stringify(item)
        })
        return `[${res.join(",")}]`
    }else if(typeof data === "object"){
        const arr = Object.entries(data).reduce((acc, [key, value])=>{
            acc.push(`"${key}":${stringify(value)}`)
            return acc
        },[])
        return `{${arr.join(",")}}`
    }
}

let obj = {"a": 1, "abhishek": 3, "abhi": "iii"}
console.log(stringify(obj))
console.log(Object.entries(obj))
console.log(JSON.stringify(obj))
console.log(JSON.stringify(obj))