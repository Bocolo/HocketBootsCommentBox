// Change post button style
var arr=[];
var str;
var totalLikes=0;
var commentCount=0;

function likeMyPost(){
    //on function call increment totalLikes by one
    totalLikes++;
    //update heart-text 
    document.getElementById("heart-text").innerHTML =totalLikes + " Likes";
    //alert user to total likes on function call 
    alert("Comments on this page have a total of " + totalLikes+" likes");
};

function storeInput(){
    //notify user if they forgot to fill in the comment field
    if( document.getElementById("comment").value ==""){
        alert("You forgot to fill in your comment");
        return;
    }
    //create new comment object
    var obj ={comment: document.getElementById("comment").value.replace(/\n\r?/g, '<br />'),
        handle: document.getElementById("handle").value,
        postdate: Date.now()};
    arr.push(obj);
    str='';
    for (var i =arr.length-1; i>=0;i--){
        //format time
        var timedif =(Date.now() -arr[i].postdate)/1000;
        var time;
        if(timedif<60){
            time="posted "+ Math.round(timedif) + "s ago";
        }else if(timedif> 60 && timedif < 3600){
            time="posted "+  Math.round(timedif/60) + "m ago";
        }else{
            time="posted "+ Math.round((timedif/60 )/60)+ "hr ago";
        }
        //if no handle entered, make handle = "anonymous"
        if(obj.handle==""){
            obj.handle="Anonymous"
        }
        //add each array obj to string, formatted as html, with like button
        str+="<div  class='row  justify-content-center'><div  class='card border-info border-bottom-0 border-end-0 border-start-0 rounded-0 col col-xl-8'><div class=' card-body'><p><b>@" + arr[i].handle + 
        " </b></p> <p  class='card-text comment p-0 ps-3'>"
             + arr[i].comment + "</p><br><p class='card-footer foot text-muted'>" +  time 
            + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div><br>";
    }
    //update commentCount
    document.getElementById("commentCount").innerHTML = arr.length + " Comments";
    //update comment output
    document.getElementById("commentoutput").innerHTML =str;
    //reset form
    document.getElementById("myForm").reset();
};


    
  