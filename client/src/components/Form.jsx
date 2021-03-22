const Form = ({title, children}) => (
  <form>
    <h4 className="my-3 text-center">{title}</h4>
    {children}
  </form>
)

const Input = ({name, type = "text", placeholder, required ="false"}) => (
  <div className="form-group">
    <input className="form-control" name={name} type={type} placeholder={placeholder} required={required}/>
  </div>
)

export {Form, Input}
