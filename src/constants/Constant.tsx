export type Navlink = {label: string, url:string, id:number}
export const navLinks:Navlink[]  = [
    { 
        label: "Features", 
        url: "#features",
        id:1 ,
     },
     { 
        label:"About", 
        url: "#about",
        id:2
    },

    { 
        label:"Workflow", 
        url: "#workflow",
        id:3
    },

    { 
        label: "Contact",
         url: "#contact",
         id:4
    },
    { 
        label: "Pricing",
         url: "#pricing",
         id: 5
    },
   
  ];
//   {label: string, url:string, id:number, name?:string}[]
// interface Navlink {label: string, url:string, id:number, name?:string}
