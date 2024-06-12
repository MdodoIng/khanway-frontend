import {LiaCheckCircleSolid} from "react-icons/lia"
import {useEffect, useState} from "react"
import {
  addRefferal,
  addTgUsername,
  checkUser,
  // emailVerify,
  getTgChannel,
  getTgGroup,
  // getTwitter,
  // getUser,
  getUserByEmail,
  getUserByYt,
  // login,
  // otpVerify,
  // register,
  // twitterFollow,
} from "../service/api"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import useMediaQuery from "@mui/material/useMediaQuery"
// import {useTheme} from "@mui/material/styles"
import {CircularProgress} from "@mui/material"
import {CopyToClipboard} from "react-copy-to-clipboard"
// import {SERVER_URL} from "../config"
import {useNavigate, useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {RootState} from "@reducer/root.reducer"
import useStylesheet from "@helper/useStylesheet.tsx"
import {useTranslation} from "react-i18next"
// import silver from "../asset/image/silver.gif"

export const MainPage = () => {
  useStylesheet("/css/landing.css")
  // useStylesheet('/css/landing-add3.css');
  useStylesheet("/css/landing-add.css")
  useStylesheet("/css/landing-add3.css")
  useStylesheet("/css/landing-add2.css")
  useStylesheet("/css/airdrop.css")
  const {t} = useTranslation()

  const tabs = {
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
    MAIN: "MAIN",
    VERIFY: "VERIFY",
  }
  const params = useParams()
  // console.log("%c Line:39 🍖 params", "color:#2eafb0", params)
  useEffect(() => {
    if (params.id) {
      setRefferel(params.id)
      // setRefferelV(true)
    }
  }, [params])
  const {user} = useSelector((root: RootState) => root.AuthReducer)
  console.log("%c Line:46 🎂 userEmail", "color:#ed9ec7", user)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(tabs.MAIN)
  // const [name, setName] = useState("")
  const [email, setEmail] = useState()
  // const [password, setPassword] = useState("")
  const [telegram, setTelegram] = useState("")
  // const [otp, setOtp] = useState("")
  const [emailV, setEmailV] = useState(false)
  console.log("%c Line:64 🥑 emailV", "color:#2eafb0", emailV)
  // const [twitterL, setTwitterL] = useState(false)
  const [groupLoad, setGroupLoad] = useState(false)
  const [channelLoad, setChannelLoad] = useState(false)
  // console.log("%c Line:45 🍩 twitterL", "color:#ea7e5c", twitterL)
  // const [twitterF, setTwitterF] = useState(false)
  const [telegramC, setTelegramC] = useState(false)
  const [telegramG, setTelegramG] = useState(false)
  const [telegramV, setTelegramV] = useState(false)
  const [btn1, setBtn1] = useState(false)

  useEffect(() => {
    if (user?.email && user?.email !== "") {
      setEmail((user as any)?.email)
      setEmailV(true)
    }
  }, [user])

  // console.log("%c Line:53 🍅 btn1", "color:#ea7e5c", btn1)
  const [btn2, setBtn2] = useState(false)
  const [youtubeV, setYoutubeV] = useState(false)
  const [refferelV, setRefferelV] = useState(false)
  const [refferel, setRefferel] = useState("")
  const [refferelP, setRefferelP] = useState()
  const [button, setButton] = useState(1)
  console.log("%c Line:91 🌭 button", "color:#3f7cff", button)
  // console.log("%c Line:52 🌶 button", "color:#ed9ec7", button)
  // const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  // const theme = useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  useEffect(() => {
    if (sessionStorage?.token) {
      setEmail(sessionStorage?.email)
      setActiveTab(tabs.MAIN)
      userByEmail()
    }
  }, [sessionStorage])

  // const handleLogin = () => {
  //   if (!email) {
  //     return toast.warning("Please enter email")
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //     return toast.warning("Please enter a valid email")
  //   } else if (password === "") {
  //     return toast.warning("Please enter password")
  //   }
  //   let body = {
  //     email: email,
  //     password: password,
  //   }
  //   setLoading(true)
  //   login(body)
  //     .then((res: any) => {
  //       console.log("res==>", res)
  //       sessionStorage.setItem("token", res?.data?.token)
  //       sessionStorage.setItem("email", res?.data?.userData?.email)
  //       if (res?.status) {
  //         toast.success(res?.message)
  //         setLoading(false)
  //         if (res?.data?.userData?.isEmailVerified) {
  //           setActiveTab(tabs.MAIN)
  //           userByEmail()
  //           setButton(2)
  //         } else {
  //           setActiveTab(tabs.VERIFY)
  //         }
  //         setPassword("")
  //       } else {
  //         setLoading(false)
  //       }
  //     })
  //     .catch((e: any) => {
  //       setLoading(false)
  //       toast.error(e.response?.data?.message)
  //     })
  // }

  // const handleRegister = () => {
  //   if (name === "") {
  //     return toast.warning("Please enter name")
  //   } else if (!email) {
  //     return toast.warning("Please enter email")
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //     return toast.warning("Please enter a valid email")
  //   } else if (password === "") {
  //     return toast.warning("Please enter password")
  //   }
  //   let body = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   }
  //   setLoading(true)
  //   register(body)
  //     .then((res: any) => {
  //       console.log("res==>", res)
  //       if (res?.status) {
  //         toast.success(res?.message)
  //         setLoading(false)
  //         setActiveTab(tabs.VERIFY)
  //         setPassword("")
  //         setName("")
  //       } else {
  //         setLoading(false)
  //       }
  //     })
  //     .catch((e: any) => {
  //       setLoading(false)
  //       toast.error(e.response?.data?.message)
  //     })
  // }
  // const verifyEmail = () => {
  //   if (!email) {
  //     return toast.warning("Please enter email")
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //     return toast.warning("Please enter a valid email")
  //   }
  //   setLoading(true)
  //   emailVerify({email: email})
  //     .then((res: any) => {
  //       console.log("res==>", res)
  //       if (res.status) {
  //         toast.success("OTP sent to email")
  //         // setButton(2)
  //         setOpen(true)
  //         setLoading(false)
  //       } else {
  //         toast.warning(res?.message)
  //         setLoading(false)
  //       }
  //     })
  //     .catch((e: any) => {
  //       console.log("e", e)
  //       toast.error(e.response?.data?.message)
  //       setLoading(false)
  //     })
  // }
  // const verify = () => {
  //   if (otp === "") {
  //     return toast.warning("Please enter otp")
  //   } else if (otp.length !== 6) {
  //     return toast.warning("Please enter a valid otp")
  //   }
  //   setLoading(true)
  //   let code: any = {
  //     code: otp,
  //   }
  //   let headers: any = {
  //     Authorization: email,
  //   }
  //   otpVerify(code, headers)
  //     .then((res: any) => {
  //       console.log("res==>", res)
  //       if (res.status) {
  //         toast.success(res?.message)
  //         setActiveTab(tabs.MAIN)
  //         setLoading(false)
  //         setEmailV(true)
  //         setOtp("")
  //         userByEmail()
  //         setOpen(false)
  //         // setButton(2)
  //       } else {
  //         toast.warning(res?.message)
  //         setLoading(false)
  //       }
  //     })
  //     .catch((e: any) => {
  //       console.log("e", e)
  //       toast.error(e.response?.data?.message)
  //       setLoading(false)
  //     })
  // }

  const userByEmail = () => {
    // if (email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    //   return toast.error("Enter email")
    // }
    if (!email) {
      return
    }
    let headers: any = {
      Authorization: email,
    }
    getUserByEmail(headers)
      .then((res: any) => {
        console.log("res==>", res)
        if (res.status) {
          // setRefferelP(res?.data?.refferelCode)
          if (email) {
            setEmailV(true)
            setButton(2)
          }
          if (sessionStorage.twitter) {
            setButton(3)
          }
          if (res?.data?.followOnTwitter) {
            // setTwitterF(true)
            // setTwitterL(true)
            setButton(4)
          }
          if (res?.data?.telegramUserName) {
            setTelegram(res?.data?.telegramUserName)
            setTelegramV(true)
            setButton(5)
          }
          if (res?.data?.telegramChennalJoined) {
            setTelegramC(true)
            setButton(6)
          }
          if (res?.data?.telegramGroupJoined) {
            setTelegramG(true)
            setButton(7)
          }
          if (res?.data?.ytSubscribe) {
            setYoutubeV(true)
            setButton(8)
          }
        } else {
          setButton(1)
          // setEmailV(false)
          setTelegramC(false)
          setTelegramG(false)
          setTelegram("")
          setYoutubeV(false)
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
        if (!e.response.data.status) {
          setButton(1)
          // setEmailV(false)
          setTelegramC(false)
          setTelegramG(false)
          setTelegram("")
          setYoutubeV(false)
          setRefferel("")
        }
      })
  }

  // const loginTwitter = () => {
  //   if (!email) {
  //     return
  //   }
  //   window.location.href =
  //       "https://newswebsite-potk.onrender.com/" +
  //       "auth/twitter/login?email=" +
  //       email
  //   sessionStorage.setItem("twitter", "true")
  // }
  // console.log("%c Line:266 🍏 sessionStorage", "color:#3f7cff", sessionStorage)

  // const handleTwitter = () => {
  //   window.open("https://twitter.com/KHAN_ZZANG", "_blank")
  //   let headers: any = {
  //     Authorization: email,
  //   }
  //   twitterFollow(headers)
  //       .then((res: any) => {
  //         console.log("twi==>", res)
  //         if (res?.success) {
  //           toast.success(res?.message)
  //           setTwitterF(true)
  //           setButton(4)
  //         }
  //       })
  //       .catch((e: any) => {
  //         console.log("e==>", e)
  //       })
  // }
  const handleTgUsername = () => {
    if (telegram === "") {
      return toast.warning("Please enter telegram username")
    }
    let headers: any = {
      Authorization: email,
    }
    addTgUsername({username: telegram}, headers)
      .then((res: any) => {
        console.log("tele==>", res)
        if (res?.status) {
          toast.success(res?.message)
          setButton(5)
          setTelegramV(true)
        }
      })
      .catch((e) => {
        console.log("e==>", e)
      })
  }
  const handleTgChannel = () => {
    if (!telegram) {
      return toast.error("Enter Telegram User Name")
    }
    let headers: any = {
      Authorization: email,
    }
    getTgChannel(headers)
      .then((res: any) => {
        console.log("teleChannel==>", res)
        if (res?.status) {
          toast.success(res?.message)
          window.open(res?.url, "_blank")
          setBtn1(true)
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
      })
  }
  const handleTgGroup = () => {
    if (telegram === "") {
      return toast.error("Enter Telegram User Name")
    }
    let headers: any = {
      Authorization: email,
    }
    getTgGroup(headers)
      .then((res: any) => {
        console.log("teleChannel==>", res)
        if (res?.status) {
          toast.success(res?.message)
          window.open(res?.url, "_blank")
          setBtn2(true)
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
      })
  }
  const checkTgUserC = () => {
    // if (!telegram) {
    //   return
    // }
    setChannelLoad(true)
    let params: any = {
      useraname: telegram,
      chennal: "1",
    }
    let headers: any = {
      Authorization: email,
    }
    checkUser(params, headers)
      .then((res: any) => {
        console.log("teleChannel==>", res)
        if (res?.status) {
          toast.success(res?.message)
          setChannelLoad(false)
          setTelegramC(true)
          setButton(6)
        } else {
          setChannelLoad(false)
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
        setChannelLoad(false)
        setBtn1(false)
        toast.error(e?.response?.data?.message)
      })
  }
  const checkTgUserG = () => {
    // if (!telegram) {
    //   return
    // }
    // window.open("https://t.me/khanteum_official", "_blank")
    setGroupLoad(true)
    let params: any = {
      useraname: telegram,
      chennal: "2",
    }
    let headers: any = {
      Authorization: email,
    }
    checkUser(params, headers)
      .then((res: any) => {
        console.log("teleChannel==>", res)
        if (res?.status) {
          toast.success(res?.message)
          setTelegramG(true)
          setButton(7)
          setGroupLoad(false)
        } else {
          setGroupLoad(false)
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
        setGroupLoad(false)
        setBtn2(false)
        toast.error(e?.response?.data?.message)
      })
  }

  // useEffect(() => {
  //   if (telegram) {
  //     checkTgUser()
  //   }
  // }, [telegram])

  const handleYoutube = () => {
    window.open("https://www.youtube.com/@KHAN_ZZANG", "_blank")
    let headers: any = {
      Authorization: email,
    }
    getUserByYt(headers)
      .then((res: any) => {
        console.log("ref==>", res)
        if (res?.status) {
          toast.success(res?.message)
          setYoutubeV(true)
          setButton(8)
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
      })
  }
  const handleRefferal = () => {
    if (refferel === "") {
      return toast.error("Enter refferal code")
    }
    setLoading(true)
    let code: any = {
      code: refferel,
    }
    let headers: any = {
      Authorization: email,
    }
    addRefferal(code, headers)
      .then((res: any) => {
        console.log("ref==>", res)
        if (res?.status) {
          setRefferelV(true)
          setLoading(false)
          setButton(9)
          toast.success("Refferel code verified")
          let headers: any = {
            Authorization: email,
          }
          getUserByEmail(headers)
            .then((res: any) => {
              console.log("res==>", res)
              if (res.status) {
                setRefferelP(res?.data?.refferelCode)
              }
            })
            .catch((e: any) => {
              console.log("e==>", e)
            })
        } else {
          setLoading(false)
          toast.error("Please enter valid referral code")
        }
      })
      .catch((e: any) => {
        console.log("e==>", e)
        setLoading(false)
        toast.error("Please enter valid referral code")
      })
  }

  useEffect(() => {
    if (activeTab === tabs.MAIN) {
      userByEmail()
    }
    // if (email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    //   loginTwitter()
    // }
  }, [email, activeTab])

  useEffect(() => {
    if (sessionStorage.twitter) {
      // setTwitterL(true)
      setButton(3)
    }
  }, [sessionStorage])
  return (
    <div
      className={`relative mx-auto flex w-[87vw] max-w-[90vw] lg:mx-auto  text-white`}>
      <div className="flex-1 flex-col mt-0 sm:mt-6 mx-auto lg:mt-0 w-[87vw] sm:flex">
        <div className="translate-y-0 sm:w-[85vw] w-[87vw] sm:mx-auto">
          <div
            style={{fontSize: "1.8vh", lineHeight: "24px", fontWeight: "600"}}
            className="text-[#fff] float-left">
            {t(`airdrop.header1`)}
          </div>
          <br />
          <h1
            style={{fontSize: "4vh", lineHeight: "130%", fontWeight: "700"}}
            className="text-[#18191a]  float-left">
            {t(`airdrop.header2`)} :
          </h1>
        </div>
        <div className="flex items-center sm:w-[85vw] 2xl:w-[80vw] w-[87vw] h-[60vh] sm:h-[40vh] mb-10 lg:h-[45vh] flex-1 gap-12 2xl:gap-28 mx-auto">
          {activeTab === tabs.MAIN ? (
            <div
              className={`${
                activeTab === tabs.MAIN ? "overflow-auto" : "overflow-hidden"
              } example w-[70%] 2xl:w-[60%] mt-8 flex-1 fill-available`}>
              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    1
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#fff] float-left w-[20vw] sm:w-auto text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#fff]"
                    value={email as any}
                    type="email"
                    readOnly
                    // onChange={(e: any) => setEmail(e.target.value)}
                    placeholder={t(`airdrop.tab1`)}
                  />
                </div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    {!emailV ? (
                      <button
                        // tabIndex="-1"
                        // disabled={button !== 1 || loading}
                        onClick={() => {
                          localStorage.setItem("airdrop", "airdrop")
                          navigate("/auth/login")
                        }}
                        className={`airdrop-btn sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full bg-[#f0f8ff] cursor-pointer hover:bg-[#f0f8ff] text-[#18191a]`}>
                        {t(`airdrop.tab1btn`)}
                      </button>
                    ) : (
                      <div className="size-[24px] text-[#fff]">
                        <LiaCheckCircleSolid />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                {"Enter OTP"}
              </DialogTitle>
                <DialogContent>
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={otp}
                    type="number"
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="ENTER OTP"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={verify} disabled={loading} autoFocus>
                    VERIFY
                  </Button>
                </DialogActions>
              </Dialog> 
                 
                  <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                    <div className="col-span-1">
                      <div
                          style={{
                            fontSize: "1.8vh",
                            lineHeight: "24px",
                            fontWeight: "600",
                          }}
                          className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                        2
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-[#fff] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold ">
                        Connect X (Twitter)
                      </div>
                    </div>
                    <div className="col-span-1 ">
                      <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                        {!twitterL ? (
                            <button
                                // tabIndex="-1"
                                onClick={loginTwitter}
                                disabled={button !== 2}
                                className={` sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full ${
                                    button === 2
                                        ? "bg-[#d8c05f] cursor-pointer"
                                        : "bg-[#f0f8ff] cursor-not-allowed"
                                } hover:bg-[#f0f8ff] text-[#18191a]`}>
                              Connect X
                            </button>
                        ) : (
                            <div className="size-[24px] text-[#fff]">
                              <LiaCheckCircleSolid />
                            </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                    <div className="col-span-1">
                      <div
                          style={{
                            fontSize: "1.8vh",
                            lineHeight: "24px",
                            fontWeight: "600",
                          }}
                          className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                        3
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-[#fff] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold ">
                        Follow&nbsp;
                        <a
                            href="https://twitter.com/KHAN_ZZANG"
                            target="_blank"
                            className="text-[#d8c05f] hover:text-[#fff]">
                          @Khanzzang
                        </a>
                        &nbsp; on X
                      </div>
                    </div>
                    <div className="col-span-1 ">
                      <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                        {!twitterF ? (
                            <button
                                // tabIndex="-1"
                                disabled={button !== 3}
                                onClick={handleTwitter}
                                className={` sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full ${
                                    button === 3
                                        ? "bg-[#d8c05f] cursor-pointer"
                                        : "bg-[#f0f8ff] cursor-not-allowed"
                                } hover:bg-[#f0f8ff] text-[#18191a]`}>
                              Follow X
                            </button>
                        ) : (
                            <div className="size-[24px] text-[#fff]">
                              <LiaCheckCircleSolid />
                            </div>
                        )}
                      </div>
                    </div>
                  </div>

                        */}

              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    2
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#fff] float-left w-[20vw] text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#fff]"
                    value={telegram}
                    type="email"
                    readOnly={telegramC && telegramG}
                    onChange={(e: any) => setTelegram(e.target.value)}
                    placeholder={t(`airdrop.tab2`)}
                  />
                </div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    {!telegramV ? (
                      <button
                        // tabIndex="-1"
                        onClick={handleTgUsername}
                        // disabled={button !== 4}
                        className={`airdrop-btn whitespace-pre-line sm:min-h-[40px] h-fit font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full cursor-pointer bg-[#f0f8ff] hover:bg-[#f0f8ff] text-[#18191a]`}>
                        {t(`airdrop.tab2btn`)}
                      </button>
                    ) : (
                      <div className="size-[24px] text-[#fff]">
                        <LiaCheckCircleSolid />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    3
                  </div>
                </div>
                <div className="col-span-1 text-[1.5vh] sm:text-[1.8vh] font-semibold">
                  {/* <div className="text-[#fff] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold">
                    Join&nbsp;
                    <a
                      href="https://t.me/Khanteum_Channel"
                      target="_blank"
                      className="text-[#d8c05f] hover:text-[#fff]">
                      Khanteum
                    </a>
                    &nbsp; Telegram Channel
                  </div> */}
                  {t(`airdrop.tab3`)}
                </div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    {!telegramC ? (
                      <>
                        {!btn1 ? (
                          <button
                            // tabIndex="-1"
                            // disabled={button !== 5}
                            onClick={() => {
                              handleTgChannel()
                            }}
                            className={`airdrop-btn sm:min-h-[40px] h-[5vh]  leading-[0px] font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full  cursor-pointer bg-[#f0f8ff] hover:bg-[#f0f8ff] text-[#18191a]`}>
                            {t(`airdrop.tab3btn`)}
                          </button>
                        ) : (
                          <button
                            // tabIndex="-1"
                            disabled={channelLoad}
                            onClick={checkTgUserC}
                            className={`airdrop-btn sm:min-h-[40px] h-[5vh]  leading-[0px] font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full cursor-pointer bg-[#f0f8ff] hover:bg-[#f0f8ff] text-[#18191a]`}>
                            {channelLoad ? (
                              <CircularProgress className="spinner" />
                            ) : (
                              t(`airdrop.tab2btn`)
                            )}
                          </button>
                        )}
                      </>
                    ) : (
                      <div className="size-[24px] text-[#fff]">
                        <LiaCheckCircleSolid />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    4
                  </div>
                </div>
                <div className="col-span-1 text-[1.5vh] sm:text-[1.8vh] font-semibold">
                  {/* <div className="text-[#fff] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold">
                    Join&nbsp;
                    <a
                      href="https://t.me/khanteum_official"
                      target="_blank"
                      className="text-[#d8c05f] hover:text-[#fff]">
                      Khan's Club
                    </a>
                    &nbsp; Telegram Group
                  </div> */}
                  {t(`airdrop.tab4`)}
                </div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    {!telegramG ? (
                      <>
                        {!btn2 ? (
                          <button
                            // tabIndex="-1"
                            onClick={handleTgGroup}
                            // disabled={button !== 6}
                            className={`airdrop-btn sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full cursor-pointer bg-[#f0f8ff] hover:bg-[#f0f8ff] text-[#18191a]`}>
                            {t(`airdrop.tab4btn`)}
                          </button>
                        ) : (
                          <button
                            // tabIndex="-1"
                            onClick={checkTgUserG}
                            disabled={groupLoad}
                            className={`airdrop-btn sm:min-h-[40px] h-[5vh]  leading-[0px] font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full  cursor-pointer bg-[#f0f8ff] hover:bg-[#f0f8ff] text-[#18191a]`}>
                            {groupLoad ? (
                              <CircularProgress className="spinner" />
                            ) : (
                              t(`airdrop.tab2btn`)
                            )}
                          </button>
                        )}
                      </>
                    ) : (
                      <div className="size-[24px] text-[#fff]">
                        <LiaCheckCircleSolid />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    5
                  </div>
                </div>
                <div className="col-span-1 text-[1.5vh] sm:text-[1.8vh] font-semibold">
                  {/* <div className="text-[#fff] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold">
                    Subscribe&nbsp;
                    <a
                      href="https://www.youtube.com/@KHAN_ZZANG"
                      target="_blank"
                      className="text-[#d8c05f] hover:text-[#fff]">
                      Khanteum Official
                    </a>
                    &nbsp; Youtube Channel
                  </div> */}
                  {t(`airdrop.tab5`)}
                </div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    {!youtubeV ? (
                      <button
                        // tabIndex="-1"
                        // disabled={button !== 7}
                        onClick={handleYoutube}
                        className={`airdrop-btn sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full cursor-pointer bg-[#f0f8ff] hover:bg-[#f0f8ff] text-[#18191a]`}>
                        {t(`airdrop.tab5btn`)}
                      </button>
                    ) : (
                      <div className="size-[24px] text-[#fff]">
                        <LiaCheckCircleSolid />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-black [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    6
                  </div>
                </div>
                <div className="col-span-1">
                  {/* {button < 8 ? (
                    <div className="text-[#fff] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold ">
                      {t(`airdrop.tab6`)}
                    </div>
                  ) : ( */}
                  <input
                    className="text-[#fff] w-[20vw] float-left text-[1.5vh] whitespace-pre-line sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#fff]"
                    value={refferelP ? refferelP : refferel}
                    type="email"
                    onChange={(e: any) => setRefferel(e.target.value)}
                    placeholder={t(`airdrop.tab6`)}
                  />
                  {/* )} */}
                </div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    {!refferelV ? (
                      <button
                        // tabIndex="-1"
                        onClick={handleRefferal}
                        disabled={loading}
                        className={`airdrop-btn sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full  cursor-pointer bg-[#f0f8ff] hover:text-[#18191a] text-[#18191a]`}>
                        {loading ? (
                          <CircularProgress className="spinner" />
                        ) : (
                          t(`airdrop.tab6btn`)
                        )}
                      </button>
                    ) : (
                      <div className="size-[24px] text-[#fff]">
                        <LiaCheckCircleSolid />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_15vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="block sm:hidden"></div>
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w-[50vw]">
                    <button
                      // tabIndex="-1"
                      // onClick={handleRefferal}
                      className={`airdrop-btn sm:min-h-[40px] h-fit font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full
                        bg-[#f0f8ff] text-[#18191a]`}>
                      <CopyToClipboard
                        text={`${window.location.origin}/airdrop/${
                          refferelP ? refferelP : ""
                        }`}
                        onCopy={() => (
                          console.log(
                            `${window.location.origin}/airdrop/${
                              refferelP ? refferelP : ""
                            }`,
                          ),
                          toast.success("Link Copied")
                        )}>
                        <div className="flex flex-row cursor-pointer">
                          Copy Your Referral Link
                        </div>
                      </CopyToClipboard>
                    </button>
                  </div>
                </div>
                <div className="block sm:hidden"></div>
              </div>
              {/* <div className="grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w-[50vw]">
                    <button
                      // tabIndex="-1"
                      onClick={handleRefferal}
                      disabled={loading}
                      className={`airdrop-btn sm:min-h-[40px] h-fit  font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full  cursor-pointer bg-[#f0f8ff] hover:text-[#18191a] text-[#18191a]`}>
                      <CopyToClipboard
                        text={`${window.location.origin}/airdrop/${
                          refferelP ? refferelP : ""
                        }`}
                        onCopy={() => (
                          console.log(
                            `${window.location.origin}/airdrop/${
                              refferelP ? refferelP : ""
                            }`,
                          ),
                          toast.success("Link Copied")
                        )}>
                        <div className="flex flex-row cursor-pointer">
                          Copy Your Referral Link
                        </div>
                      </CopyToClipboard>
                    </button>
                  </div>
                </div>
                <div className="block sm:hidden"></div>
              </div> */}
              {/* <div className="w:[35vw] grid lg:grid-cols-[56px_1fr_230px] 2xl:grid-cols-[56px_1fr_314px] grid-cols-[10vw_1fr_35vw] sm:grid-cols-[10vw_1fr_20vw] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div className="flex justify-end sm:w-[12vw] sm:h-full sm:ml-auto h-[5vh] w:[35vw]">
                    <button
                      // tabIndex="-1"
                      // onClick={handleRefferal}
                      className={`w:[35vh] airdrop-btn sm:min-h-[40px] h-fit font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-full
                        bg-[#f0f8ff] text-[#18191a]`}
                    >
                      <CopyToClipboard
                        text={`${window.location.origin}/airdrop/${
                          refferelP ? refferelP : ""
                        }`}
                        onCopy={() => (
                          console.log(
                            `${window.location.origin}/airdrop/${
                              refferelP ? refferelP : ""
                            }`
                          ),
                          toast.success("Link Copied")
                        )}
                      >
                        <div className="flex flex-row cursor-pointer">
                          Copy Your Referral Link
                        </div>
                      </CopyToClipboard>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          ) : (
            ""
          )}
          {/* {activeTab === tabs.LOGIN ? (
            <div className="mt-8 flex-1">
              <h1 className="text-[22px] sm:text-[30px] text-[#18191a] font-bold text-left">
                Login
              </h1>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    1
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={email}
                    type="email"
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    2
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={password}
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    placeholder="ENTER PASSWORD"
                  />
                </div>
              </div>
              <div
                onClick={() => setActiveTab(tabs.REGISTER)}
                className="text-[#18191a] hover:text-[#f0f8ff] mt-3 text-right font-normal text-[14px] sm:text-[20px]">
                New User?
              </div>
              <button
                // tabIndex="-1"
                onClick={handleLogin}
                disabled={loading}
                className={` sm:min-h-[40px] h-[5vh] leading-[0px] font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 mt-10 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-[70%]  bg-[#f0f8ff] text-[#18191a]`}>
                {loading ? <CircularProgress className="spinner" /> : "LOGIN"}
              </button>
            </div>
          ) : (
            ""
          )} */}
          {/* {activeTab === tabs.REGISTER ? (
            <div className="mt-8 flex-1">
              <h1 className="text-[22px] sm:text-[30px] text-[#18191a] font-bold text-left">
                Register
              </h1>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    1
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={name}
                    type="text"
                    onChange={(e: any) => setName(e.target.value)}
                    placeholder="ENTER NAME"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    2
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={email}
                    type="email"
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    3
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={password}
                    type="Password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    placeholder="ENTER PASSWORD"
                  />
                </div>
              </div>
              <div
                onClick={() => setActiveTab(tabs.LOGIN)}
                className="text-[#18191a] hover:text-[#f0f8ff] mt-3 text-right font-normal text-[14px] sm:text-[20px]">
                Alredy Registred?
              </div>
              <button
                // tabIndex="-1"
                onClick={handleRegister}
                disabled={loading}
                className={` sm:min-h-[40px] h-[5vh] leading-[0px] font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 mt-10 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-[70%]  bg-[#f0f8ff] text-[#18191a]`}>
                {loading ? (
                  <CircularProgress className="spinner" />
                ) : (
                  "REGISTER"
                )}
              </button>
            </div>
          ) : (
            ""
          )} */}
          {/* {activeTab === tabs.VERIFY ? (
            <div className="mt-8 flex-1">
              <h1 className="text-[22px] sm:text-[30px] text-[#18191a] font-bold text-left">
                VERIFY EMAIL
              </h1>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    1
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={email}
                    type="email"
                    readOnly
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER EMAIL"
                  />
                </div>
              </div>
              <div
                onClick={verifyEmail}
                className="text-[#18191a] hover:text-[#f0f8ff] cursor-pointer mt-3 text-right font-normal text-[14px] sm:text-[20px]">
                Send OTP
              </div>
              <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[10vw_1fr] items-center justify-between gap-[3vw] py-[3vh] border-b border-[#787897]">
                <div className="col-span-1">
                  <div
                    style={{
                      fontSize: "1.8vh",
                      lineHeight: "24px",
                      fontWeight: "600",
                    }}
                    className="flex sm:h-10 h-[5vh] w-[10vw] sm:w-14 items-center justify-center bg-[#f0f8ff] text-[#18191a] [clip-path:polygon(36%_0,100%_0,100%_50%,64%_100%,0_100%,0%_50%)]">
                    2
                  </div>
                </div>
                <div className="col-span-1">
                  <input
                    className="text-[#18191a] float-left text-[1.5vh] sm:text-[1.8vh] text-balance text-left font-semibold bg-transparent outline-none placeholder:text-[#18191a]"
                    value={otp}
                    type="number"
                    onChange={(e: any) => setOtp(e.target.value)}
                    placeholder="ENTER OTP"
                  />
                </div>
              </div>

              <button
                // tabIndex="-1"
                onClick={verify}
                disabled={loading}
                className={` sm:min-h-[40px] h-[5vh] leading-[0px] font-semibold sm:leading-[24px] sm:px-6 px-3 py-2 mt-10 text-[1.5vh] sm:text-[1.8vh] rounded-bl-md rounded-tr-md [clip-path:polygon(20px_0,100%_0,100%_50%,calc(100%-20px)_100%,0_100%,0_50%)] w-[70%]  bg-[#f0f8ff] text-[#18191a]`}>
                {loading ? <CircularProgress className="spinner" /> : "VERIFY"}
              </button>
            </div>
          ) : (
            ""
          )} */}
          <figure
            aria-hidden="true"
            className="relative h-fit w-fit hidden sm:block">
            <div className="relative h-full w-full flex justify-center">
            <img
                src="/images/mysteryegg.gif"
                alt="silver-egg"
                className="bg-transparent"
              />
              {/* <video
                autoPlay
                className="absolute inset-0"
                src={silver}
                style={{opacity: 1}}></video> */}
              {/* <video
                autoPlay
                className="absolute inset-0"
                src="https://blast.io/videos/orb-phase-0-enter.webm"
                style={{opacity: 0}}></video>
            </div> */}
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}
