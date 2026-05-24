import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Story() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden selection:bg-primary/30">

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.css/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none fixed" />

      <div className="fixed top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="fixed bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />



      <article className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">


        {/* HEADER */}

        <div className="mb-24 md:mb-32 text-center pt-12 md:pt-20">


          <motion.div

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="
            text-primary
            font-medium
            tracking-widest
            uppercase
            text-sm
            mb-6
            "

          >

            Founder's Note

          </motion.div>





          <motion.h1

            initial={{
              opacity:0,
              y:30
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:1
            }}

            className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-serif
            italic
            text-white
            leading-[1.1]
            "

          >

            Why CampusConnect Exists

          </motion.h1>


        </div>








        <div className="space-y-24 md:space-y-32 pb-24">



          {/* SECTION 1 */}

          <motion.section

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

          >


            <h2 className="
            text-4xl
            md:text-5xl
            font-serif
            italic
            text-white
            mb-8
            ">

              "I spent years on campus feeling invisible."

            </h2>





            <div className="
            space-y-6
            text-xl
            md:text-2xl
            text-white/70
            leading-relaxed
            ">


              <p>

                Walking through a campus full of students should feel like being surrounded by opportunity. For me, it often felt overwhelming.

              </p>




              <p>

                I'd hear about opportunities too late, miss events, or realise later that someone nearby shared the same interests I had.

              </p>




              <p>

                It wasn't self-pity. It was simply how campus life works for many students.

              </p>



            </div>



          </motion.section>










          {/* SECTION 2 */}



          <motion.section

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

          >




            <h2 className="
            text-4xl
            md:text-5xl
            font-serif
            italic
            text-white
            mb-8
            ">

              "I kept looking for something built for students."

            </h2>






            <div className="
            space-y-6
            text-xl
            md:text-2xl
            text-white/70
            leading-relaxed
            ">



              <p>

                Traditional networking platforms felt too formal. Group chats became noise. Important updates disappeared.

              </p>




              <p>

                Nothing seemed designed around the everyday experience of being a student.

              </p>




              <p>

                Nothing helped students find <em className="text-white">their</em> people.

              </p>



            </div>



          </motion.section>










          {/* QUOTE */}



          <motion.div

            whileInView={{
              opacity:1,
              scale:1
            }}

            initial={{
              opacity:0,
              scale:0.95
            }}

            className="
            py-12
            border-y
            border-white/10
            "

          >




            <p className="
            text-3xl
            md:text-5xl
            font-serif
            italic
            text-center
            text-white
            ">

              Every student deserves
              easier access to people,
              opportunities and ideas.

            </p>



          </motion.div>










          {/* SECTION 3 */}



          <motion.section

            whileInView={{
              opacity:1,
              y:0
            }}

            initial={{
              opacity:0,
              y:40
            }}

          >



            <h2 className="
            text-4xl
            md:text-5xl
            font-serif
            italic
            text-white
            mb-8
            ">

              "Eventually, I stopped waiting."

            </h2>





            <div className="
            space-y-6
            text-xl
            md:text-2xl
            text-white/70
            ">



              <p>

                CampusConnect started from a simple question:

              </p>




              <p className="text-white">

                Why is it still difficult for students to discover the right people around them?

              </p>




              <p>

                The goal became simple:
                make campus feel smaller,
                more connected and easier to navigate.

              </p>



            </div>



          </motion.section>










          {/* SECTION 4 */}



          <motion.section>


            <h2 className="
            text-4xl
            md:text-5xl
            font-serif
            italic
            text-primary
            mb-8
            ">

              "If you've ever felt disconnected."

            </h2>





            <div className="
            space-y-6
            text-xl
            md:text-2xl
            text-white/70
            ">



              <p>

                This is for students who miss opportunities, hesitate to reach out or struggle finding collaborators.

              </p>




              <p className="text-white">

                You deserve easier ways to discover your people.

              </p>



            </div>



          </motion.section>



        </div>









        {/* CTA */}



        <motion.div

          className="
          text-center
          pt-12
          border-t
          border-white/10
          "

        >




          <h3 className="
          text-3xl
          md:text-4xl
          font-serif
          italic
          text-white
          mb-8
          ">

            Ready to explore your campus differently?

          </h3>






          <div className="
          flex
          flex-col
          items-center
          gap-6
          ">




            <Button

              asChild

              size="lg"

              className="
              rounded-full
              px-12
              py-8
              text-xl
              bg-primary
              "

            >


              <Link to="/join">

                Join CampusConnect

              </Link>


            </Button>






            <Link

              to="/feed"

              className="
              text-white/60
              hover:text-white
              flex
              items-center
              "

            >

              Explore updates inside your university

              <ArrowRight
              className="
              ml-2
              h-4
              w-4
              "
              />

            </Link>




          </div>



        </motion.div>



      </article>



    </div>

  );
}