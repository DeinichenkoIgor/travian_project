import React from 'react';
import Image from 'next/image'
import './stile.css'

const Header = () => {
  return (
<header className='header'>
<div className='header_left'>
  <div className='logo'>
  <Image
        src="/1234.jpg"
        width={108}
        height={51}
        alt="Logo"
      />
  </div>
  <div className='header_menu menu'>
    <nav className='menu_nav'>
      <ul className='menu_list'>
        <li className='menu_item'>
          <a href="" className='menu_link'>
          Главная
          </a>
        </li>
        <li className='menu_item'>
          <a href="" className='menu_link'>
          Блог
          </a>
        </li>
        <li className='menu_item'>
          <a href="" className='menu_link'>
          Калькуляторы
          </a>
          <ul className='menu_sub-list'>
            <li className='menu_sub-item'>
              <a href="" className='menu_sub-link'>
              Калькуляция строительства
              </a>
            </li>
            <li className='menu_sub-item'>
              <a href="" className='menu_sub-link'>
              Развитие ресурсов
              </a>
            </li>
            <li className='menu_sub-item'>
              <a href="" className='menu_sub-link'>
              Снос строений и стен
              </a>
            </li>
          </ul>
        </li>
        <li className='menu_item'>
          <a href="" className='menu_link'>
          Гайды
          </a>
        </li>
        <li className='menu_item'>
          <a href="" className='menu_link'>
          Логовница
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
<div className='header_right'>
  <div className='language'>
    RU
    </div>
<div className='login'>
login
</div>
</div>
</header>



    /*<header className='header'>
        
        <div className='logo'>
        <Image
        src="/1234.jpg"
        width={108}
        height={51}
        alt="Logo"
      />
      
        </div>
        <nav className='header_nav'>
        <ul className='header_ul'>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Calculation</a></li>
            <li><a href="">Gaid</a></li>
            <li><a href="">Reports</a></li>
        </ul>
        </nav>
    <div className='header_right'>
      <div className='languages'>
        Ru
      </div>
      <div className='login'>Login</div>
    </div>
   </header>*/
   
  );
};

export default Header;

