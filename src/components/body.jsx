import React from "react";
import style from "./compo.module.css";

const Body = (props) => {
  const { data = [], color = [] } = props;

  return (
    <>
      <section className={style.body}>
        <div className={style.heading}>
          <marquee behavior="scroll" direction="left" scrollamount="20">
            <h1>Baloons</h1>
          </marquee>
          <marquee behavior="scroll" direction="right" scrollamount="20">
            <h1>Baloons</h1>
          </marquee>
        </div>
        <div className={style.slider}>
          <div className={style.cards}>
            {data.map((item, index) => {
              return (
                <div key={index} className={style.cardBallons}>
                  <img src={item.img} alt={item.name} />
                  <div className={style.child}> Name: {item.name}</div>
                  <div className={style.child1}>Color: {item.color}</div>
                  <div className={style.child2}>Cost:{item.cost}</div>
                  <div className={style.child3}>Rating: {item.link}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={style.body}>
        <div className={style.heading}>
          <marquee behavior="scroll" direction="right" scrollamount="25">
            <h1>Colors</h1>
          </marquee>
        </div>
        <div className={style.slider}>
          <div className={style.cards}>
            {color.map((item, index) => {
              return (
                <div key={index} className={style.cardBallons}>
                  <img src={item.img} alt={item.name} />
                  <div className={style.child}>Name: {item.name}</div>
                  <div className={style.child1}>Color: {item.color}</div>
                  <div className={style.child2}>Cost: {item.cost}</div>
                  <div className={style.child3}>Rating: {item.link}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
