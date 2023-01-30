// Write your code here
const Login = props => {
  const {onClick} = props
  return (
    <button type="button" className="button" onClick={onClick}>
      Login
    </button>
  )
}

export default Login
