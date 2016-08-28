import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Traditions extends Component {
  render() {
    return (
      <div className="entryj">
        <Navbar />
          <div className="title-div row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1>Our J Entry Traditions</h1>
              <p>
                In J we like to try all sorts of things. A lot of what we do is spontaneous, unique and unreproducible!
                However, we also have some traditions that we try to keep, and we'd like to share some of those with you here.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div id="entry-description" className="col-md-8">
              <h3>Lounge-Dwelling</h3>
              <p>
                In true MIT fashion, we (or at least some of us) like to procrastinate! So rather than focus on our work alone in our lovely singles we sometimes work in lounges just for the company and casual goofing around. Occasionally we find ourselves distracted...
              </p>

              <h3>Trolling and Pranks</h3>
              <p>
                Have you ever heard the troll song originally sung by Eduard Khil? Well, don’t worry if you haven’t, because you’ll hear plenty of it when you live here! We love playing pranks on each other, no matter how silly they might be. Be forewarned! Troll or be trolled in this entry! And FYI, if you really do love the troll action, be sure to check out J2 for the daily Ron-talks-to-Kevin show that never fails to amuse.
              </p>

              <h3>Thanksgiving Potluck</h3>
              <p>
                Because Thanksgiving is all ‘bout that food!! Every year we each make some small dish or something for Thanksgiving and then get together to try and eat it all (we always fail). But hey, leftovers are good too, right? :D
              </p>

              <h3>Winter Gift Exchange</h3>
              <p>
                Right before Christmas time we have a gift exchange (white elephant/yankee swap type thing) within J. People buy some silly gifts and have a ball trying to take the best ones for ourselves (for some definitions of best).
              </p>

              <h3>Senior Dinner</h3>
              <p>
                Every year we like to dress up fancy pancy and go out to some restaurant to enjoy a nice dinner with our entry’s seniors as a sort-of farewell. We usually try to wrap up the night by spending time talking about (usually funny and embarrassing) memories/moments with the seniors.
              </p>

              <h3>Stressed Desserts</h3>
              <p>
                When under stress, one of the first impulses is to pig out on junk food and anything that offers you a delicious taste at maximum cost to your personal health, so why not do it with friends? Once a semester, when we sense that the stress is getting high due to a ton of assignments/tests, we have a “Stressed Desserts” study break (stressed = desserts spelled backwards :D) where we can all pig out together and vent out all of our academic and personal frustrations at the world and MIT.
              </p>

              <h3>Bad Puns</h3>
              <p>
                They say laughter is great way to handle stress, and at in J, we spend a lot of time laughing. Jokes are a great way to do so, but as we are engineers and not liberal arts majors, our jokes can often come across as knee-slappers or super nerdy (don’t worry, once you start hanging out with people in your major, those puns will really take off). Sometimes, we have those awkward moments when almost everyone misses the joke. But ultimately, bad or good, awkward or not awkward, we love to make puns: they’re a great way to break out of the monotony that is PSets and classes.
              </p>

              <h3>Bowling</h3>
              <p>
                Every semester or so we venture out to the wilderness known as Alewife (actually, just the end of the Red Line) and compete for eternal glory. The game? Bowling.
              </p>

              <h3>Brownie Night</h3>
              <p>
                Every week or so in the evening, we chow down on some delicious, fresh-baked brownies. It serves as a great break between studying/work, and everyone has a good time.
              </p>

              <h3>Finals Breakfasts</h3>
              <p>
                During finals week, our lovely GRTs provide us with breakfast so we have one less thing to worry about during this stressful time. It’s a great time to relax before exams, hang out, and wish each other the best of luck!
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
      </div>
    );
  }
}

export default Traditions;
