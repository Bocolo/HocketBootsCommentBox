// Change post button style
var arr=[];
var str;
var totalLikes=0;
var commentCount=0;


function likeMyPost(){
    //on function call increment totalLikes by one
    totalLikes++;
    //if-else: different output if like count is 1 or like ount >1
    if(totalLikes==1){
        //update heart-text /like count
        document.getElementById("heart-text").innerHTML =totalLikes + " Like";
        //alert user to total likes on function call 
        alert("Comments on this page have only " + totalLikes+" like");
    }else{
        //update heart-text /like count
        document.getElementById("heart-text").innerHTML =totalLikes + " Likes";
        //alert user to total likes on function call 
        alert("Comments on this page have a total of " + totalLikes+" likes");
    }
};

function storeInput(){
   
    //notify user if they forgot to fill in the comment field
    if( document.getElementById("comment").value ==""){
        alert("You forgot to fill in your comment");
        return;
    }
    //create new comment object
    var obj ={
        handle: "@"+document.getElementById("handle").value,
        comment: document.getElementById("comment").value.replace(/\n\r?/g, '<br />'),
        postdate: Date.now()};
    arr.push(obj);
   
    //adding toggle functionality - button and containing div for toggle section
    str='<div class="text-center">'
    +'<button class="btn yellow p-0 pb-3  "data-bs-toggle="collapse" data-bs-target="#comments-show" '
    +'aria-expanded="true" '+'aria-controls="comments-show">'
    +'<b>Toggle Comments</b>'
    +'</button></div> '
    +'<div  class="show multi-collapse"   id="comments-show">';
    //for loop to add comments to str 
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
        if(obj.handle=="@"){
            obj.handle="@Anonymous"
        }
        //add each array obj to string, formatted as html, with like button
        str+="<div  class='row  justify-content-center'><div  class='card border-info border-bottom-0 border-end-0 border-start-0 rounded-0 col col-xl-8'><div class=' card-body'><p><b>" 
            + arr[i].handle + " </b></p> <p  class='card-text comment p-0 ps-3'>"
             + arr[i].comment + "</p><br><p class='card-footer foot text-muted'>" +  time 
            + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div><br>";
    }
    //closing comment toggle div
    str+="</div>"
    //update commentCount
    if(arr.length >1 ){
        document.getElementById("commentCount").innerHTML = arr.length + " Comments";}
    else{
        document.getElementById("commentCount").innerHTML = arr.length + " Comment";
    }
    //update comment output
    document.getElementById("commentoutput").innerHTML =str;
    //reset form
    document.getElementById("myForm").reset();
};


    
  