import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
faq_page=[
  {
    question:'What is a mod?',
    answer:'A mod (short for modification) is a user-created content that alters or enhances the gameplay experience of a video game. In this context, it refers to custom cars for Assetto Corsa.',
  },
  {
    question:'How do I install mods for Assetto Corsa?',
    answer:'Installing mods for Assetto Corsa typically involves copying the mod files to the appropriate game directories. Detailed installation instructions are usually provided with each mod in the repository.',
  },
  {
    question:'Are mods in this repository free?',
    answer:'Yes, all the mods in this repository are available for free download and use.',
  },
  {
    question:'Are these mods official content?',
    answer:'No, the mods in this repository are created by the community and are not official content from the game developers.',
  },
  {
    question:'Can I use these mods in multiplayer?',
    answer:'It depends on the specific mod. Some mods may be compatible with multiplayer, while others may be intended for single-player use only. Check the mod description or consult the mod creator for more information.',
  },
  {
    question:'Can I share my own mods on this repository?',
    answer:'Yes, we welcome contributions from the modding community. Please follow the submission guidelines and requirements outlined on our website to share your mods with the community.',
  },
  {
    question:'Can I use these mods for commercial purposes?',
    answer:'The mods in this repository are intended for personal use and enjoyment. Using them for commercial purposes without proper permission from the mod creators may violate their copyrights and terms of use.',
  },
]
  

}
