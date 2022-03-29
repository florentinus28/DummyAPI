import { check, group } from "k6";
import http from "k6/http";

// export const options = { vus: 1, duration: "1s" };

export default function main(){
    let response;

    group("Get Posts List", function () {
        response = http.get('https://jsonplaceholder.typicode.com/posts',
            {
                headers :{
                    "Content-Type": "application/json",
                },
            }
        );
//         console.log(response.body)
        check(response, {
            'Get Employee List is status 200': (r) => r.status === 200
        });
    })
}
