import React, { useState, useEffect, useRef } from "react";

const SlotMachineItem = (props) => {
  const { animationName, position, animationDelay } = props;

  return (
    <div className="slot_wrapper">
      <img className="slot_item" src="slot_0.png" />
      <img className="slot_item" src="slot_1.png" />
      <img className="slot_item" src="slot_2.png" />
      <img className="slot_item" src="slot_3.png" />
      <img className="slot_item" src="slot_4.png" />
      <img className="slot_item" src="slot_5.png" />
      <img className="slot_item" src="slot_6.png" />
      <img className="slot_item" src="slot_7.png" />
      <img className="slot_item" src="slot_8.png" />
      <img className="slot_item" src="slot_9.png" />
      <style jsx>{`
        .slot_wrapper {
          display: inline-block;
          width: 10%;
          height: 100%;
          transform: translateY(${position * -100}%);
          transition: 1s ease-out;
          animation-name: ${animationName};
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 0.5s;
          animation-delay: ${animationDelay}s;
        }
        .slot_wrapper > .slot_item {
          display: block;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

const numberSplit = (num) => {
  const _num = num.toString();
  const arr = [];
  for (let i = 0; i < _num.length; i++) {
    arr.push(+_num[i]);
  }
  return arr;
};

const SlotMachine = (props) => {
  const { totalPush } = props;
  const [animationNameArr, setAnimationNameArr] = useState([]);
  const [positionArr, setPositionArr] = useState(numberSplit(totalPush));
  const [slotHeight, setSlotHeight] = useState(0);

  const slotContainerRef = useRef();

  /**
   * totalPush 조회
   */
  const setUpSlotData = async (totalPush) => {
    // const { data } = await commonApi.get("/push/all");
    if (totalPush) {
      const _positionArr = numberSplit(totalPush);
      const _positionArrLength = _positionArr.length;
      // 슬롯머신 숫자판 자릿수
      const SLOT_SIZE = 10;
      // 슬롯머신 숫자판 자릿수에서 totalPush로 split해서 만든 숫자배열의 크기를 뺀만큼 앞에 0으로 채워준다
      for (let i = 0; i < SLOT_SIZE - _positionArrLength; i++) {
        _positionArr.unshift(0);
      }
      const _animationNameArr = [];
      _positionArr.forEach((item) => {
        _animationNameArr.push("rolling");
      });
      setAnimationNameArr(_animationNameArr);
      setPositionArr(_positionArr);
    }
  };

  /**
   * 순차적으로 애니메이션 none 처리 핸들러
   * @param {number} idx totalPush split 한 배열 인덱스(역순)
   * @param {number} timing setTimeout delay 시간
   */
  const handleAnimationName = (idx, timing) => {
    setTimeout(() => {
      setAnimationNameArr((arr) => {
        const prevArr = arr.filter((v, i) => i < idx);
        const nextArr = arr.filter((v, i) => i > idx);
        return [...prevArr, "none", ...nextArr];
      });
    }, timing);
  };

  // Total Push가 조회 되면 순차적으로 rolling 애니메이션 stop
  useEffect(() => {
    for (let i = 0; i < positionArr.length; i++) {
      handleAnimationName(positionArr.length - 1 - i, 500 + i * 150);
    }
  }, [positionArr]);

  useEffect(() => {
    console.log("totalPush : ", totalPush);
    if (totalPush) {
      setUpSlotData(totalPush);
    }
  }, [totalPush]);

  useEffect(() => {
    if (slotContainerRef && slotContainerRef.current) {
      setSlotHeight(slotContainerRef.current.offsetHeight);
    }
  }, [slotContainerRef]);

  return (
    <div className="slot-machine_container">
      <img className="slot_bg" src="slotmachine_bg.png" />
      <div className="slot_container" ref={slotContainerRef}>
        {positionArr.map((item, i) => (
          <SlotMachineItem
            key={i}
            animationName={
              animationNameArr[i] === "none"
                ? "none"
                : i % 2 === 0
                ? animationNameArr[i]
                : `${animationNameArr[i]}_reverse`
            }
            position={item}
            animationDelay={((positionArr.length - i) * 10) / 1000}
          />
        ))}
      </div>
      <style jsx>{`
        .slot-machine_container {
          position: relative;
          margin-bottom: 6px;
        }
        .slot_bg {
          width: 100%;
        }
        .slot_container {
          position: absolute;
          left: 11.75%;
          top: 15.7%;
          width: 86%;
          height: ${slotHeight === 0 ? "70.37%" : slotHeight + "px"};
          white-space: nowrap;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SlotMachine;
