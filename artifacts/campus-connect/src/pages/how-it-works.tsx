import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
{
num:"01",
title:"Join your campus",
desc:"Verify your student email to enter your university's exclusive ecosystem.",
detail:"Use your university email to access events, projects and opportunities."
},

{
num:"02",
title:"Create your profile",
desc:"Add major, interests, skills and goals.",
detail:"Profiles help match collaborators and opportunities."
},

{
num:"03",
title:"Discover people & events",
desc:"Explore projects, students and campus opportunities.",
detail:"Your feed adapts based on interests and activity."
},

{
num:"04",
title:"Collaborate and grow",
desc:"Join teams and build real experiences.",
detail:"Send requests, collaborate and build your portfolio."
}

];



export default function HowItWorks(){

const [selected,setSelected]=
useState<any>(null);



return(

<div className="
w-full
min-h-screen
pt-32
pb-24
px-6
md:px-12
relative
">

<div className="
container
mx-auto
max-w-4xl
relative
z-10
">



<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
mb-24
text-center
"
>

<h1 className="
text-5xl
md:text-7xl
font-serif
italic
mb-6
">

How it works

</h1>



<p className="
text-xl
text-white/60
max-w-xl
mx-auto
font-sans
">

Four simple steps to unlock
your university network.

</p>


</motion.div>







<div className="relative">


<div className="
absolute
left-1/2
top-0
bottom-0
w-px
bg-white/10
hidden
md:block
"/>




<div className="space-y-24">


{

steps.map((step,i)=>(


<motion.div

key={step.num}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className={`
flex
flex-col
md:flex-row
items-center
gap-8
md:gap-16

${
i%2!==0

?

"md:flex-row-reverse"

:

""

}

`}

>




<div className="
flex-1
w-full
">


<div

onClick={()=>
setSelected(step)
}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
cursor-pointer
hover:bg-white/10
transition-all
"
>



<span className="
text-6xl
font-serif
italic
text-white/10
">

{step.num}

</span>




<h3 className="
text-3xl
font-serif
italic
mb-4
">

{step.title}

</h3>




<p className="
text-white/60
font-sans
leading-relaxed
">

{step.desc}

</p>



</div>


</div>







<div className="
w-16
h-16
rounded-full
border
border-primary/30
flex
items-center
justify-center
z-10
">

<div className="
w-4
h-4
bg-primary
rounded-full
"/>

</div>





<div className="
flex-1
hidden
md:block
"/>



</motion.div>


))


}



</div>



</div>






{

selected && (

<div className="
fixed
inset-0
bg-black/70
backdrop-blur-md
z-50
flex
items-center
justify-center
">



<div className="
bg-background
border
border-white/10
rounded-3xl
p-8
max-w-md
w-full
mx-4
">



<h2 className="
text-3xl
font-serif
italic
mb-4
">

{selected.title}

</h2>




<p className="
text-white/60
mb-8
leading-relaxed
">

{selected.detail}

</p>




<button

onClick={()=>
setSelected(null)
}

className="
w-full
bg-primary
rounded-xl
py-3
hover:opacity-90
transition
"

>

Got it

</button>



</div>



</div>

)

}




</div>



</div>

)

}