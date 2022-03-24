import { check, group } from "k6";
import http from "k6/http";

// export const options = { vus: 1, duration: "1s" };

export default function main(){
    let response;

    group("Get Posts Detail Valid post id", function () {
        const postId = 1;
        response = http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                headers :{
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.body)
        check(response, {
            'Get Employee List is status 200': (r) => r.status === 200,
            'Check Data Type : id is number' : (r) => typeof r.json().id === "number",
            'Check Data Type : title is string' : (r) => typeof r.json().title === "string",
            'Check Data Type : body is string' : (r) => typeof r.json().body === "string",
            'Check Value : Id = 1' : (r) => r.json().id === 1,
            'Check Value : Title = sunt aut facere repellat provident occaecati excepturi optio reprehenderit': (r) => r.json().title === 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'Check Value : Body = quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto': (r) => r.json().body === 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        });
    })

    group("Get Posts Detail Invalid post id", function () {
        const postId = 101;
        response = http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                headers :{
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.body)
        check(response, {
            'Get Employee List is status 404': (r) => r.status === 404,
        });
    })
}