
//  --- ORIGINAL WORKS
    var arr=[];
var str;
var str2;
var totalLikes=0;
var commentCount=0;

function likeMyPost(){
    totalLikes++;
    document.getElementById("heart-text").innerHTML =totalLikes + " Likes";
    alert("Comments on this page have a total of " + totalLikes+" likes");
};
function changeOrder(){
    
}
//add spaces in input?
//add pages for comments
//card-tect padding
function storeInput(){
   //account for empty
    
   // if comment is empty break out of this loop altogether here not belowe
    if( document.getElementById("comment").value ==""){
        alert("You forgot to fill in your comment");
        return;
    }
    var obj ={comment: document.getElementById("comment").value.replace(/\n\r?/g, '<br />'),
        handle: document.getElementById("handle").value,
        postdate: Date.now()};
     //   obj.comment = obj.comment.replace(/\n\r?/g, '<br />');
    arr.push(obj);
    str='';
    str2='';
    //double check my for loop logic -- showing in reverse

    for (var i =arr.length-1; i>=0;i--){
        console.log(obj.comment);
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


        // str2="<div  class='row commentbox2 justify-content-center'><div  class='card border-info border-bottom-0 border-end-0 border-start-0 rounded-0 col col-xl-8 col-xxl-7'><div class=' card-body'><p><b>@" + arr[i].handle + 
        // " </b></p> <p  class='card-text comment ps-3'>"
        //      + arr[i].comment + "</p><br><p class='card-footer foot text-muted'>" +  time 
        //     + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div><br>";
            
        str2+="<div  class='row commentbox2 justify-content-center'><div  class='card border-info border-bottom-0 border-end-0 border-start-0 rounded-0 col col-xl-8 col-xxl-7'><div class=' card-body'><p><b>@" + arr[i].handle + 
        " </b></p> <p  class='card-text comment ps-3'>"
             + arr[i].comment + "</p><br><p class='card-footer foot text-muted'>" +  time 
            + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div><br>";
        // document.getElementById("commentoutput2").innerHTML +=str2;  
 
       
    }
    commentCount =arr.length;
    // document.getElementById("commentoutput").innerHTML =str;
    //= obj.comment + "<br>" + obj.handle;
    document.getElementById("commentCount").innerHTML = commentCount + " Comments";
    document.getElementById("commentoutput2").innerHTML =str2;
    console.log(str);
    document.getElementById("myForm").reset();
 
};

console.log("something something dark side");
       // str +=    "<div  class='row commentbox2 justify-content-center'><div  class='card  col col-xl-8 col-xxl-6'><div class=' card-body'><p><b>@" + arr[i].handle + 
        // " </b></p> <p  class='card-text comment'>"
        //      + arr[i].comment + "</p><p class='card-footer text-muted'>" +  time 
        //     + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div>";

        // str2+= "<div  class='row commentbox2 '><div  class='card  col col-xl-9  col-xxl-7'><div class=' card-body'><p><b>@" + arr[i].handle + 
        // " </b></p> <p  class='card-text comment'>"
        //      + arr[i].comment + "</p><p class='card-footer text-muted'>" +  time 
        //     + "</p> <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' ><img class='heart' src='images/heart.svg' alt='small heart'> Like</button> </div></div></div><br>";

       // str +=  arr[i].handle + "<br>"+arr[i].comment + "<br>" +  time + "<br>"+
        // "<button onclick='likeMyPost()' type='button' >Like</button><br>";

           // <div  class="row commentbox2 justify-content-center">
            // <div  class="card border-info border-bottom-0 border-end-0 border-start-0 rounded-0 col col-xl-8 col-xxl-7">
        //         <div class=" card-body">
        //             <p><b>@tester2 </b></p>
        //             <p  class="card-text comment">This is S*!t is bananas
        //                 This is S*!t is bananas This is S*!t is bananasThis is S*!t is bananas
        //                 <br> B A N A N A S
        //             </p>
        //             <p class="card-footer foot text-muted">
        //                 posted 10s ago
        //             </p>
        //             <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' >
        //             <img class="heart" src="images/heart.svg" alt="small heart">
        //             Like
        //             </button>
        //         </div>
        //     </div>
        // </div>


        // str +=  "<p><b>Handle:</b> " + arr[i].handle + "<br>"
        // + "Comment: " + arr[i].comment + "<br>" 
        // + "<button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' >Like</button><br>"
        // +  time + "<br></p>";

        // str += "<p><b>@" + arr[i].handle + "  </b></p> <p  class='card-text comment'> "
        //  + arr[i].comment + "</p> <p class='card-footer text-muted'>" +  time 
        //  + "</p>  <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' > <img class='heart' src='images/heart.svg' alt='small heart'> Like</button>";






        // if(obj.comment !=''){
        // console.log("empty string");
        // str += " <div  class='card commentcard'><div class='card-body'>"+
        // "<p><b>@" + arr[i].handle + "  </b></p> <p  class='card-text comment'> "
        //     + arr[i].comment + "</p> <p class='card-footer text-muted'>" +  time 
        //     + "</p>  <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' > <img class='heart' src='images/heart.svg' alt='small heart'>Like</button>"
        // +"</div></div>";


        // <p><b>@tester2 </b></p>
        // <p  class="card-text comment">This is S*!t is bananas
        //     This is S*!t is bananas This is S*!t is bananasThis is S*!t is bananas
        //     <br> B A N A N A S
        // </p>
        // <p class="card-footer text-muted">
        //     posted 10s ago
        // </p>
        // <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' >
        // <img class="heart" src="images/heart.svg" alt="small heart">
        // Like
        // </button>






        //     <div  class="row commentbox2 justify-content-center">
        //     <div  class="card  col col-xl-8 col-xxl-6">
        //         <div class=" card-body" id="commentoutput">
                   
        //         </div>
        //     </div>
        // </div>
        // <div  class="row commentbox2 ">
        //     <div  class="card  col col-xl-9  col-xxl-7">
        //         <div class=" card-body" id="commentoutput2">
                   
        //         </div>
        //     </div>
        // </div>

        // }
        // else{
        //     alert("You forgot to fill in your comment");
        //     //this called to late, array filles and it notified multiple times
        // // maybe theres a preset ?
        // }
     
        // str += " <div  class='card commentcard'><div class='card-body'>"+
        // "<p><b>@" + arr[i].handle + "  </b></p> <p  class='card-text comment'> "
        //  + arr[i].comment + "</p> <p class='card-footer text-muted'>" +  time 
        //  + "</p>  <button class='btn btn-outline-secondary' onclick='likeMyPost()' type='button' > <img class='heart' src='images/heart.svg' alt='small heart'> Like</button>"
        // +"</div></div>";

        //review button styling
        //add validation for comment/handle














