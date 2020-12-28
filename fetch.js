class ffr{
    constructor(){
        return
    }
    open(URL, METHOD="GET"){
        if (METHOD.toLowerCase() == "get" || METHOD.toLowerCase == "post" || METHOD.toLowerCase == "put"){
            this.is_open = true;
            this.method = METHOD;
            this.url = URL;
            this.response = {};
        }else{
            console.error("False Method");
        }
    }

    send(){
        if (this.is_open){
            var tt = this;
            fetch(this.url, {
                method: this.method
            })
                .then(function (response){return response.json()})
                .then(function (resp){tt.onload_(resp)});
        }else{
            console.error("No Method and No URL");
        }
    }

    onload_(resp){
        this.response = resp;
        this.onload();
    }

    onload(){

    }
}