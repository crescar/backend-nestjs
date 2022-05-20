export class Response{
    public code: number;//200 404, 500
    public success: boolean; //true / false
    public message: string; //info
    public data: any; //objeto que necesito, ej [{},{},{}], {id, name}  
}

/*
let data = new Response();
data.code = 200;
data.data = {id: 1, name: "leo"};
data.message = "user created";
data.success = true;
return data;

this.http.post(url, {}, headers).then((info: Response) =>{
    if(rinfo.success){

    }
    
})

*/