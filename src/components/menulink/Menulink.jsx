
import "./menulink.css";


const Menulink = ({ icon, text }) => {
  return (
    <div  className="menulink">
          {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && "( John )"}
      </span>
    </div>
  )
}

export default Menulink
