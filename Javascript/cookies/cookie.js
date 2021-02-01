//写入cookie
const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)};`

    if (typeof maxAge === "number") {
        cookieText += ` max-age = ${maxAge};`
    }

    if (domain) {
        cookieText += ` domain = ${domain};`
    }

    if (path) {
        cookieText += ` path = ${path};`
    }

    if (secure) {
        cookieText += ` secure;`
    }

    document.cookie = cookieText;
}
//得到cookie键值是name的value
const get = name=>{
    name=`${encodeURIComponent(name)}`;
    //得到每一个cookie的键值对
    const cookies = document.cookie.split("; ");
    // 循环遍历每一项cookie
    for (const item of cookies) {
        const [cookieName,cookieValue]=item.split("=");
        if (cookieName===name){
            return decodeURIComponent(cookieValue);
        }
        
    }

    return new Error(` not found ${decodeURIComponent(name)}`);
}
//通过name，domain和path删除cookie
const remove = (name,{domain,path}={})=>{
    set(name,"",{domain,path,maxAge:-1});
}
export { set,get ,remove};