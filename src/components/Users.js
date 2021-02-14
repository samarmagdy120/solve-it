import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from "axios";
import "./style.css";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import {Spinner} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Users = () => {

  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const userFunction = async () => {
    try{
      const data = await axios
      .get('https://gorest.co.in/public-api/users')
      .then(res => {
        console.log(res);
        setUser(res.data.data)
      });
      setLoading(true);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    userFunction()
  },[])

  function act() {
    var num = $("#sel1 option:selected").text();
    $('#example tr').each(function (i, row) {
      if (num < 0) {
        $(this).css('display', 'none');
      } else {
        num = num - 1;
        $(this).css('display', 'table-row');
      }
    });
  }
  $(function () {
    act();
  });

  $("#sel1").change(function () {
    act();
  });
  const PortfolioImages = users.map((posts) => {
    return (
      <tr key={posts.id}>
        <td>{posts.id}</td>
        <Link to='/posts'><td> {posts.name}</td></Link>
        <td>{posts.email}</td>
        <td>{posts.gender}</td>
        <td>{posts.status}</td>
        <td>{posts.created_at}</td>
        <td>{posts.updated_at}</td>



      </tr>
    )
  }
  )
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row search-part">
          <div className="col-lg-6 col-xs-12">
            <div className="search">
              <h1>Users Directory</h1>
              <p>Lorem ipsum dolor sit amet consecteur</p>
              <input type="text" />
              <FaSearch className="fa-search"/>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <form role="form">
              <div className="select-part">
                <label>showing user</label>
                <select id="sel1">
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
                <label>per page</label>

              </div>
            </form>
          </div>
        </div>

        <Table striped responsive id="example">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email adress</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Created Data</th>
              <th>Updated Data</th>

            </tr>
          </thead>
          <tbody>
          {loading ? PortfolioImages : <Spinner animation="border"/>}
            
          </tbody>
        </Table>
      </div>
    
    </div>
  )
}

export default Users
