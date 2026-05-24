import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";



const navLinks=[

{
name:"Features",
path:"/features"
},

{
name:"Workflow",
path:"/how-it-works"
},

{
name:"Compare",
path:"/compare"
},

{
name:"Feed",
path:"/feed"
},

{
name:"Placements",
path:"/placements"
},

{
name:"About",
path:"/about"
},

{
name:"Story",
path:"/story"
}

];






export default function Navbar(){


const location=
useLocation();



const[
scrolled,
setScrolled
]

=

useState(false);



const[
mobileMenuOpen,
setMobileMenuOpen
]

=

useState(false);






useEffect(()=>{

const handleScroll=()=>{

setScrolled(

window.scrollY>20

);

};



window.addEventListener(
"scroll",
handleScroll
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);








return(

<header

className={`

fixed
top-0
left-0
right-0
z-50
transition-all
duration-300

${

scrolled

?

"bg-background/80 backdrop-blur-xl border-b border-white/5 py-4"

:

"bg-transparent py-6"

}

`}

>






<div
className="
container
mx-auto
px-6
md:px-12
flex
items-center
justify-between
"
>








{/* LOGO */}



<Link

to="/"

title="
Return Home
"

className="
flex
items-center
gap-3
group
z-50
"

>



<div
className="
w-10
h-10
rounded-xl
bg-primary/15
border
border-primary/20
flex
items-center
justify-center
group-hover:scale-105
transition
"
>

✦

</div>






<div
className="
flex
items-center
text-2xl
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










{/* DESKTOP */}



<nav
className="
hidden
md:flex
items-center
gap-7
"
>



{

navLinks.map(

(link)=>(


<Link

key={link.path}

to={link.path}

className={`

relative
text-sm
transition-colors

${

location.pathname===link.path

?

"text-white"

:

"text-white/60 hover:text-white"

}

`}

>



{link.name}




{

location.pathname===link.path

&&

<motion.div

layoutId="
navbar-indicator
"

className="
absolute
-bottom-1
left-0
right-0
h-[2px]
bg-primary
"

/>

}



</Link>


))


}



</nav>









<Button

asChild

className="
hidden
md:flex
rounded-full
px-6
bg-primary
hover:bg-primary/90
"

>

<Link to="/join">

Join

</Link>

</Button>











{/* MOBILE */}



<button

className="
md:hidden
z-50
text-white
"

onClick={()=>

setMobileMenuOpen(

!mobileMenuOpen

)

}

>



{

mobileMenuOpen

?

<X/>

:

<Menu/>

}



</button>









{

mobileMenuOpen

&&

<div
className="
fixed
inset-0
bg-background/95
backdrop-blur-2xl
flex
flex-col
items-center
justify-center
gap-8
z-40
"
>



{

navLinks.map(

(link)=>(


<Link

key={link.path}

to={link.path}

onClick={()=>

setMobileMenuOpen(false)

}

className={`

text-3xl
font-serif
italic

${

location.pathname===link.path

?

"text-primary"

:

"text-white"

}

`}

>

{link.name}

</Link>


))


}








<Button

asChild

size="lg"

className="
rounded-full
px-8
"

>

<Link

to="/join"

onClick={()=>

setMobileMenuOpen(false)

}

>

Join

</Link>


</Button>



</div>

}



</div>



</header>

)

}