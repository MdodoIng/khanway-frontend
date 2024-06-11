import {Modal} from "react-bootstrap";
import {IconButton, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

export type PushCodeModalProps = {
    code?: string;
    setIsPushCodeModalOpen: (isOpen: boolean) => void;
    isPushCodeModalOpen: boolean;
}

const PushCodeModal = (props: PushCodeModalProps) => {
    const {t} = useTranslation();
    const {code, setIsPushCodeModalOpen, isPushCodeModalOpen} = props;
    return (
        <Modal show={isPushCodeModalOpen} centered={true} size={'xl'} aria-labelledby="contained-modal-title-vcenter" className={"p-0"}>
            <div className={`modal-wrap active`} style={{padding: 0}}>
                <div className="modal-container" style={{paddingBottom: 0, paddingLeft: 0, paddingRight: 0}}>
                    <div className="md-body" style={{paddingRight: '30px', paddingLeft: '30px'}}>
                        <IconButton
                            aria-label="close"
                            size={"large"}
                            onClick={() => setIsPushCodeModalOpen(false)}
                            sx={{position: 'absolute', right: 8, top: 8,}}>
                            <Close/>
                        </IconButton>
                        <div className="md-title mb-4">{t('modal_push_code.title')}</div>
                        <div className="md-con mb-3">
                            <Typography variant="h4" className={"mb-1"}
                                        style={{color: "#000"}}>{code}</Typography>
                        </div>
                        <small style={{color: '#1976d2'}}>{t(`modal_push_code.description`)}</small>
                        <small style={{color: '#1976d2'}}>{t(`modal_push_code.description2`)}</small>
                    </div>

                    <div className="md-btn">
                        <button className="btn btn-primary w-100 accept-btn"
                            onClick={() => setIsPushCodeModalOpen(false)}>
                            {t('modal_push_code.accept')}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PushCodeModal;