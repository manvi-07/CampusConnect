import { motion } from "framer-motion";
import {
Users,
Sparkles,
Code,
Calendar,
Briefcase,
ArrowRight
}
from "lucide-react";

import {
useState
}
from "react";

import {
Button
}
from "@/components/ui/button";



const features=[

{
icon:Sparkles,
title:"Intent Matching",
desc:"Tell us what you’re trying to do — we match you with the right people instantly.",
detail:
"Find collaborators based on goals, interests and what you're building."
},

{
icon:Users,
title:"Relevant People Only",
desc:"No noise. No endless scrolling. Just people who actually align with you.",
detail:
"Connect with students who share similar ambitions."
},

{
icon:Code,
title:"Build Together",
desc:"Turn ideas into real projects with the right collaborators.",
detail:
"Form teams, collaborate and launch projects."
},

{
icon:Calendar,
title:"Campus Context",
desc:"Connections that are real, local, and actionable.",
detail:
"Opportunities relevant to your university."
},

{
icon:Briefcase,
title:"Opportunities",
desc:"Discover what actually matters to your journey.",
detail:
"Hackathons, internships and events."
}

];





export default function Features(){


const[
selected,
setSelected
]

=

useState<any>(null);



return(

<div
className="
w-full
bg-background
text-white
px-6
md:px-12
py-24
"
>




<div
className="
text-center
mb-24
max-w-3xl
mx-auto
"
>


<h1
className="
text-5xl
md:text-7xl
font-serif
italic
mb-5
"
>

Find your people.

</h1>




<p
className="
text-white/60
text-lg
font-sans
leading-relaxed
"
>

Not another platform to scroll.
A system that helps you
meet the right people.

</p>


</div>








<div
className="
relative
max-w-5xl
mx-auto
"
>




<div
className="
hidden
md:block
absolute
left-1/2
top-0
h-full
w-[2px]
bg-white/10
"
/>




<div
className="
flex
flex-col
gap-20
"
>



{

features.map((feature,i)=>(


<motion.div

key={i}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5
}}

viewport={{
amount:0.4
}}

className="
relative
flex
items-center
"
>





<div
className="
hidden
md:block
absolute
left-1/2
-translate-x-1/2
w-4
h-4
bg-primary
rounded-full
z-10
"
/>






<div
className={`
w-full
md:w-1/2

${

i%2===0

?

"pr-10 text-right"

:

"opacity-0"

}

`}
>


{

i%2===0

&&

<Card

feature={feature}

align="right"

onClick={()=>
setSelected(feature)
}

/>

}


</div>







<div
className={`
w-full
md:w-1/2

${

i%2!==0

?

"pl-10"

:

"opacity-0"

}

`}
>


{

i%2!==0

&&

<Card

feature={feature}

align="left"

onClick={()=>
setSelected(feature)
}

/>

}


</div>



</motion.div>


))


}



</div>


</div>









{

selected

&&

<div
className="
fixed
inset-0
bg-black/70
backdrop-blur-md
z-50
flex
items-center
justify-center
"
>



<div
className="
bg-background
border
border-white/10
rounded-3xl
p-8
max-w-md
w-full
"
>




<h2
className="
text-3xl
font-serif
italic
mb-4
"
>

{selected.title}

</h2>




<p
className="
text-white/60
font-sans
mb-8
leading-relaxed
"
>

{selected.detail}

</p>





<Button

className="
w-full
"

onClick={()=>
setSelected(null)
}

>

Got it

</Button>




</div>



</div>





}



</div>

)

}








function Card({

feature,

align,

onClick

}:any){

return(

<div

onClick={onClick}

className="
p-6
md:p-8
rounded-[2rem]
bg-white/5
border
border-white/10
backdrop-blur-xl
max-w-md
cursor-pointer
hover:bg-white/10
transition-all
"
>




<div
className={`
mb-4
flex

${

align==="right"

?

"justify-end"

:

"justify-start"

}

`}
>


<feature.icon
className="
h-5
w-5
text-primary
"
/>


</div>






<h3
className="
text-xl
md:text-2xl
font-serif
italic
mb-3
"
>

{feature.title}

</h3>






<p
className="
text-white/60
text-sm
md:text-base
leading-relaxed
font-sans
mb-6
"
>

{feature.desc}

</p>





<div
className="
flex
items-center
gap-2
text-primary
text-sm
font-sans
"
>

Learn more

<ArrowRight
className="
h-4
w-4
"
/>


</div>




</div>

)

}