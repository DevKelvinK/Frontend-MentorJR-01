import styles from "./Main.module.css";

import imgHero from "../assets/screen-mockups.svg";

import iconCommunities from "../assets/icon-communities.svg";
import iconMessages from "../assets/icon-messages.svg";

import Illustration1 from "../assets/illustration-grow-together.svg";
import Illustration2 from "../assets/illustration-flowing-conversation.svg";
import Illustration3 from "../assets/illustration-your-users.svg";

import { Card } from "./Card";
import { About } from "./About";

export function Main() {
  return (
    <main>
      <section className={styles.sectionHeroCta}>
        <h1>Build The Community Your Fans Will Love</h1>

        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <button disabled="disabled">
          <a href="#buttonCTA">Get Started For Free</a>
        </button>

        <img src={imgHero} alt="Banner Hero" />
      </section>

      <div className={styles.cards}>
        <Card
          src={iconCommunities}
          score="1.4k+"
          description="Communities Formed"
        />

        <Card src={iconMessages} score="2.7m+" description="Messages Sent" />
      </div>

      <About
        bgTopCustomClass="bgTop1"
        bgBottomCustomClass="bgBottom1"
        sectionTitle="Grow Together"
        paragraph="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        src={Illustration1}
      />

      <About
        sectionCustomClass="customSection"
        sectionTitle="Flowing Conversations"
        paragraph="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        src={Illustration2}
      />

      <About
        bgTopCustomClass="bgTop2"
        bgBottomCustomClass="bgBottom2"
        sectionTitle="Your Users"
        paragraph="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        src={Illustration3}
      />

      <div className={styles.cta} id="buttonCTA">
        <h2>Ready To Build Your Community?</h2>
        <button disabled="disabled">
            <a href="https://www.youtube.com/@KK-DoZeroAoSenior" target="_blank">Get Started For Free</a>
        </button>
      </div>
    </main>
  );
}
