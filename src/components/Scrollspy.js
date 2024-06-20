import React from 'react'
import { Link } from 'react-router-dom'


export default function Scrollspy(props) {
  
  return (
    <>
    <nav id="navbar-example2" className={` my-1 navbar bg-${props.mode} text-${props.mode==='dark'?'white':''}  px-3 ` } >
    <Link className= {`navbar-brand text-${props.mode==='dark'?'white':''}`} to="/"><img src={props.logo} alt="logo" className='img-fluid '/>{props.title}</Link>
    <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link text-info" href="#scrollspyHeading1">{props.Firstheading}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-info" href="#scrollspyHeading2">{props.Secondheading}</a>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle text-info" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Dropdown</Link>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">{props.Thirdheading}</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">{props.Fourthheading}</a></li>
        
        
      </ul>
    </li>
    {/* <div className="form-check form-switch my-2">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}
   
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className={`scrollspy-example bg-${props.mode} text-${props.mode==='dark'?'white':''} p-3 rounded-2`} tabIndex="0">
  <h4 id="scrollspyHeading1">{props.Firstheading}</h4>
  <p>Welcome to TEXT-OP, your go-to destination for all things related to text utilities. Our mission is to provide you with a comprehensive suite of tools designed to simplify and enhance your text-related tasks. Whether you're a student, writer, developer, or just someone who works with text regularly, we have something for you. </p>
  <br />
  <h4 id="scrollspyHeading2">{props.Secondheading}</h4>
  <p> At TEXT-OP, we offer a variety of text utilities to meet your needs, including:<br></br><br />

    <ul>

    <li><p><b>Text Editing</b>: Easily edit, format, and manipulate your text.</p></li>
    <li><p><b>Text Analysis</b>: Gain insights into your text with readability scores, keyword density analysis, and more.</p></li>
    <li><p><b>Extra space Remover</b>: Using this feature you can remove the extra spaces present in the paragraphs.</p></li>
    <li><p><b>Conversion Tools</b>: Convert text between different formats, including case conversion, encoding, and more.</p></li></ul> </p>
    <br />
  <h4 id="scrollspyHeading3">{props.Thirdheading}</h4>
  <p>We believe that working with text should be effortless and efficient. Our goal is to continuously improve and expand our toolset to provide the best possible experience for our users. We are committed to making text-related tasks more accessible and less time-consuming for everyone.</p>
  <br />
  
  <h4 id="scrollspyHeading4">{props.Fourthheading}</h4>
  <br />
  <p>
    <ul>
      <li><p><b>User-Friendly Interface:</b> Our tools are designed to be intuitive and easy to use, so you can get your work done quickly and efficiently.</p></li>
    
    <li><p><b>Constantly Evolving:</b> We regularly update our tools based on user feedback and the latest technological advancements.</p></li>
    
    <li><p><b>Completely Free:</b> Enjoy full access to all our utilities without any cost.
   </p></li>
<hr />
    </ul>
    Thank you for choosing TEXT-OP. We are excited to help you with all your text utility needs. If you have any questions, suggestions, or feedback, please don't hesitate to contact us.
  </p>
  
  </div>
  </>  
  )
}




Scrollspy.defaultProps = {
  title:"ScrollSpy",
  Firstheading:"First",
  Secondheading:"Second",
  Thirdheading:"Third",
  Fourthheading:"Fourth",
  Fifthheading:"Fifth"
}











