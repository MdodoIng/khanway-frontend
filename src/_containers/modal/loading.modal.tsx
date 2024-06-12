import {Player} from '@lottiefiles/react-lottie-player';
import "./loading.modal.css";
import {RootState} from "@reducer/root.reducer.tsx";
import {useDispatch, useSelector} from "react-redux";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";

const LoadingModal = () => {
    const dispatch = useDispatch();
    const {isOpenLoadingModal} = useSelector((state: RootState) => state.ModalReducer);

    return (
        <div className={`loading ${isOpenLoadingModal === true  ? 'active' : ''}`}>
        {/*<div className={`loading active`}>*/}
            <div className="loading-lottie">
                <Player src={"/assets/loading.json"} background={"transparent"} speed={1}
                        style={{width: '100px', height: '100px'}} loop={true} autoplay={true}/>
                <button className={"btn btn-primary mt-5"} onClick={() => dispatch(onToggleLoadingModalAction(false))}>Close</button>
            </div>
        </div>
    )
}

export default LoadingModal;