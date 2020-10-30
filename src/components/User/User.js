import React from "react";
import classes from "./User.module.css"

const User = (props) => (
  <div className={classes.RowContainer}>
    <img src={props.person.picture.medium} alt="profile" />
    <span> {props.person.name.title+" "+props.person.name.first+" "+props.person.name.last}</span>
    <span> {new Date (props.person.dob.date).toLocaleDateString()+" "+props.person.dob.age}</span>
    <span> {props.person.email}</span>
    <span> {props.person.phone}</span>
    <span> {props.person.location.city+", "+props.person.location.country}</span>
  </div>
          
)

export default User;