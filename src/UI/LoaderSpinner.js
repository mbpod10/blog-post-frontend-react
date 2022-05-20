import classes from "../styles/Loader.module.css"

const LoaderSpinner = () => {
  return (
    <>
      <div className={classes.loaderDiv}>
        <div className={classes.loader}>
        </div>
      </div>
      <h1>Loading...</h1>
    </>
  )
}

export default LoaderSpinner