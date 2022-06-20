import React from 'react';
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='TotalApp'>
    <header className="App-header"> 
       Crypto app
      <nav>
        <Link to='/'>Home</Link> 
        <Link to='/favorites'>Favorites</Link>
        <Link to='/contact'>Contact</Link>
       </nav>
       </header> 
    <div className="App-contact">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa. Deserunt, ex cumque! Excepturi ipsum a, quaerat architecto fugiat quia voluptas beatae autem perferendis nesciunt quod. Commodi velit nulla reiciendis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi, odit natus nemo cupiditate sunt illum assumenda eligendi magnam repudiandae eaque enim ipsam ea libero, dignissimos explicabo in, consequatur dicta.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ipsum laboriosam hic praesentium quae saepe, accusantium necessitatibus, repellendus adipisci itaque est? Voluptas deleniti dolor tempore tempora ut expedita provident sed?
      Explicabo, officia rerum neque quo aperiam tempore eum dolorum dignissimos quidem ratione laborum incidunt excepturi reprehenderit voluptatibus inventore consequuntur! Quibusdam est assumenda deleniti adipisci praesentium consequuntur sed accusamus commodi? Omnis?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa. Deserunt, ex cumque! Excepturi ipsum a, quaerat architecto fugiat quia voluptas beatae autem perferendis nesciunt quod. Commodi velit nulla reiciendis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi, odit natus nemo cupiditate sunt illum assumenda eligendi magnam repudiandae eaque enim ipsam ea libero, dignissimos explicabo in, consequatur dicta.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut corrupti sequi, molestiae quo quaerat rem quia, facere dignissimos perspiciatis perferendis mollitia, est laborum corporis qui voluptatibus cum? Laudantium, nulla pariatur?
    Commodi numquam culpa, dolores tempore deserunt voluptate fuga voluptatem impedit nemo maiores! Nostrum aut odio suscipit inventore ex soluta. Reprehenderit earum vitae quaerat accusamus consequatur repellendus saepe consectetur quam error.
    </p>
    <p className='contact-child'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id perferendis hic exercitationem, sequi quas magni, beatae possimus dolorum libero ex. Quas quibusdam impedit, ea laborum aliquid non perspiciatis laboriosam.
    Impedit assumenda nihil placeat, animi recusandae laborum quae quidem minima ducimus ipsum id odio rem tempore doloribus deserunt architecto expedita alias quos aspernatur voluptatum excepturi pariatur numquam. Dolores, amet aspernatur?
    Minima qui laboriosam nam repellendus provident blanditiis quod expedita at odit accusantium totam inventore, maiores, impedit a dolorem ea? Voluptatibus officiis earum, quisquam aspernatur incidunt voluptas magnam recusandae explicabo a.
    Corporis maxime veniam facere est reiciendis laboriosam animi ipsam, reprehenderit voluptate doloribus iure quasi numquam eius libero cum dicta magni exercitationem fuga nobis temporibus dolore. Ab ipsum nulla dolorum dignissimos.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, debitis voluptatibus eum aperiam eveniet sed a omnis enim numquam suscipit impedit. Neque doloremque hic dolores officia impedit pariatur excepturi dignissimos!
    Architecto blanditiis optio consequatur nam laborum dolore minima suscipit totam exercitationem obcaecati atque qui ipsa soluta iste aut expedita esse dolor deserunt tempore eveniet, porro ipsum ex beatae! Nisi, nihil?</p>
    <h3>
      First name : Maxime <br/>
      Last name : Jamin <br/>
      Occupation : Front end developper Junior <br/>
      Date of Birth : 08/05/1993 <br/>
      Spoken language : English/French/Spanish <br/>
    </h3>
    </div>
    </div>
  )
}

export default Contact
