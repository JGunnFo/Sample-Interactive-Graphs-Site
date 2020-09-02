import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


/*
imo make the concatenated list of graphs *an object*, beacuse i htink we will want name-based access rather than index based
especially because that makes traversal across a series of graphs more legible
*/

const article1={
    TitleText: "Interactive Data",
    PreviewText: "Ever wonder if horror movies are more popular than romance movies?  These August movie sales will tell the truth!",
    Date: new Date(2020, 9, 10),
    Sections: ["HTML1", "Graph1", "HTML2"]
};
    

const HTML1 =  <div>Click on any of the bars in the graph to view more of the data!</div>
const Graph1 = {  
  data:[{name:"Horror", sales:400}, {name:"Action", sales:700}, {name:"Romance", sales:600}, {name:"Comedy", sales:650}, {name:"Drama", sales:550}], 
  title: "August Sales By Genre", 
  key: "sales" 
};
/*MAKE SURE this is correct either as array or as object idk whichever is approrpiate
arrays vs objects..*/
const HTML2 = <div className="Temporary-Test">If you're sad to see your favorite genre did not do as well as you'd like, you know what to do: Give us more money!</div>




const article2={
    TitleText: "Sign up for a special screening!",
    PreviewText: "If you fill out the form, you'll get to attend a secret preview screening of an upcoming movie!",
    Date: new Date(2020, 9, 6),
    Sections: ["HTML3", "Form1"]
    };

    
const HTML3 = <div><div className="Temporary-Test">In October we will be holding preview screenings for 6 
different upcoming movies! </div>
<div>Fill out the form below with the absolutely not fake email that you use for your 
  Fictional Movie Business account, your favorite movie genre, and your favorite movie snack, 
  and we'll get back to you soon!</div></div>;

/* be aware that this is a function, so theres a difference between Form1 and Form1(), reference vs call*/
function Form1(){
    return(

      <Formik
      initialValues={{ email: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

          </form>
        );
      }}
    </Formik>
    );
  }
  

  const Graph2 = {  
    data:[{name:"BEP", sales:400}, {name:"LEG", sales:700}, {name:"Romance", sales:600}, {name:"DAWI-ZHARR", sales:1650}, {name:"Drama", sales:550}], 
    title: "WARLOCKS WITH GUNS", 
    key: "sales" 
  };
  


let preSortArticles=[article1, article2]


export let Articles=preSortArticles.sort(function(b,a){return a.Date.getTime() - b.Date.getTime()});
export let HTMLs={"HTML1":HTML1, "HTML2":HTML2, "HTML3":HTML3}
export let Graphs={"Graph1":Graph1, "Graph2":Graph2}
export let Forms=[Form1()]


