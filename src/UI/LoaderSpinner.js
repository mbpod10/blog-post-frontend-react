import classes from "../styles/Loader.module.css"

const MainLoader = () => {
  return (
    <>
      <div className={classes.loaderDiv}>
        <div className={classes.loader}>
          <h1>Loading...</h1>
        </div>
      </div>
    </>
  )
}

export default MainLoader