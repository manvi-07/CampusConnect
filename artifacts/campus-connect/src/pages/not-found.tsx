import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



export default function NotFound(){


const navigate=
useNavigate();



return(

<div
className="
min-h-screen
w-full
flex
items-center
justify-center
bg-background
px-6
relative
overflow-hidden
"
>




<div
className="
absolute
w-[700px]
h-[700px]
bg-primary/10
blur-[150px]
rounded-full
"
/>






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
relative
z-10
max-w-lg
w-full
p-10
rounded-[3rem]
bg-white/5
border
border-white/10
backdrop-blur-xl
text-center
"
>





<div
className="
flex
justify-center
mb-6
"
>


<AlertCircle
className="
h-12
w-12
text-primary
"
/>


</div>







<h1
className="
text-7xl
font-serif
italic
mb-4
"
>

404

</h1>






<h2
className="
text-3xl
font-serif
italic
mb-6
"
>

This page
doesn't exist.

</h2>






<p
className="
text-white/60
leading-relaxed
mb-10
font-sans
"
>

Looks like you reached
a route outside your
campus network.

</p>








<Button

onClick={()=>
navigate("/")
}

className="
rounded-2xl
px-8
h-12
"
>


<ArrowLeft
className="
mr-2
h-4
w-4
"
/>



Return Home



</Button>






</motion.div>



</div>

)

}