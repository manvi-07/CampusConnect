import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
BadgeCheck,
Sparkles,
ArrowRight
}
from "lucide-react";

export default function Placements(){

const[
filter,
setFilter
]

=

useState<
"all"
|
"fulltime"
|
"internship"
>("all");



const[
popup,
setPopup
]

=

useState(false);





const demoPlacements=[

{
id:"1",
avatarInitials:"AR",
studentName:"Ananya Reddy",
university:"Your University",
role:"Frontend Intern",
company:"Startup Inc",
package:"₹25k/mo",
type:"internship",
month:"May",
isVerified:true
},

{
id:"2",
avatarInitials:"RS",
studentName:"Rahul Singh",
university:"Your University",
role:"Software Engineer",
company:"Tech Firm",
package:"₹8 LPA",
type:"fulltime",
month:"June",
isVerified:true
},

{
id:"3",
avatarInitials:"SP",
studentName:"Sneha Patel",
university:"Your University",
role:"Research Intern",
company:"AI Lab",
package:"₹20k/mo",
type:"internship",
month:"April",
isVerified:true
}

];





const filteredPlacements=

demoPlacements.filter(

p=>

filter==="all"

?

true

:

p.type===filter

);





return(

<div className="
min-h-screen
bg-background
pt-32
pb-24
px-6
">




<div className="
max-w-5xl
mx-auto
"
>




{/* HERO */}



<div className="
text-center
mb-20
"
>



<div className="
inline-flex
items-center
rounded-full
border
border-white/10
bg-white/5
px-4
py-2
mb-6
"
>

<Sparkles
className="
mr-2
h-4
w-4
text-primary
"
/>

Campus Updates

</div>




<h1 className="
text-5xl
md:text-7xl
font-serif
italic
mb-6
">

Where your peers land.

</h1>




<p className="
text-white/60
text-xl
max-w-2xl
mx-auto
">

Placements and internships
shared inside your university.

</p>



</div>








{/* STATS */}



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mb-20
"
>



{

[

["3","Offers"],

["₹8LPA","Highest"],

["₹4.5LPA","Average"],

["2","Recruiters"]

]

.map((s,i)=>(


<div

key={i}

className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
text-center
"
>



<div className="
text-4xl
font-serif
italic
mb-2
">

{s[0]}

</div>




<div className="
text-white/60
text-sm
uppercase
">

{s[1]}

</div>



</div>


))


}



</div>









{/* FILTERS */}



<div className="
flex
justify-center
mb-16
"
>



<div className="
rounded-full
bg-white/5
border
border-white/10
p-1
"
>



{

["all","fulltime","internship"]

.map((f)=>(


<button

key={f}

onClick={()=>

setFilter(

f as any

)

}

className={`

px-6
py-2
rounded-full

${

filter===f

?

"bg-white text-black"

:

"text-white/60"

}

`}

>

{f}

</button>


))


}



</div>



</div>









{/* PLACEMENTS */}



<div className="
space-y-6
"
>



{

filteredPlacements.map((placement)=>(


<div

key={placement.id}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
flex
justify-between
items-center
"
>




<div>


<div className="
flex
gap-4
items-center
mb-3
">




<div className="
h-14
w-14
rounded-full
bg-primary
flex
items-center
justify-center
"
>

{placement.avatarInitials}

</div>





<div>


<h2 className="
text-2xl
font-serif
italic
">

{placement.studentName}

</h2>



<p className="
text-white/50
">

{placement.university}

</p>


</div>



</div>







<p>

{placement.role}

at

<span className="
text-primary
ml-2
">

{placement.company}

</span>

</p>



</div>








<div className="
text-right
">

<div className="
text-2xl
font-medium
mb-2
">

{placement.package}

</div>



<div className="
text-white/40
">

{placement.month}

</div>



</div>



</div>


))


}



</div>









{/* CTA */}



<div className="
mt-24
text-center
"
>



<Button

size="lg"

className="
rounded-full
px-8
"

onClick={()=>

setPopup(true)

}

>

Add Your Update

<ArrowRight
className="
ml-2
h-5
w-5
"
/>

</Button>



</div>









{/* POPUP */}



{

popup

&&

<div className="
fixed
inset-0
bg-black/70
backdrop-blur-md
flex
items-center
justify-center
z-50
"
>



<div className="
bg-background
border
border-white/10
rounded-3xl
p-8
max-w-md
w-full
"
>



<h2 className="
text-3xl
font-serif
italic
mb-4
">

Share placement

</h2>




<p className="
text-white/60
mb-8
">

Placement submissions
require verification.

</p>




<Button

className="
w-full
"

onClick={()=>

setPopup(false)

}

>

Got it

</Button>



</div>



</div>

}



</div>



</div>

)

}