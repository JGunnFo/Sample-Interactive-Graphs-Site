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
  



  
const article3={
  TitleText: "30% off Tickets on September 5th!",
  PreviewText: "What could be better than cheap movies on the weekend?",
  Date: new Date(2020, 8, 31),
  Sections: ["HTML4"]
  };

  
    
const HTML4 = <div><div className="Temporary-Test">On Saturday, September 5th, all tickets will be 
30% off! That applies to both booking in advance, day-of purchases, and digital screenings! 
The only thing you have to do is show up and buy at least 2 buckets of popcorn.</div></div>;



  
const article4={
  TitleText: "Updated Rules on Bringing Pets",
  PreviewText: "If you want to bring your alpaca along, be sure to read these rules to save your movie night!",
  Date: new Date(2020, 9, 5),
  Sections: ["HTML5"]
  };

  
    
const HTML5 = <div><div className="Temporary-Test">Here at Fictional Movie Business, we've gone to great extents to allow people to bring all of their pets to our theaters, including immense effort to install animal-only areas and to provide trained staff to make sure nothing goes wrong. We love to see all your dogs, cats, lizards, alpacas, ferrets, and everything else!</div>
<div>However, for you to have a safe and pleasant moviegoing experience, we have added 3 new rules:</div>
<div>-All animals must be at least a year old, so that they have any hope of obeying rules.</div>
<div>-If the movie is 3 hours or longer, you must bring snacks for our staff to feed to your pet.</div>
<div>-No leash, no service.</div></div>;



  
const article5={
  TitleText: "Several 1970s movies available!",
  PreviewText: "We've added a lot of 1970s classics to our digital library!",
  Date: new Date(2020, 8, 25),
  Sections: ["HTML6"]
  };

  const HTML6 = <div><div className="Temporary-Test">It's a blast from the past! 
  We've added FORTY movies from the 1970s to our digital store!</div>
  <div>Many of them you've surely heard of- 
  but we've also included a few obscure movies that we got the rights to for practically nothing. 
  Enjoy!</div></div>;
  
  
  

  const article6={
    TitleText: "Horror Week Sale!",
    PreviewText: "For horror week, you can save big! Click here to find out more!",
    Date: new Date(2020, 8, 15),
    Sections: ["HTML7"]
    };


  
    const HTML7 = <div><div className="Temporary-Test">From August 17th through August 23rd,
     the following sales are in effect:</div>
    <div>-Horror movie digital viewings are 30% off</div>
    <div>-Horror movie tickets are 30% off</div>
    <div>-Horror movie tickets booked at least two days in advance are 50% off!</div>
    <div>-If you bring at least 3 friends, the tickets are a further 20% off!</div>
    <div>You know what to do!</div>
    </div>;
    
    

  const Graph2 = {  
    data:[{name:"BEP", sales:400}, {name:"LEG", sales:700}, {name:"Romance", sales:600}, {name:"DAWI-ZHARR", sales:1650}, {name:"Drama", sales:550}], 
    title: "WARLOCKS WITH GUNS", 
    key: "sales" 
  };
  


  const article7={
    TitleText: "T-Shirts with your favorite brand!",
    PreviewText: "You love us, right? Then wear a t-shirt with our logo on it! You'll get a ticket discount!",
    Date: new Date(2020, 8, 9),
    Sections: ["HTML8"]
    };



  
    const HTML8 = <div><div className="Temporary-Test">Head on over to the store 
    and you can get a variety of shirts with our brand on it!</div>
    <div>Over 20 colors, and in all sizes!</div>
    <div>For every shirt you buy, you'll get a 10% off coupon for movie tickets!</div>
    </div>;




const article8={
  TitleText: "Staff Changes",
  PreviewText: "We've got some new hires, and some staff relocating.",
  Date: new Date(2020, 8, 2),
  Sections: ["HTML9"]
  };




  const HTML9 = <div><div className="Temporary-Test">We're welcoming Jace and Jesse 
  as new hires for our Portland location!</div>
  <div>Vanessa, our movie super-expert, is moving 
    from our Portland location to our Spokane location. If you need to ask her questions, too bad!</div>
  </div>;
    

let preSortArticles=[article1, article2, article3, article4, article5, article6, article7, article8]


export let Articles=preSortArticles.sort(function(b,a){return a.Date.getTime() - b.Date.getTime()});
export let HTMLs={"HTML1":HTML1, "HTML2":HTML2, "HTML3":HTML3, "HTML4":HTML4, "HTML5":HTML5, "HTML6":HTML6, "HTML7":HTML7, "HTML8":HTML8, "HTML9":HTML9}
export let Graphs={"Graph1":Graph1, "Graph2":Graph2}
export let Forms=[Form1()]


