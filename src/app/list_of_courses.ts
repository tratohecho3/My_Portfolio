import { Course } from './course';

export const COURSES: Course[] = [
    {
        id:0,
        password:'clave123', 
        title:'Typescript 2019 Esencial', 
        description:'El curso mas completo antes de Angular', 
        image:"./assets/curso_TS2.jpg",
        teachable:"https://www.academiaweb.ca/p/typescript/?coupon_code=PAGINAWEB", 
        udemy:"https://www.udemy.com/course/curso-de-typescript-2019-esencial-el-curso-antes-de-angular/?referralCode=41B1A84B9C10D5C30568", 
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
    },

    {
        id:2, 
        password:'clave123', 
        title:'Git y Github Profesional', 
        description:'Domina el Sistema de Control de Versiones', 
        image:"./assets/curso_git_github.jpg",
        teachable:"https://www.academiaweb.ca/p/git-y-github-profesional/?coupon_code=PAGINAWEB", 
        udemy:"https://www.udemy.com/course/curso-de-git-y-github-git-profesional-desde-cero/?referralCode=82C485B01B3E73BFD078", 
        youtube: ""
    }
    

]