import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");



const handleSubmit = async () => {

setLoading(true);
setMessage("");


if(!email.endsWith("@gniindia.org")){

setMessage(
"❌ Please use your university email"
);

setLoading(false);

return;

}



setTimeout(()=>{

setMessage(
"✅ Verified — redirecting..."
);

navigate("/feed");

setLoading(false);

},1500);

};





return(

<div className="
w-full
min-h-screen
flex
items-center
justify-center
px-6
relative
overflow-hidden
bg-background
">

<div className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[800px]
h-[800px]
bg-primary/20
blur-[150px]
rounded-full
pointer-events-none
"/>



<motion.div

initial={{
opacity:0,
scale:0.95
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

className="
relative
z-10
w-full
max-w-lg
p-10
md:p-16
rounded-[3rem]
bg-white/5
border
border-white/10
backdrop-blur-2xl
text-center
shadow-2xl
"
>



<h1 className="
text-5xl
md:text-6xl
font-serif
italic
mb-6
">

Join your campus network.

</h1>




<p className="
text-lg
text-white/60
mb-10
font-light
">

Access students,
projects,
events and opportunities
inside your university.

</p>




<form

className="
space-y-4
text-left
mb-8
"

onSubmit={(e)=>{

e.preventDefault();

handleSubmit();

}}

>



<div className="space-y-2">

<label className="
text-sm
font-medium
text-white/80
px-1
">

University Email

</label>



<input

type="email"

value={email}

onChange={(e)=>

setEmail(
e.target.value
)

}

placeholder="
you@gniindia.org
"

className="
w-full
h-14
bg-black/50
border
border-white/10
rounded-2xl
px-6
text-white
placeholder:text-white/30
focus:outline-none
focus:border-primary
focus:ring-1
focus:ring-primary
transition-all
"
/>

</div>





<Button

type="submit"

disabled={loading}

className="
w-full
h-14
rounded-2xl
bg-white
text-black
hover:bg-white/90
text-lg
font-medium
"

>

{

loading

?

"Verifying..."

:

"Request Access"

}

</Button>





<Button

type="button"

variant="outline"

className="
w-full
h-14
rounded-2xl
border-white/10
text-white
hover:bg-white/5
"

onClick={()=>{

setMessage(

"✨ Early access requests reviewed within 24 hours"

);

}}

>

Request Early Access

</Button>


</form>




{

message

&&

<p className="
text-sm
mt-4
text-center
">

{message}

</p>

}




<div className="
flex
justify-center
gap-6
text-xs
text-white/40
mt-6
">


<button

onClick={()=>

navigate("/story")

}

className="
hover:text-white
transition
"

>

Terms

</button>



<button

onClick={()=>

navigate("/story")

}

className="
hover:text-white
transition
"

>

Privacy

</button>


</div>


</motion.div>

</div>

);

}