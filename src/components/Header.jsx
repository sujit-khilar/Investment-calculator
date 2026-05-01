import logo from '../assets/modern-calculator-icon-vector.jpg';

export default function Header() {
 return (
   <header id='header'>
     <img src={logo} alt="Finance Investment Calculator" />
     <h1>React Investment Calculator</h1>
   </header>
 );
}
