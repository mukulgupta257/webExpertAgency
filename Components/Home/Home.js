import React from "react";
import { observer } from "mobx-react";
import globalStore from "../../Store/globalStore";

const HomeScreen = observer(() => {
  return (
    <>
      <div className="homepage">
        <div className="section">
          <ul>
            <li>Build Your Own Identity</li>
            <li>One Stop Solution For all Digital Needs.</li>
            <li>NO-Co Branding</li>
            <li>
              Six-Month Commplimentary assistance with each Service/Product.
            </li>
            <li>25 Days Delivery Time.</li>
            <li>More than 50 Happy Clients.</li>
            <li>Daily Update on Your Product via Whatsapp/E-mail.</li>
            <li>100% Profit of your own We do not charge seller fee. </li>
          </ul>
        </div>
        <div className="section">
          <button
            className="Services"
            onClick={() => {
              globalStore.setActivePage("Services");
            }}
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
});

export default HomeScreen;
