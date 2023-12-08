import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Button } from 'bootstrap';

function App() {
  return (
    <div class="Containerback">
     <div class="container py-3">
     <Pricecards/>
     </div>
     </div>
  );
}
export default App;

// function Parent() {
//   return (
//     <div class="Containerback">
//     <div class="container py-4">
//     <div class="row text-center">
//       {/* <!-- Pricing Table--> */}
//       <div class="col-lg-4 mb-4 mb-lg-0">
//         <div class="bg-white p-4 rounded-lg shadow">
//           <h1 class="h6 text-uppercase font-weight-bold mb-4">FREE</h1>
//           <h2 class="h2 font-weight-bold">$0<span class="h2 font-weight-bold">/ month</span></h2>
//          <hr/>
//           {/* <div class="custom-separator my-4 mx-auto bg-primary"></div> */}

//           <ul class="list-unstyled my-3 text-small text-left">
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10005;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//               <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10005;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10005;</span> Lorem ipsum dolor sit amet</p></li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10005;</span> Lorem ipsum dolor sit amet</p></li>
//           </ul>
//           <button class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</button>
//         </div>
//       </div>
//       {/* <!-- END --> */}


//       {/* <!-- Pricing Table--> */}
//       <div class="col-lg-4 mb-5 mb-lg-0">
//         <div class="bg-white p-4 rounded-lg shadow">
//           <h1 class="h6 text-uppercase font-weight-bold mb-4">PLUS</h1>
//           <h2 class="h2 font-weight-bold">$9<span class="h2 font-weight-bold">/ month</span></h2>
//           <hr/>
//           {/* <div class="custom-separator my-4 mx-auto bg-primary"></div> */}

//           <ul class="list-unstyled my-3 text-small text-left">
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//               <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p>
//             </li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10003;</span> Lorem ipsum dolor sit amet</p></li>
//             <li class="mb-3">
//             <p><span class="mb-3 symbol">&#10005;</span> Lorem ipsum dolor sit amet</p></li>
//           </ul>
//           <button class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</button>
//         </div>
//       </div>
//       {/* <!-- END --> */}


//       {/* <!-- Pricing Table--> */}
//       <div class="col-lg-4 mb-5 mb-lg-0">
//         <div class="bg-white p-4 rounded-lg shadow">
//           <h1 class="h6 text-uppercase font-weight-bold mb-4">PRO</h1>
//           <h2 class="h2 font-weight-bold">$49<span class="h2 font-weight-bold">/ month</span></h2>
//           <hr/>
//           {/* <div class="custom-separator my-4 mx-auto bg-primary"></div> */}

//           <ul class="list-unstyled my-3 text-small text-left">
//           <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p>
//            </li>
//             <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p>
//             </li>
//             <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p>
//             </li>
//             <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p>
//             </li>
//             <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p>
//             </li>
//               <li class="mb-3">
//               <p class="row text-left">&#10003; Unlimited Users</p>
//             </li>
//             <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p></li>
//             <li class="mb-3">
//             <p class="row text-left">&#10003; Unlimited Users</p></li>
//           </ul>
//           <button class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</button>
//         </div>
//       </div>
//       {/* <!-- END --> */}
//       </div>
//       </div>
//       </div>
//   );
// }


function Pricecards() {
  const cards=[
    {
     "Upgradelevel":"FREE",
     "Months":"$0/month",
     "specification1":"✔ Single User",
     "specification2":"✔ 50GB Storage",
     "specification3":"✔ Unlimited Public Projects",
     "specification4":"✔ Community Access",
     "specification5":<p class="text-muted">✖ Unlimited Private Projects</p>,
     "specification6":<p class="text-muted">✖ Dedicated Phone Support</p>,
     "specification7":<p class="text-muted">✖ Free Subdomain</p>,
     "specification8":<p class="text-muted">✖ Monthly Status Reports</p>,
     "Button":<p class="btn btn-primary p-2 shadow rounded-pill disabled">Subscribe</p>
    },
    {
      "Upgradelevel":"PLUS",
      "Months":"$9/month",
      "specification1":"✔ 5 Users",
      "specification2":"✔ 50GB Storage",
      "specification3":"✔ Unlimited Public Projects",
      "specification4":"✔ Community Access",
      "specification5":"✔ Unlimited Private Projects",
      "specification6":"✔ Dedicated Phone Support",
      "specification7":"✔ Free Subdomain",
      "specification8":<p class="text-muted">✖ Monthly Status Reports</p>,
      "Button":<p class="btn btn-primary p-2 shadow rounded-pill disabled">Subscribe</p>
     },
     {
      "Upgradelevel":"PRO",
      "Months":"$49/month",
      "specification1":"✔ Unlimited Users",
      "specification2":"✔ 50GB Storage",
      "specification3":"✔ Unlimited Public Projects",
      "specification4":"✔ Community Access",
      "specification5":"✔ Unlimited Private Projects",
      "specification6":"✔ Dedicated Phone Support",
      "specification7":"✔ Free Subdomain",
      "specification8":"✔ Monthly Status Reports",
      "Button":<p class="btn btn-primary p-2 shadow rounded-pill"> Subscribe</p>
     }
  ]
  return (
    <div className="Pricecards">
     {cards.map((cards, indx)=>(
          <Carddesign key={indx} {...cards}/>
      ))
      }
    </div>
  );
}
 
function Carddesign(props) {
  return ( 
          <div class="col-50 mb-4">
          <div class="bg-white p-3 rounded-lg shadow card">
          <h1 class="h6 text-uppercase font-weight-bold mb-3 mt-2 text-center">{props.Upgradelevel}</h1>
          <h2 class="h2 font-weight-bold text-center">{props.Months}</h2>
         <hr/>
          {/* <div class="custom-separator my-4 mx-auto bg-primary"></div> */}

          <ul class="list-unstyled my-2 text-small">
            <li class="mb-3">
            <p>{props.specification1}</p>
            </li>
            <li class="mb-3">
            <p>{props.specification2}</p>
            </li>
            <li class="mb-3">
            <p>{props.specification3}</p>
            </li>
            <li class="mb-3">
            <p>{props.specification4}</p>
            </li>
            <li class="mb-3">
            {props.specification5}
            </li>
              <li class="mb-3">
            {props.specification6}
            </li>
            <li class="mb-3">
            {props.specification7}</li>
            <li class="mb-3">
            {props.specification8}</li>
          </ul>
               {props.Button}
          </div>
          </div>
);
}


