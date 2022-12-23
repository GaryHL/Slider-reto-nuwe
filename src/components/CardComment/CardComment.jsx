import React from "react";
import "./cardComment.css";
import Background_svg from "../../assets/Background_svg";

const CardComment = ({user}) => {
   return (
      <div className="container_card">
         <div className="user_info">
            <div className="container_user_img">
               <img src={user.img} alt="" className="user_img" />
               <img src={user.img_country} alt="" className="user_country" />
            </div>
            <h2 className="user_name">{user.user_name}</h2>
         </div>
         <p className="comment">{user.comment}</p>
         <Background_svg className="background_svg" />
      </div>
   );
};

export default CardComment;
