import React from "react";
import { Container } from "react-bootstrap";
import { BlackNav } from "../common/BlackNav";
export const FormSubmission = () => {
  const [myData, setData] = React.useState({
    Name: "",
    email: "",
    Number: "",
  });
  const userInput = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    setData({ ...myData, [myName]: value });
  };
  const Formsubmission = (i) => {
    i.preventDefault();
    setData({ Name: "", email: "", Number: ""});
    console.log(myData);
  };
  return (
      <>
     <div className="vh-100 d-flex flex-column justify-content-center">
         <BlackNav black="text-black" bg_clr="bg-black"/>
          <div className="bg-black flex-grow-1">
              <Container>
                <form onSubmit={Formsubmission}>
                    <label htmlFor="myname" className=" pe-4 text-white ps-3">
                      Name
                    </label>
                    <input
                      onChange={userInput}
                      type="text"
                      name="Name"
                      value={myData.Name}
                    />
                    <label htmlFor="email" className=" pe-4 text-white ps-3">
                      Email
                    </label>
                    <input
                      onChange={userInput}
                      type="text"
                      name="email"
                      value={myData.email}
                    />
                    <label htmlFor="Number" className=" pe-4 text-white ps-3">
                      number
                    </label>
                    <input
                      onChange={userInput}
                      type="number"
                      name="Number"
                      value={myData.Number}
                    />
                  <button type="submit" className="ms-3 text-white ff_poppins fs_16 fw-medium red_btn border-0">Submit</button>
                </form>
          </Container>
          </div>
     </div>
    </>
  );
};
