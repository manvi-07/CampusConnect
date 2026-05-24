import { motion } from "framer-motion";
import { useState } from "react";

import {
Heart,
MessageCircle,
Share2,
MapPin,
Clock,
Users
}
from "lucide-react";

import { Button } from "@/components/ui/button";



const mockFeed=[

{
type:"post",
author:{
name:"Ananya",
uni:"Your University",
avatar:"AR"
},
content:
"Just finished building a UI prototype for CampusConnect. Need honest feedback 😭",
likes:34,
comments:8,
time:"1h ago"
},

{
type:"event",
title:"Frontend Workshop",
organizer:"Coding Club",
date:"Thursday • 6 PM",
location:"Seminar Hall",
attendees:42
},

{
type:"project",
title:"CampusConnect",
author:{
name:"Rahul",
avatar:"RS"
},
desc:
"Need one frontend dev and one backend person.",
needs:
"Frontend Developer"
},

{
type:"profile",
name:"Sneha Patel",
major:"CSE • 3rd Year",
skills:["React","Figma","Python"],
bio:
"Looking for teammates for upcoming hackathon.",
avatar:"SP"
},

{
type:"post",
author:{
name:"Vishal",
uni:"Your University",
avatar:"VK"
},
content:
"Anyone preparing for placements? Thinking of making a study group.",
likes:56,
comments:21,
time:"3h ago"
},

{
type:"event",
title:"AI/ML Bootcamp",
organizer:"AI Club",
date:"Saturday • 10 AM",
location:"Auditorium",
attendees:75
},

{
type:"post",
author:{
name:"Riya",
uni:"Your University",
avatar:"RM"
},
content:
"Lost my ID card near Block B 😭 pls dm if found.",
likes:14,
comments:32,
time:"5h ago"
},

{
type:"project",
title:"Attendance Tracker",

author:{
name:"Arjun",
avatar:"AK"
},

desc:
"Building smart attendance system using face recognition.",

needs:
"ML Engineer"

},

{
type:"profile",

name:"David",

major:"ECE • 2nd Year",

skills:[
"IoT",
"Research",
"Arduino"
],

bio:
"Interested in hardware projects.",

avatar:"DK"

},

{
type:"post",

author:{
name:"Meera",
uni:"Your University",
avatar:"MR"
},

content:
"Got selected for internship 😭 if anyone needs resume tips lmk",

likes:124,

comments:43,

time:"1d ago"

},

{
type:"event",

title:"Hackathon 2026",

organizer:"Innovation Cell",

date:"Next Friday",

location:"Main Block",

attendees:102

},

{
type:"post",

author:{
name:"Karan",
uni:"Your University",
avatar:"KK"
},

content:
"Need teammates for startup idea around student productivity.",

likes:28,

comments:12,

time:"1d ago"

}

];



export default function Feed(){

const[
feed,
setFeed
]

=

useState(mockFeed);



const[
post,
setPost
]

=

useState("");



const[
popup,
setPopup
]

=

useState("");





function triggerPopup(text:string){

setPopup(text);

setTimeout(()=>{

setPopup("");

},2000);

}





return(

<div
className="
w-full
min-h-screen
pt-24
pb-24
px-4
flex
justify-center
"
>



<div
className="
max-w-2xl
w-full
space-y-6
"
>




{/* CREATE POST */}


<div
className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
backdrop-blur-xl
"
>


<input

value={post}

onChange={(e)=>
setPost(
e.target.value
)
}

placeholder="
What's happening
on campus?
"

className="
w-full
bg-transparent
outline-none
text-lg
placeholder:text-white/30
"
/>



<Button

className="
mt-4
rounded-full
"

onClick={()=>{

if(!post)return;


setFeed([

{

type:"post",

author:{

name:"You",

avatar:"ME",

uni:"Your University"

},

content:post,

likes:0,

comments:0,

time:"Now"

},

...feed

]);


setPost("");

triggerPopup(
"Post shared ✓"
);


}}

>

Share

</Button>


</div>








{

feed.map((item:any,i)=>(


<motion.div

key={i}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
rounded-3xl
bg-white/5
border
border-white/10
p-6
"
>



{

item.type==="post"

&&

<>


<div
className="
flex
gap-3
mb-4
"
>

<div
className="
h-10
w-10
rounded-full
bg-primary
flex
items-center
justify-center
"
>

{item.author.avatar}

</div>



<div>

<div>

{item.author.name}

</div>


<div
className="
text-xs
text-white/40
"
>

{item.time}

</div>


</div>


</div>





<p
className="
mb-6
text-white/80
"
>

{item.content}

</p>





<div
className="
flex
gap-6
"
>



<button
onClick={()=>triggerPopup("Liked ✓")}
>

<Heart/>

</button>



<button
onClick={()=>triggerPopup("Comment feature soon")}
>

<MessageCircle/>

</button>



<button
onClick={()=>triggerPopup("Shared ✓")}
>

<Share2/>

</button>



</div>



</>

}








{

item.type==="event"

&&

<>


<h2
className="
text-2xl
font-serif
italic
mb-4
"
>

{item.title}

</h2>




<div
className="
space-y-2
mb-6
"
>

<div className="flex gap-2">

<Clock size={16}/>

{item.date}

</div>



<div className="flex gap-2">

<MapPin size={16}/>

{item.location}

</div>



<div className="flex gap-2">

<Users size={16}/>

{item.attendees}

attending

</div>



</div>




<Button

onClick={()=>
triggerPopup(
"RSVP confirmed ✓"
)
}

>

RSVP

</Button>



</>

}







{

item.type==="project"

&&

<>


<h2
className="
text-2xl
font-serif
italic
mb-4
"
>

{item.title}

</h2>




<p
className="
mb-6
text-white/60
"
>

{item.desc}

</p>




<Button

onClick={()=>triggerPopup(
"Application submitted ✓"
)}

>

Apply

</Button>



</>

}








{

item.type==="profile"

&&

<>


<h2
className="
text-2xl
font-serif
italic
mb-4
"
>

{item.name}

</h2>




<p
className="
mb-6
text-white/60
"
>

{item.bio}

</p>




<Button

onClick={()=>triggerPopup(
"Connection request sent ✓"
)}

>

Connect

</Button>



</>

}



</motion.div>


))

}








{

popup

&&

<div
className="
fixed
bottom-8
left-1/2
-translate-x-1/2
px-6
py-3
rounded-2xl
bg-green-500/10
border
border-green-400/20
backdrop-blur-md
"
>

{popup}

</div>

}



</div>



</div>

)

}