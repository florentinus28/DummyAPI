import { check, group } from "k6";
import http from "k6/http";

// export const options = { vus: 1, duration: "1s" };

export default function main(){
    let response;

    group("Get Posts Detail", function () {
        const postId = 1;
        response = http.get(`https://jsonplaceholder.typicode.com/comments`,
            {
                headers :{
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.body)
        check(response, {
            'Get Employee List is status 200': (r) => r.status === 200
        });
    })
}