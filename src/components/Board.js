import React from "react";
import { useSelector } from "react-redux";
import { TbProgressCheck } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs"; //BsReception4
import "./Board.css";
import Card from "./Card";
import userimg from "../assets/user.png"

const Board = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{justifyContent: "space-evenly"}}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
                // style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {!user ? (
                      <TbProgressCheck />
                    ) : (
                      <>
                        <div className="image">
                          <img
                            src={userimg}
                            alt="userimage"
                          />
                        </div>
                      </>
                    )}
                    <span style={{marginLeft: "5px"}}>
                      {element[index]?.title} {element[index]?.value?.length}
                    </span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg />
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      <Card
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Board;