// var arr=[];
// var str;
// var str2;
// var totalLikes=0;

// function likeMyPost(){
//     totalLikes++;
//     document.getElementById("likecount").innerHTML =totalLikes;
//     alert(totalLikes);
// };

// function storeInput(){
   
//     var obj ={comment: document.getElementById("comment").value,
//         handle:document.getElementById("handle").value,
//         postdate: Date.now()};
//     arr.push(obj);
//     //document.getElementById("commentoutput").innerHTML ='';
//     //console.log( document.getElementById("commentoutput").innerHTML);

//     /* Using a for loop, each time the button is pressed all the comments should be shown once, below the comment form. 
    
//             Does this mean that they need to be output in the for loop 
//             OR
//             is it ok that I am outputting them

//                     " document.getElementById("commentoutput").innerHTML =str;"
                    
//                                                 AFTER the for loop?
                                                
//     */


//     str='';
//     str2='';
//     for (var i =0; i<arr.length;i++){
//         var timedif =(Date.now() -arr[i].postdate)/1000;
//         var time;
//         if(timedif<60){
//             time="posted "+ Math.round(timedif) + "s ago";
//         }else if(timedif> 60 && timedif < 3600){
//             time="posted "+  Math.round(timedif/60) + "m ago";
//         }else{
//             time="posted "+ Math.round((timedif/60 )/60)+ "hr ago";
//         }
//         // str +=  arr[i].handle + "<br>"+arr[i].comment + "<br>" +  time + "<br>"+
//         // "<button onclick='likeMyPost()' type='button' >Like</button><br>";
//         str +=  "<p><b>Handle:</b> " + arr[i].handle + "<br>"
//         + "Comment: " + arr[i].comment + "<br>" 
//         + "<button onclick='likeMyPost()' type='button' >Like</button><br>"
//         +  time + "<br></p>";

//         str2 =  "<p><b>Handle:</b> " + arr[i].handle + "<br>"
//         + "Comment: " + arr[i].comment + "<br>" 
//         + "<button onclick='likeMyPost()' type='button' >Like</button><br>"
//         +  time + "<br></p>";
//         document.getElementById("commentoutput").innerHTML+= str2;
//     }
//     //document.getElementById("commentoutput").innerHTML =str;//= obj.comment + "<br>" + obj.handle;
//     console.log(str2);
//     document.getElementById("myForm").reset();
//     //@hockeyMadness
// };

// console.log("something something dark side");



// function storeInput2(a){
//     var obj =a;
   
//     arr2.push(obj);
//     console.log("store input working");
//     console.log(obj);
//     console.log(arr2);
//     // for (var i =0; i<arr.length;i++){
//     //     // show all comments
//     //     console.log(arr);
//     // }
// };

  // for (var i =0; i<arr.length;i++){
    //     // show all comments
    //     console.log(arr);
    // }


/* --- ORIGINAL WORKS
    var arr=[];
var str;
var totalLikes=0;

function likeMyPost(){
    totalLikes++;
    document.getElementById("likecount").innerHTML =totalLikes;
    alert(totalLikes);
};

function storeInput(){
   
    var obj ={comment: document.getElementById("comment").value,
        handle:document.getElementById("handle").value,
        postdate: Date.now()};
    arr.push(obj);
    str='';
 
    for (var i =0; i<arr.length;i++){
        var timedif =(Date.now() -arr[i].postdate)/1000;
        var time;
        if(timedif<60){
            time="posted "+ Math.round(timedif) + "s ago";
        }else if(timedif> 60 && timedif < 3600){
            time="posted "+  Math.round(timedif/60) + "m ago";
        }else{
            time="posted "+ Math.round((timedif/60 )/60)+ "hr ago";
        }
        // str +=  arr[i].handle + "<br>"+arr[i].comment + "<br>" +  time + "<br>"+
        // "<button onclick='likeMyPost()' type='button' >Like</button><br>";
        str +=  "<p><b>Handle:</b> " + arr[i].handle + "<br>"
        + "Comment: " + arr[i].comment + "<br>" 
        + "<button onclick='likeMyPost()' type='button' >Like</button><br>"
        +  time + "<br></p>";

       
    }
    document.getElementById("commentoutput").innerHTML =str;//= obj.comment + "<br>" + obj.handle;
    console.log(str);
    document.getElementById("myForm").reset();
 
};

console.log("something something dark side");

*/