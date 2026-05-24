import { motion } from "framer-motion";

export default function About() {
  return (

<div
className="
w-full
min-h-screen
pt-28
pb-20
px-6
md:px-12
flex
justify-center
relative
overflow-hidden
"
>


<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]
from-primary/10
via-background
to-background
"
/>



<div
className="
container
max-w-4xl
relative
z-10
"
>



<motion.div

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
space-y-24
"
>



{/* PROBLEM */}

<section>

<h2
className="
text-sm
uppercase
tracking-[0.25em]
text-primary
font-sans
font-medium
mb-7
"
>

The Problem

</h2>



<h3
className="
text-4xl
md:text-6xl
font-serif
italic
mb-7
leading-tight
"
>

Campuses are dense with talent, yet incredibly disconnected.

</h3>



<p
className="
text-lg
text-white/60
leading-relaxed
font-sans
max-w-3xl
"
>

We noticed a paradox : you are surrounded by thousands of ambitious peers yet finding a co-founder, discovering the right club or knowing about a hackathon feels like relying on luck. The tools we use are scattered group chats, outdated boards and endless email spam are broken.

</p>


</section>






{/* VISION */}

<section>


<h2
className="
text-sm
uppercase
tracking-[0.25em]
text-primary
font-sans
font-medium
mb-7
"
>

Our Vision

</h2>



<h3
className="
text-4xl
md:text-6xl
font-serif
italic
mb-7
leading-tight
"
>

A unified campus ecosystem.

</h3>



<p
className="
text-lg
text-white/60
leading-relaxed
font-sans
max-w-3xl
"
>

We imagine a university experience where meaningful connections happen naturally. Where the friction of finding collaborators drops to zero. Where every student has equal visibility into the opportunities happening just one building over.

</p>


</section>








{/* MISSION */}

<section>


<h2
className="
text-sm
uppercase
tracking-[0.25em]
text-primary
font-sans
font-medium
mb-7
"
>

Our Mission

</h2>



<h3
className="
text-4xl
md:text-6xl
font-serif
italic
mb-7
leading-tight
"
>

To empower student collaboration.

</h3>



<p
className="
text-lg
text-white/60
leading-relaxed
font-sans
max-w-3xl
"
>

CampusConnect is building the digital infrastructure for real-world creation. We believe the next generation of great companies, movements and ideas will start in dorm rooms, we're just making it easier for the right people to meet.

</p>


</section>



</motion.div>



</div>


</div>

);

}