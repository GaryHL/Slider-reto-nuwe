import { useState } from "react";
import "./App.css";
import CardComment from "./components/CardComment/CardComment";
import { FcPrevious, FcNext } from "react-icons/fc";

function App() {
   const users = [
      {
         user_name: "Jhoe Doe 1",
         img: "https://imgs.search.brave.com/IMcuMiRnZ7WejxeXK3ZJ7OMHo-7c24g1U5wwgBm04Ns/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC85Ni9mMi9hOC85/NmYyYTg1NzlkYTY2/OTcxNzQ2MGY0OWE3/ZWUxYWRhZC5qcGc",
         comment:
            "Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.",
      },
      {
         user_name: "Ana  2",
         img: "https://imgs.search.brave.com/IMcuMiRnZ7WejxeXK3ZJ7OMHo-7c24g1U5wwgBm04Ns/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC85Ni9mMi9hOC85/NmYyYTg1NzlkYTY2/OTcxNzQ2MGY0OWE3/ZWUxYWRhZC5qcGc",
         comment:
            "Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.",
      },
      {
         user_name: "Jose Doe 3",
         img: "https://imgs.search.brave.com/IMcuMiRnZ7WejxeXK3ZJ7OMHo-7c24g1U5wwgBm04Ns/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC85Ni9mMi9hOC85/NmYyYTg1NzlkYTY2/OTcxNzQ2MGY0OWE3/ZWUxYWRhZC5qcGc",
         comment:
            "Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.",
      },
      {
        user_name: "Antoio Doe 3",
        img: "https://imgs.search.brave.com/IMcuMiRnZ7WejxeXK3ZJ7OMHo-7c24g1U5wwgBm04Ns/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC85Ni9mMi9hOC85/NmYyYTg1NzlkYTY2/OTcxNzQ2MGY0OWE3/ZWUxYWRhZC5qcGc",
        comment:
           "Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.",
     },
     {
      user_name: "Juan Doe 3",
      img: "https://imgs.search.brave.com/IMcuMiRnZ7WejxeXK3ZJ7OMHo-7c24g1U5wwgBm04Ns/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC85Ni9mMi9hOC85/NmYyYTg1NzlkYTY2/OTcxNzQ2MGY0OWE3/ZWUxYWRhZC5qcGc",
      comment:
         "Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.",
   },
   
   ];

   const [selectUser, setSelectUser] = useState(0);

   const selectPrev = () => {
    console.log("hola");
    console.log(users.length)
    if(selectUser === 0){
      setSelectUser(users.length - 1 )
      console.log("hoal")
    }
    else{
      setSelectUser(selectUser -1)
    }
    // selectUser === 0 ? setSelectUser(users.length)  : setSelectUser(selectUser - 1) 
   };

   const selectNext = () => {
    selectUser === users.length -1 ? setSelectUser(0) :setSelectUser(selectUser + 1)
   };

   return (
      <div className="App">
         <button className="btn btn_prev" onClick={selectPrev}>{<FcPrevious />}</button>
         <CardComment
            img={users[selectUser].img}
            user_name={users[selectUser].user_name}
            comment={users[selectUser].comment}
         />
         <button className="btn btn_next" onClick={selectNext}>{<FcNext />}</button>
      </div>
   );
}

export default App;
