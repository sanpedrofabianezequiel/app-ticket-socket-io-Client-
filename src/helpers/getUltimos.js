

export const getUltimos = async ()=>{

    const resp = await fetch('http://localhost:8080/ultimos');
    const body = resp.json();
    return body;
}