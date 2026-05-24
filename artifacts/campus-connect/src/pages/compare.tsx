import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
CheckCircle2,
Minus,
ArrowRight
}
from "lucide-react";



const comparisonData=[

{
feature:"Audience",
cc:"Students and university communities",
li:"Professionals and recruiters"
},

{
feature:"Primary use",
cc:"Campus connections, projects, events",
li:"Job hunting and networking"
},

{
feature:"Matching",
cc:"Based on interests, courses and university",
li:"Based on job titles and experience"
},

{
feature:"Events",
cc:"Built directly into the platform",
li:"Not supported natively"
},

{
feature:"Placements",
cc:"Peer-driven updates within university",
li:"General announcements"
},

{
feature:"Privacy",
cc:"Limited to your university network",
li:"Public profiles"
},

{
feature:"Experience",
cc:"Feels personal and relevant",
li:"Feels formal and performance-driven"
}

];





export default function Compare(){

return(

<div
className="
min-h-screen
pt-28
pb-20
px-6
overflow-hidden
"
>




<div
className="
absolute
inset-0
bg-[url('https://grainy-gradients.vercel.css/noise.svg')]
opacity-[0.08]
"
/>




<div
className="
container
mx-auto
max-w-6xl
relative
z-10
"
>





{/* HEADER */}

<div
className="
text-center
mb-14
"
>


<div
className="
inline-flex
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
font-sans
text-sm
mb-6
"
>

Why CampusConnect

</div>




<h1
className="
text-5xl
md:text-7xl
font-sans
font-light
mb-6
"
>

Built for{" "}

<span
className="
font-serif
italic
"
>

your university.

</span>


</h1>




<p
className="
max-w-2xl
mx-auto
text-white/60
font-sans
leading-relaxed
"
>

LinkedIn focuses on careers.

CampusConnect focuses on where
students are right now —
their university,
their community,
their growth.

</p>


</div>







{/* TABLE */}

<div
className="
rounded-[2rem]
overflow-hidden
border
border-white/10
bg-white/5
backdrop-blur-xl
"
>



<div
className="
hidden
md:grid
grid-cols-[1fr_1fr_1fr]
border-b
border-white/10
"
>

<div/>

<div
className="
p-6
text-center
bg-primary/5
"
>

<h2
className="
text-3xl
font-serif
italic
"
>

CampusConnect

</h2>


</div>



<div
className="
p-6
text-center
font-sans
text-white/50
"
>

LinkedIn

</div>


</div>





{

comparisonData.map((row,i)=>(


<div

key={i}

className="
grid
md:grid-cols-[1fr_1fr_1fr]
border-b
border-white/10
"
>



<div
className="
p-6
font-sans
text-white/80
"
>

{row.feature}

</div>




<div
className="
p-6
flex
gap-3
bg-primary/[0.02]
"
>


<CheckCircle2
className="
text-primary
h-5
w-5
mt-1
"
/>



<span
className="
font-sans
leading-relaxed
"
>

{row.cc}

</span>



</div>





<div
className="
p-6
flex
gap-3
text-white/50
"
>



<Minus
className="
h-5
w-5
mt-1
"
/>



<span
className="
font-sans
leading-relaxed
"
>

{row.li}

</span>



</div>



</div>

))


}



</div>








{/* CTA */}

<div
className="
text-center
mt-24
"
>



<h2
className="
text-4xl
font-serif
italic
mb-4
"
>

Build real connections,

not profiles.

</h2>




<p
className="
font-sans
text-white/60
mb-8
"
>

Stop building your image.

Start finding your people.

</p>




<Button

asChild

size="lg"

className="
rounded-full
px-8
py-6
font-sans
"
>

<Link to="/join">

Join CampusConnect

<ArrowRight
className="
ml-2
h-4
w-4
"
/>


</Link>


</Button>



</div>



</div>


</div>

)

}