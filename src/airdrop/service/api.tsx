import axios from "axios"
// import request from "./request"
// import {SERVER_URL} from "../config/index"
const SERVER_URL = "http://3.37.105.54:8080/"

export const login = (body: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(`${SERVER_URL}auth/login`, body)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const register = (body: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(`${SERVER_URL}auth/register`, body)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const emailVerify = (body: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(`${SERVER_URL}auth/email`, body)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}

export const otpVerify = (code: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .patch(`${SERVER_URL}auth/email/verify`, {code, headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getUser = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/email`)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getUserByEmail = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/email/userdata`, {headers: headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTwitter = (params: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/twitter/login`, {params: params})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const twitterFollow = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/twitter/follow`, {headers: headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTgChannel = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/telegram-channal`, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTgGroup = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/telegram-group`, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTgUser = (params: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/telegram-group`, {
        params: params,
        headers: headers,
      })
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getUserByYt = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/yt-channel`, {headers: headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const addRefferal = (code: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .put(`${SERVER_URL}auth/refferel/verify`, code, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const addTgUsername = (username: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .put(`${SERVER_URL}auth/tele-user-name`, username, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const checkUser = (params: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/check-tele-user`, {params, headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}

export const getUserV2 = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/email`)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getUserByEmailV2 = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/email/userdata`, {headers: headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTwitterV2 = (params: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/twitter/login`, {params: params})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const twitterFollowV2 = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/twitter/follow`, {headers: headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTgChannelV2 = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/telegram-channal`, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTgGroupV2 = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/telegram-group`, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getTgUserV2 = (params: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/telegram-group`, {
        params: params,
        headers: headers,
      })
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const getUserByYtV2 = (headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/yt-channel`, {headers: headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const addRefferalV2 = (code: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .put(`${SERVER_URL}auth/v2/refferel/verify`, code, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const addTgUsernameV2 = (username: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .put(`${SERVER_URL}auth/v2/tele-user-name`, username, {headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
export const checkUserV2 = (params: any, headers: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${SERVER_URL}auth/v2/check-tele-user`, {params, headers})
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}
