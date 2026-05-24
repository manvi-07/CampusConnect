import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
ArrowRight,
Users,
Rocket,
Calendar
} from "lucide-react";

export default function Home(){

const features=[

{
title:"Secure Login",
desc:"University-only access using institutional email"
},

{
title:"Peer Matching",
desc:"Discover students with shared interests and goals"
},

{
title:"Campus Feed",
desc:"Posts, updates and discussions inside your network"
},

{
title:"Events",
desc:"Find hackathons, workshops and opportunities"
}

];


const highlights=[

{
icon:Users,
title:"Find your people",
desc:"Connect with students sharing similar interests"
},

{
icon:Rocket,
title:"Launch projects",
desc:"Collaborate with peers and build ideas together"
},

{
icon:Calendar,
title:"Stay updated",
desc:"Never miss events happening around campus"
}

];



return(

<div className="w-full flex flex-col items-center">



{/* HERO */}

<section
className="
relative
w-full
min-h-[72vh]
flex
items-center
justify-center
overflow-hidden
pt-20
"
>

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,_rgba(139,92,246,.15),_transparent)]
"
/>


<div
className="
container
px-6
md:px-12
text-center
relative
z-20
"
>


<div
className="
inline-flex
mb-6
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
font-sans
text-sm
"
>

✨ Built for your university

</div>



<motion.h1

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
text-6xl
md:text-[7rem]
lg:text-[8rem]
leading-[0.95]
tracking-[-0.05em]
font-sans
font-light
text-white
"
>

Your{" "}

<span
className="
font-serif
italic
relative
inline-block
"
>

Campus


<span
className="
absolute
left-0
bottom-2
w-full
h-[2px]
bg-primary
"
/>

</span>

,


<br/>

Connected.

</motion.h1>



<p
className="
mt-6
max-w-2xl
mx-auto
text-lg
md:text-xl
text-white/55
leading-relaxed
font-sans
"
>

Connect with students,
discover opportunities,
build projects
and stay updated ; 

all inside your university network.

</p>



<div
className="
mt-8
flex
justify-center
gap-4
flex-wrap
"
>


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

Join Now

<ArrowRight
className="
ml-2
h-5
w-5
"
/>

</Link>

</Button>




<Button
asChild
variant="outline"
size="lg"

className="
rounded-full
px-8
py-6
font-sans
bg-white/5
border-white/10
"
>

<Link to="/explore">

Explore

</Link>

</Button>


</div>


</div>


</section>







{/* PLATFORM FEATURES */}

<section
className="
w-full
py-16
border-t
border-white/5
"
>

<div
className="
container
mx-auto
px-6
"
>


<div
className="
text-center
mb-12
"
>


<h2
className="
text-4xl
md:text-5xl
font-serif
italic
"
>

Built for
modern campus life.

</h2>



<p
className="
mt-4
text-white/50
font-sans
"
>

Everything students need,
inside one platform.

</p>


</div>



<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-6
"
>

{

features.map((item,i)=>(

<div

key={i}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
"
>


<h3
className="
text-2xl
font-serif
italic
mb-4
"
>

{item.title}

</h3>



<p
className="
text-white/60
font-sans
leading-relaxed
"
>

{item.desc}

</p>


</div>

))

}


</div>


</div>


</section>







{/* WHY USE */}

<section
className="
w-full
py-16
"
>

<div
className="
container
mx-auto
px-6
"
>



<div
className="
mb-12
"
>


<div
className="
text-primary
font-sans
mb-4
"
>

Why CampusConnect

</div>



<h2
className="
text-4xl
md:text-5xl
font-serif
italic
"
>

Designed around
student life.

</h2>


</div>




<div
className="
grid
md:grid-cols-3
gap-8
"
>

{

highlights.map((item,i)=>(


<div

key={i}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
"
>


<item.icon
className="
text-primary
mb-6
"
/>


<h3
className="
text-3xl
font-serif
italic
mb-4
"
>

{item.title}

</h3>



<p
className="
text-white/60
font-sans
"
>

{item.desc}

</p>


</div>


))

}


</div>


</div>


</section>




</div>

);

}