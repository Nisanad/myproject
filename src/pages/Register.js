import React, { Component } from "react";
import Login from "./Login";
import "../App.css"
import { Redirect } from "react-router-dom"
export default function Register()
{
   
        return (
            < div className="Box">
            <form>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
               
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" class="btn btn-dark">Register <Redirect to="/Login" /> </button>
                
            </form>
            </div>
            
        );
    
}