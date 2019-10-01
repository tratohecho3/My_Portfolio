import { Course } from './course';

export const COURSES: Course[] = [
    {
        id:0,
        password:'clave123', 
        title:'Typescript 2019 Esencial', 
        description:'El curso mas completo antes de Angular', 
        image:"./assets/curso_TS2.jpg",
        teachable:"https://www.academiaweb.ca/p/typescript/?coupon_code=PAGINAWEB", 
        udemy:"https://www.udemy.com/curso-de-typescript-2019-esencial-el-curso-antes-de-angular/?couponCode=PAGINAWEB", 
        youtube: ""
    },

    {
        id:1, 
        password:'clave123', 
        title:'Introduccion a la programacion: GIT y Terminal', 
        description:'Inicia en el mundo de la programacion', 
        image:"./assets/curso_herramientas_gratis.jpg",
        teachable:"https://www.academiaweb.ca/p/introduccion-a-la-programacion-git-terminal", 
        udemy:"none", 
        youtube: ""
    }

    

]