/* eslint-disable @typescript-eslint/no-unused-vars */
import { Player } from "@lottiefiles/react-lottie-player";
import "./loading.modal.css";
import { RootState } from "@reducer/root.reducer.tsx";
import { useDispatch, useSelector } from "react-redux";
import { onToggleLoadingModalAction } from "@action/modal.action.tsx";
import { useEffect, useState } from "react";

const LoadingModal = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { isOpenLoadingModal } = useSelector(
    (state: RootState) => state.ModalReducer
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isOpenLoadingModal]);

  return (
    <div className={`loading ${loading === true ? "active" : ""}`}>
      {/*<div className={`loading active`}>*/}
      <div className="loading-lottie">
        <img
          src="/images/horizontal-gif-logo.gif"
          alt=""
          className="logo-primary khanway-bottom"
        />
        {/* <Player
          src={"/assets/loading.json"}
          background={"transparent"}
          speed={1}
          style={{ width: "100px", height: "100px" }}
          loop={true}
          autoplay={true}
        /> */}
        {/* <button
          className={"btn btn-primary mt-5"}
          onClick={() => dispatch(onToggleLoadingModalAction(false))}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default LoadingModal;