import React from "react";
import "./cardComment.css";
import Background_svg from "../../assets/Background_svg";

const CardComment = (props) => {
   return (
      <div className="container_card">
         <div className="user_info">
            <div className="container_user_img">
               <img src={props.img} alt="" className="user_img" />
            </div>
            <h2 className="user_name">{props.user_name}</h2>
         </div>
         <p className="comment">{props.comment}</p>
         <Background_svg className="background_svg" />
      </div>
   );
};

export default CardComment;
