import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
about_us_page=[
  {
    heading:`
    <h1>Welcome to <span class="corsacraft russo-one">CORSACRAFT</span></h1>
    `,
    paragraph:`
    Our project is dedicated to serving the vibrant community of Assetto Corsa users, mod creators, and racers who share our passion for sim-racing and software development. We understand the excitement and joy that comes from customizing and enhancing the Assetto Corsa experience, and we are here to make that journey even more enjoyable for you.
    `,
  },
  {
    heading:`
    About US
    `,
    paragraph: `
    At <span class="corsacraft russo-one">CORSACRAFT</span>, we are a group of sim-racing enthusiasts and software developers who came together to create a platform that caters to the diverse needs of the Assetto Corsa community. Our team consists of experienced individuals with a deep understanding of both the gaming world and the intricacies of modding.
    `,
  },
  {
    heading: `
    Our Mission
    `,
    paragraph:`
    Our mission is simple - to provide an easy-to-use and intuitive modding repository that connects mod creators with users and racers, fostering an environment of creativity, sharing, and collaboration. We believe in the power of community-driven content and aim to empower mod creators to showcase their talents and creations while offering a vast array of mods and tracks to enhance every racing experience.
    `,
  },

  {
    heading: `
    The Best Community to Share Mods:
    `,
    paragraph:`
    We take immense pride in fostering a warm and welcoming environment that promotes the seamless exchange of mods and ideas among racers. We believe that the strength of a community lies in its ability to connect individuals with shared passions, and that is precisely what we strive to achieve. Our platform serves as a hub for racers to interact, collaborate, and share their favorite mods, setups, and experiences.
    `,
  },

  {
    heading: `
    For Assetto Corsa Users:
    `,
    paragraph:`
    We strive to create an effortless experience for Assetto Corsa users. Our platform offers a user-friendly interface where you can easily browse, search, and find an impressive selection of mods and tracks to elevate your driving adventures. Whether you're seeking stunning new cars, challenging tracks, or realistic visual enhancements, we have you covered.
    `,
  },

  {
    heading: `
    For Mod Creators:
    `,
    paragraph:`
    As passionate modders ourselves, we recognize the importance of providing mod creators with a platform that celebrates their hard work and dedication. At CORSACRAFT, we invite you to share your creations with the community and receive the recognition you deserve. Our submission process is designed to be straightforward and hassle-free, allowing you to focus on what you love - crafting outstanding content for the Assetto Corsa community.
    `,
  },

  {
    heading: `
    For Racers and Enthusiasts:
    `,
    paragraph:`
    To the racing enthusiasts out there, we welcome you to join our vibrant community. Whether you're a seasoned racer or a newcomer eager to explore the world of sim-racing, our modding repository offers a wide range of content tailored to suit your preferences. Discover new cars, compete on unique tracks, and let your love for sim-racing soar to new heights.
    `,
  },

  {
    heading: `
    Join Us on this Journey:
    `,
    paragraph:`
    As we embark on this journey, we invite you to be a part of our growing community. Share your feedback, engage with fellow racers and mod creators, and let's elevate the Assetto Corsa experience together. At CORSACRAFT, we are fueled by the collective passion for sim-racing and software, and we are committed to delivering an exceptional experience to all.
    `,
  },
]
}
