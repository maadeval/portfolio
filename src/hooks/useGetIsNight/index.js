export const useGetIsNight = () => {
  const START_NIGHT = 19
  const FINISH_NIGHT = 7

  const actualTime = Date.now()
  const formatedTime = new Date(actualTime)
  const actualFormatedHour = formatedTime.getHours()

  const isNight =
    actualFormatedHour >= START_NIGHT || actualFormatedHour < FINISH_NIGHT

  return { isNight }
}
