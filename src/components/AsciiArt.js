import React from 'react';

const AsciiArt = ({ type, className = "" }) => {
  const art = {
    dog: `
    / \\__
   (    @\\___
   /         O
  /   (_____/
 /_____/   U
`,
    dog2: `
      /^--^\\     /^--^\\     /^--^\\
      \\____/     \\____/     \\____/
     /      \\   /      \\   /      \\
    |        | |        | |        |
     \\__  __/   \\__  __/   \\__  __/
|^|^|^|\\/  |^|^|^|\\/  |^|^|^|\\/  |
| | | |   | | | |   | | | |   |
| | | |   | | | |   | | | |   |
`,
    paw: `
      _
     /\\_\\
    ( \\   \\
     \\    \\
      \\____\\
`,
    computer: `
    ________________
   /                \\
  /  > HELLO!       \\
 /   > I'M BEAU!     \\
|_____________________|
|  _________________  |
| |                 | |
| |  $ npm start    | |
| |  $ git commit   | |
| |  $ code .       | |
| |_________________| |
|_____________________|
   _[_______]___
  |_____________|
`,
    terminal: `
┌─────────────────────────────┐
│ beau@portfolio:~$          │
│                             │
│ > Welcome to my portfolio   │
│ > Built with React         │
│ > & lots of coffee ☕      │
│                             │
│ █                          │
└─────────────────────────────┘
`,
    welcome: `
     Click an icon in the dock below
            to get to know me

               / \\__
              (    @\\___
              /         O
             /   (_____/
            /_____/   U
`,
    code: `
  { }
 /   \\
|  >  |
 \\ _ /
   |
  / \\
`,
    rocket: `
       /\\
      /  \\
     |    |
     |    |
    /|    |\\
   /_|    |_\\
     |____|
    /|    |\\
   / |    | \\
  /  | ** |  \\
 /___|____|___\\
     /    \\
    /______\\
`,
    coffee: `
   ( (
    ) )
  ....
  |  |
  |  |
  |  |
  |__|
`,
    heart: `
  ♥
`,
  };

  return (
    <pre className={`font-mono leading-tight ${className}`}>
      {art[type] || art.dog}
    </pre>
  );
};

export default AsciiArt;
