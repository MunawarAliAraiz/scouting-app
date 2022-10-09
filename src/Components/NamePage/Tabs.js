import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

export default function Tabs(props) {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const addClass = (event,cls) => {
      let elements = document.getElementsByClassName(cls);
      for (let i=0;i<elements.length;i++)
      {
        elements[i].classList.remove('act');
      }
      event.target.classList.add('act');
  };


  return (
    <>
      <MDBTabs className={`mb-3 justify-content-${props.align}`}>
        {props.data.map((item, index) => (
          <MDBTabsItem>
            <button
              className= {index === 0 ? `${props.id} p-2 px-3 fs-5 act` : `${props.id} p-2 px-3 fs-5` }
              onClick={(e) =>  {handleBasicClick(`tab${index + 1}`); addClass(e,props.id)}}
              active={basicActive === `tab${index}`}
            >
              {item}
            </button>
          </MDBTabsItem>
        ))}
      </MDBTabs>

      <MDBTabsContent>
        {props.data.map((item, index) => (
          <MDBTabsPane show={basicActive === `tab${index + 1}`}>
            <>{props.content[index]}</>
          </MDBTabsPane>
        ))}
      </MDBTabsContent>
    </>
  );
}
