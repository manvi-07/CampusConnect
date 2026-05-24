import { Canvas, useFrame } from "@react-three/fiber";
import {
OrbitControls,
Sphere,
Stars,
Float,
MeshDistortMaterial
} from "@react-three/drei";

import {
Suspense,
useRef,
useMemo,
useState
} from "react";

import { motion } from "framer-motion";

import {
useGetConnectionStats,
useListProfiles
} from "@workspace/api-client-react";

import { Button } from "@/components/ui/button";

import {
Network,
Users,
CheckCircle2
} from "lucide-react";

import * as THREE from "three";



function Nodes(){

const group=
useRef<THREE.Group>(null);



const nodes=
useMemo(()=>{

return Array
.from({length:20})
.map(()=>{

const phi=
Math.acos(-1+2*Math.random());

const theta=
Math.sqrt(150*Math.PI)
*
phi;

const r=
2.5+
Math.random()*0.5;



return{

position:[

r*Math.cos(theta)*Math.sin(phi),

r*Math.sin(theta)*Math.sin(phi),

r*Math.cos(phi)

] as [number,number,number],

size:
0.02+
Math.random()*0.04

};

});


},[]);



useFrame(state=>{

if(group.current){

group.current.rotation.y=
state.clock.elapsedTime
*
0.05;

}

});



return(

<group ref={group}>


<Sphere
args={[2,24,24]}
>

<MeshDistortMaterial
color="#8B5CF6"
distort={0.4}
speed={1.5}
wireframe
emissive="#8B5CF6"
emissiveIntensity={0.5}
/>

</Sphere>



{

nodes.map((node,i)=>(

<group
key={i}
position={node.position}
>

<Float>

<Sphere
args={[node.size,12,12]}
>

<meshStandardMaterial
color="#C4B5FD"
emissive="#A78BFA"
emissiveIntensity={2}
/>

</Sphere>

</Float>

</group>

))

}


</group>

)

}




function Scene(){

return(

<Canvas
camera={{
position:[0,0,6],
fov:60
}}
>

<ambientLight intensity={0.2}/>

<pointLight
position={[10,10,10]}
intensity={1}
color="#8B5CF6"
/>


<Suspense fallback={null}>


<Nodes/>


<Stars
radius={100}
depth={50}
count={180}
factor={4}
fade
speed={1}
/>



<OrbitControls
enableZoom={false}
enablePan={false}
enableRotate={false}
autoRotate
autoRotateSpeed={0.5}
/>


</Suspense>


</Canvas>

)

}





export default function Explore(){


const [selectedProfile,setSelectedProfile]=
useState<any>(null);

const [sent,setSent]=
useState(false);



const {

data:stats

}

=

useGetConnectionStats();



const {

data:profiles

}

=

useListProfiles();



const demoProfiles=[

{
id:"1",
name:"Ananya Reddy",
avatarInitials:"AR",
major:"CSE",
year:"3rd Year",
skills:["React","UI"],
openToCollaborate:true
},

{
id:"2",
name:"Rahul Singh",
avatarInitials:"RS",
major:"AI & ML",
year:"2nd Year",
skills:["Python","ML"],
openToCollaborate:true
},

{
id:"3",
name:"Sneha Patel",
avatarInitials:"SP",
major:"ECE",
year:"4th Year",
skills:["IoT","Research"],
openToCollaborate:false
}

];



const profileList=

Array.isArray(profiles)
&&
profiles.length>0

?

profiles

:

demoProfiles;




return(

<div className="w-full bg-background min-h-screen pt-24">


<section
className="
relative
h-[75vh]
flex
items-center
justify-center
overflow-hidden
border-b
border-white/10
"
>


<div className="absolute inset-0 opacity-80">

<Scene/>

</div>




<div
className="
relative
z-20
text-center
max-w-3xl
px-6
"
>


<div
className="
inline-flex
items-center
rounded-full
border
border-primary/30
bg-primary/10
px-4
py-2
text-primary
text-sm
mb-6
"
>

<Network
className="
mr-2
h-4
w-4
"
/>

Explore Community

</div>




<h1
className="
text-5xl
md:text-7xl
font-serif
italic
"
>

See your campus
come alive.

</h1>




<p
className="
mt-6
text-lg
text-white/65
font-sans
"
>

{

stats?.totalStudents

?

`${stats.totalStudents} students inside your university network.`

:

"Discover students, projects and opportunities inside your university."

}

</p>


</div>


</section>







<section
className="
py-20
px-6
"
>

<div
className="
container
mx-auto
max-w-6xl
"
>



<h2
className="
text-4xl
font-serif
italic
mb-2
"
>

Discover people

</h2>



<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
mt-10
"
>



{

profileList.map(profile=>(


<motion.div

key={profile.id}

className="
p-6
rounded-3xl
bg-white/[0.04]
border
border-white/10
"
>


<div
className="
h-14
w-14
rounded-full
bg-primary
flex
items-center
justify-center
mb-4
"
>

{profile.avatarInitials}

</div>



<h3
className="
text-2xl
font-serif
italic
"
>

{profile.name}

</h3>



<p
className="
text-white/60
mb-4
"
>

{profile.major}
•
{profile.year}

</p>




<Button

onClick={()=>
setSelectedProfile(profile)
}

className="
w-full
rounded-xl
"
>

Connect

</Button>



</motion.div>


))


}



</div>



</div>



</section>







{

selectedProfile && (

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



{

!sent

?

<>

<h2
className="
text-3xl
font-serif
italic
mb-4
"
>

Connect with{" "}        
{selectedProfile.name}?

</h2>



<p
className="
text-white/60
mb-8
"
>

Send connection request
and start collaborating.

</p>



<div
className="
flex
gap-3
"
>


<Button

className="
flex-1
"

onClick={()=>{

setSent(true)

}}

>

Send Request

</Button>




<Button

variant="outline"

className="
flex-1
"

onClick={()=>
setSelectedProfile(null)
}

>

Cancel

</Button>



</div>

</>


:

<>

<div
className="
flex
justify-center
mb-4
"
>

<CheckCircle2
className="
h-12
w-12
text-green-400
"
/>

</div>



<h2
className="
text-center
text-2xl
font-serif
italic
mb-4
"
>

Request Sent ✓

</h2>



<p
className="
text-center
text-white/60
mb-8
"
>

Your connection request
has been sent.

</p>



<Button

className="
w-full
"

onClick={()=>{

setSelectedProfile(null);

setSent(false);

}}

>

Done

</Button>


</>


}



</div>



</div>

)



}



</div>

)

}