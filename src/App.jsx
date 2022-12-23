import { useState } from "react";
import "./App.css";
import CardComment from "./components/CardComment/CardComment";
import { FcPrevious, FcNext } from "react-icons/fc";

function App() {
   const users = [
      {
         user_name: "Jhoe Doe",
         img: "https://imgs.search.brave.com/IMcuMiRnZ7WejxeXK3ZJ7OMHo-7c24g1U5wwgBm04Ns/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC85Ni9mMi9hOC85/NmYyYTg1NzlkYTY2/OTcxNzQ2MGY0OWE3/ZWUxYWRhZC5qcGc",
         comment:
            "Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.",
            img_country:
               "https://imgs.search.brave.com/aBRNpCo4-tVQlPSk_vJyq0brDkbB6_T5aBHKJeNQ-tk/rs:fit:650:342:1/g:ce/aHR0cHM6Ly9jZW1l/bnRvLnRvcC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wNy9i/YW5kZXJhLWRlLWVz/dGFkb3MtdW5pZG9z/LnBuZw",
      },
      {
         user_name: "Ana  Sim",
         img: "https://imgs.search.brave.com/BgInYEX9qZMfVdTHhjtIVXKinogEGeekq0vDqq1L9-o/rs:fit:747:1024:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LmRl/dGlwcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDEv/RWxsZW5fUGFvXzIw/MTUuanBnP3Jlc2l6/ZT03NDclMkMxMDI0",
         comment:
            "Aprender a programar es mucho más fácil con retos. Me ayudan a dividir grandes proyectos en pequeños retos, lo que luego me facilita aprender cómo funciona cada parte.",
         img_country:
            "https://imgs.search.brave.com/aBRNpCo4-tVQlPSk_vJyq0brDkbB6_T5aBHKJeNQ-tk/rs:fit:650:342:1/g:ce/aHR0cHM6Ly9jZW1l/bnRvLnRvcC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wNy9i/YW5kZXJhLWRlLWVz/dGFkb3MtdW5pZG9z/LnBuZw",
      },
      {
         user_name: "Pedro Nuñez ",
         img: "https://imgs.search.brave.com/3uuqVNP-pati-8FNpYzcpE1Si_cPW5tR79V5p9knFZA/rs:fit:670:370:1/g:ce/aHR0cHM6Ly93d3cu/b2lpLm94LmFjLnVr/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA5L0NoaWNvLUNh/bWFyZ28tNjcweDM3/MC5qcGc",
         comment:
            "Me gusta mucho toda la experiencia que tiene el sitio web. Es muy único y sencillo al mismo tiempo. El diseño es muy bonito.",
         img_country:
            "https://imgs.search.brave.com/N63Ocz7JdLQuOcNaWD_YTEDlM90bSySVcH25eKVTqZc/rs:fit:1024:736:1/g:ce/aHR0cDovL2Nkbi50/aGluZ2xpbmsubWUv/YXBpL2ltYWdlLzM2/NTU1NzM1MTE4NjQz/MjAwMS8xMDI0LzEw/L3NjYWxldG93aWR0/aC8wLzAvMS8xL2Zh/bHNlL3RydWU_d2Fp/dD10cnVl",
      },
   ];

   const [selectUser, setSelectUser] = useState(0);

   const selectPrev = () => {
      selectUser === 0
         ? setSelectUser(users.length - 1)
         : setSelectUser(selectUser - 1);
   };

   const selectNext = () => {
      selectUser === users.length - 1
         ? setSelectUser(0)
         : setSelectUser(selectUser + 1);
   };

   return (
      <div className="App">
         <button className="btn btn_prev" onClick={selectPrev}>
            {<FcPrevious />}
         </button>
         <CardComment user={users[selectUser]} />
         <button className="btn btn_next" onClick={selectNext}>
            {<FcNext />}
         </button>
      </div>
   );
}

export default App;
