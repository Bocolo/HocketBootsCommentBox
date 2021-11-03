// Change post button style
var arr=[];
var str;
var totalLikes=0;
var commentCount=0;

function likeMyPost(){
    totalLikes++;
    document.getElementById("heart-text").innerHTML =totalLikes + " Likes";
    alert("Comments on this page have a total of " + totalLikes+" likes");
};

//add pages for comments

function storeInput(){
    if( document.getElementById("comment").value ==""){
        alert("You forgot to fill in your comment");
        return;
    }
    var obj ={comment: document.getElementById("comment").value.replace(/\n\r?/g, '<br />'),
        handle: document.getElementById("handle").value,
        postdate: Date.now()};
    arr.push(obj);
    str='';
    console.log("Count of Comments in array " + arr.length);
    for (var i =arr.length-1; i>=0;i--){
        console.log(arr[i]);
        var timedif =(Date.now() -arr[i].postdate)/1000;
        var time;
        if(timedif<60){
            time="posted "+ Math.round(timedif) + "s ago";
        }else if(timedif> 60 && timedif < 3600){
            time="posted "+  Math.round(timedif/60) + "m ago";
        }else{
            time="posted "+ Math.round((timedif/60 )/60)+ "hr ago";
        }
        if(obj.handle==""){
            obj.handle="Anonymous"
        }
//  col-xxl-7 - debate resinsertion
//commentbox class can be removed?
        str+="<div  class='row  justify-content-center'><div  class='card border-info border-bottom-0 border-end-0 border-start-0 rounded-0 col col-xl-8'><div class=' card-body'><p><b>@" + arr[i].handle + 
        " </b></p> <p  class='card-text comment p-0 ps-3'>"
             + arr[i].comment + "</p><br><p class='card-footer foot text-muted'>" +  time 
            + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div><br>";
    }
    commentCount =arr.length;
    // document.getElementById("commentoutput").innerHTML =str;
    //= obj.comment + "<br>" + obj.handle;
    document.getElementById("commentCount").innerHTML = commentCount + " Comments";
    document.getElementById("commentoutput").innerHTML =str;
    // console.log(str);
    document.getElementById("myForm").reset();
 
};

console.log("something something dark side");

    
  