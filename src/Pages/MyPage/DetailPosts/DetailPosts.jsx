import React, { useEffect, useState } from "react";
import "./DetailPosts.css";
import { getPostThunk } from "../../../Redux/modules/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailPosts = () => {
  const [loading, setLoding] = useState(false);
  const dispatch = useDispatch();
  const Param = useParams().id;
  const detailPost = useSelector(
    (state) => state.userInfo.post.filter((item) => item.id == Param)[0]
  );

  useEffect(() => {
    setLoding(true);
    dispatch(getPostThunk());
    setLoding(false);
  }, []);

  return (
    <>
      <div className="detail-posts-wrap-shape">
        <div className="detail-posts-mission-name-and-tag-area">
          <div className="detail-posts-mission-name-text">
            {detailPost?.missionName}
          </div>
          <div className="detail-posts-mission-tag-text">{detailPost?.tag}</div>
        </div>
        <img
          className="detail-posts-mission-image-area"
          src={
            detailPost
              ? detailPost.missionImgUrl
              : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"
          }
        ></img>
        <div className="detail-posts-mission-contents-box">
          <p className="detail-posts-mission-contents-text">
            {detailPost?.content}
          </p>
        </div>
        <button className="detail-posts-button-share">공유하기</button>
      </div>
    </>
  );
};

export default DetailPosts;