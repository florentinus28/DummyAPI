import {  group } from 'k6';
import { getPostsDetail } from './getPostsDetailv1.js';
export default function main () {
    const postId=1;

    group ("Get Posts Detail", function(){
        getPostsDetail(postId)
    })
}