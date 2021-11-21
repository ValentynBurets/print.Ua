import axios from "axios";

const CancelOrderService = {
    request: async function (url,id) {
        return await axios({
            url: url + '/cancel/'+id,
            method: "PUT",
            headers:{
                "Authorization":"Bearer " + localStorage.getItem('token')
            }
        }).then((response) => {
            switch(response.status) {
            case 202: 
                return { data: true };
            default: 
                return { data: false };
            }
        }).catch((error) => {
            return { data: false};
        });
    }

}

export default CancelOrderService;