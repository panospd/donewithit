import AsyncStorage from "@react-native-community/async-storage"
import dayjs from "dayjs"

const prefix = "cache"
const expiryInMinutes = 5

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now()
    }

    const finalKey = `${prefix}${key}`

    await AsyncStorage.setItem(finalKey, JSON.stringify(item))
  } catch (error) {
    console.log(error)
  }
}

const isExpired = (item) => {
  const now = dayjs()
  const storedTime = dayjs(item.timestamp)

  return now.diff(storedTime, "minute") > expiryInMinutes
}

const get = async (key) => {
  try {
    const stringifiedItem = await AsyncStorage.getItem(`${prefix}${key}`)
    const item = JSON.parse(stringifiedItem)

    if (!item) return null

    const expired = isExpired(item)

    if (expired) {
      await AsyncStorage.removeItem(prefix + key)
      return mull
    }

    return item.value
  } catch (error) {
    console.log(error)
  }
}

export default {
  store,
  get
}
