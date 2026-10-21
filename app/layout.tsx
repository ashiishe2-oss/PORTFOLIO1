import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Ashish P. — Personal Developer Portfolio',
  description:
    'Personal developer portfolio of Ashish P., an AIML undergraduate and student developer in Bengaluru exploring Python, software development, semantic search, and full-stack applications.',
  openGraph: {
    title: 'Ashish P. — Personal Developer Portfolio',
    description:
      'Personal developer portfolio of Ashish P., an AIML undergraduate and student developer in Bengaluru exploring Python, software development, semantic search, and full-stack applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashish P. — Personal Developer Portfolio',
    description:
      'Personal developer portfolio of Ashish P., an AIML undergraduate and student developer in Bengaluru exploring Python, software development, semantic search, and full-stack applications.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(typeof window!=="undefined"){var f=window.fetch?window.fetch.bind(window):undefined;var patch=function(obj){if(!obj)return;var d=Object.getOwnPropertyDescriptor(obj,"fetch");if(!d||(!d.writable&&!d.set)){try{Object.defineProperty(obj,"fetch",{configurable:true,enumerable:true,get:function(){return f;},set:function(v){f=v;}});}catch(e){}}};patch(window);patch(globalThis);if(typeof Window!=="undefined"&&Window.prototype){patch(Window.prototype);}}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#0C0C0C] text-[#D7E2EA] antialiased selection:bg-[#7621B0]/40 selection:text-white overflow-x-hidden"
        style={{fontFamily: "'Kanit', sans-serif"}}
      >
        {children}
      </body>
    </html>
  );
}
