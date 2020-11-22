const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require('./Layout')

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)


function Member() {
  return (
    <Layout title="Member">
      {<header>
        {/* <img logo image/> */}
        <div>
          {/* <img />
          <p>Current points and status</p> */}
        </div>
      </header>}
      <main>

        <article>
          <div>
          <h3>SpaceX launches new NASA satellite and lands with a boom</h3>
          <a href="" target="_blank"><i class="far fa-heart"></i></a>
          </div>
          
            <p>A SpaceX Falcon 9 rocket sent a new NASA and European Space Agency satellite on its way to orbit from California on Saturday morning. The Sentinel-6 Michael Freilich satellite is the latest in a series of satellites that have provided critical data about sea level rise and climate change for almost three decades.
            It's named for the former director of NASA's Earth Science Division, Michael Freilich, who's considered a pioneer in conducting oceanography work from orbit.
            The new ocean-spying bird will be able to measure sea levels within a few centimeters for 90% of oceans around the globe. A twin satellite named Sentinel-6B will join the effort when it launches in 2025. Instruments on the new satellites will also provide data on atmospheric temperature and humidity that'll help improve weather forecasts, according to NASA.
            </p>
            <img href="./../public/images/sentinel6-inorbit.jpg" alt="Sentinel in orbit" />
        </article>

        <article>
          <div>
          <h3>Here's why SpaceX's Crew-1 astronauts chose Baby Yoda as their zero-g indicator</h3>
          <a href="" target="_blank"><i class="far fa-heart"></i></a>
          </div>
          
            <p>Zero-g Baby Yoda put a smile on our faces, and that was the plan all along.

            A few minutes after SpaceX's Crew Dragon capsule "Resilience" launched on Sunday (Nov. 15), the four astronauts on board liberated a passenger that had been riding in secret — a small plush version of Baby Yoda, or "The Child," from the Disney+ Star Wars series "The Mandalorian."

            Baby Yoda emerged to mark a milestone, showing the world that the astronauts of the Crew-1 mission — SpaceX's first operational flight to the International Space Station for NASA — had begun experiencing microgravity on their 27-hour trip to the orbiting lab. 
            </p>
            <img href="./../public/images/Yoda.jpg" alt="Yoda meeting gravity 0"/>
        </article>

        <article>
          <div>
            <h3>The Sentinel-6 mission launching from Vandenberg will land at an onshore landing pad, adjacent to where it launched</h3>
            <a href="" target="_blank"><i class="far fa-heart"></i></a>
          </div>
          
            <p>Currently, weather is 80% go for the launch opportunity on Saturday, but NASA does have a backup launch time on Sunday at 12:04 p.m. EST (9:04 a.m. local time and 1704 GMT). Sunday’s Starlink launch also has favorable weather conditions, with the 45th Space Wing predicted a 70% chance of good weather Sunday evening.  The only cause for concern being liftoff winds and cumulus clouds. 

            Originally, SpaceX had planned on pulling a true launch double header by launching two missions from two coasts on the same day. However, when the company rolled its Starlink booster to the pad for prelaunch testing, the company appears to have aborted the test and instead chose to move the launch to Sunday evening. 

            During a prelaunch briefing for the Sentinel-6 mission, SpaceX said that the company was focusing on the California launch and if it was able to get off the ground on Saturday, then it would turn its attention to Starlink on Sunday.
            </p>
            <img href="./../public/images/Rocket.jpg" alt="Rocket to depart"/>
        </article>

      </main>
    </Layout>
  )
    
}

module.exports = Member;