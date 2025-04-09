export type Navlink = {label: string, url:string, id:number}
// interface Navlink {label: string, url:string, id:number, name?:string}
export const navLinks:Navlink[]  = [
    { 
        label: "Hero", 
        url: "#",
        id:1 ,
     },
     { 
        label:"About", 
        url: "#about",
        id:2
    },

    { 
        label:"Features", 
        url: "#features",
        id:3
    },

    { 
        label: "Pricing",
         url: "#pricing",
         id:4
    },
    { 
        label: "Testimonials",
         url: "#testimony",
         id: 5
    },
    { 
        label: "Contact",
        url: "#contact",
        id: 6
    },
  ];
//   {label: string, url:string, id:number, name?:string}[]