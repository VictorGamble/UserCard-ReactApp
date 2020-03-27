import React from "react";




const ProCard = props => {
  console.log("Props is =>", props)
  const { userData } = props;
  console.log('user Data is', userData)
  return (
    <div>
      <img
        src={userData.picture.thumbnail}
        alt="#"
      />
      <p>
#
      </p>
    </div>
  );
};




export default ProCard;