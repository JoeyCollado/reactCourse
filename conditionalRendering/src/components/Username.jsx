

const Username = (props) => {
  return (
    <>
      <b>Username: </b>
      <span>{props.username}</span>  {/* evaluating to render the props data */}
    </>
  )
}

export default Username
