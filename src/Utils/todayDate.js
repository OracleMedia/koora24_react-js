const todayDate = () => {
  let date = new Date();
  return date.toISOString().slice(0, 10)
}

export default todayDate;