import { Link } from "react-router-dom";

export default function Footer() {

return(

<footer
className="
border-t
border-white/10
bg-background
py-12
mt-24
"
>

<div
className="
container
mx-auto
px-6
md:px-12
flex
flex-col
md:flex-row
justify-between
items-center
gap-8
"
>



{/* LOGO */}

<Link

to="/"

className="
flex
items-center
gap-2
group
"

>

<div
className="
w-8
h-8
rounded-lg
bg-primary/15
border
border-primary/20
flex
items-center
justify-center
"
>

✦

</div>



<div
className="
text-xl
tracking-tight
"
>

<span
className="
font-sans
font-semibold
text-white
"
>

Campus

</span>



<span
className="
font-serif
italic
text-primary
ml-1
"
>

Connect

</span>

</div>

</Link>







{/* LINKS */}

<div
className="
flex
gap-8
flex-wrap
justify-center
"
>



<Link

to="/about"

className="
text-sm
text-white/60
hover:text-white
transition
"

>

About

</Link>






<Link

to="/how-it-works"

className="
text-sm
text-white/60
hover:text-white
transition
"

>

Workflow

</Link>







<Link

to="/story"

className="
text-sm
text-white/60
hover:text-white
transition
"

>

Story

</Link>



</div>








<p
className="
text-sm
text-white/40
text-center
md:text-right
"
>

© 2026 CampusConnect

<br/>

Built for students

</p>



</div>

</footer>

)

}