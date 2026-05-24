import {
BrowserRouter,
Routes,
Route,
Outlet
}
from "react-router-dom";

import {
QueryClient,
QueryClientProvider
}
from "@tanstack/react-query";

import {
TooltipProvider
}
from "@/components/ui/tooltip";

import {
Toaster
}
from "@/components/ui/toaster";



/* COMPONENTS */

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



/* PAGES */

import Home from "@/pages/home";

import About from "@/pages/about";

import Features from "@/pages/features";

import HowItWorks from "@/pages/how-it-works";

import Explore from "@/pages/explore";

import Feed from "@/pages/feed";

import Placements from "@/pages/placements";

import Compare from "@/pages/compare";

import Story from "@/pages/story";

import Join from "@/pages/join";

import NotFound from "@/pages/not-found";



const queryClient=
new QueryClient();





function Layout(){

return(

<div
className="
min-h-screen
flex
flex-col
bg-background
text-foreground
selection:bg-primary/30
"
>


<Navbar />



<main
className="
flex-1
"
>

<Outlet />

</main>



<Footer />


</div>

)

}









function App(){

return(

<QueryClientProvider
client={queryClient}
>



<TooltipProvider>



<BrowserRouter
basename={
import.meta.env.BASE_URL
}
>



<Routes>



<Route

path="/"

element={<Layout />}

>



{/* HOME */}



<Route

index

element={<Home />}

/>





{/* CORE */}



<Route

path="about"

element={<About />}

/>



<Route

path="features"

element={<Features />}

/>



<Route

path="how-it-works"

element={<HowItWorks />}

/>



<Route

path="explore"

element={<Explore />}

/>



<Route

path="feed"

element={<Feed />}

/>



<Route

path="placements"

element={<Placements />}

/>



<Route

path="compare"

element={<Compare />}

/>



<Route

path="story"

element={<Story />}

/>



<Route

path="join"

element={<Join />}

/>






{/* FALLBACK */}



<Route

path="*"

element={<NotFound />}

/>



</Route>



</Routes>



</BrowserRouter>




<Toaster />



</TooltipProvider>



</QueryClientProvider>

)

}





export default App;