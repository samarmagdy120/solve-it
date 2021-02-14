import React, { useState, useEffect } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import $ from 'jquery';
import {Spinner} from "react-bootstrap";
import { Table } from 'react-bootstrap';

const Comments = () => {
     
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

    const postFunction = async () => {
        try{
          const data = await axios
          .get('https://gorest.co.in/public-api/comments')
          .then(res => {
            console.log(res);
            setPost(res.data.data)
          });
          setLoading(true);
        }catch(e){
          console.log(e)
        }
      }
      useEffect(() => {
        postFunction()
      },[])
    
    const listPost = posts.map((item) => {
        return (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td> {item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
            <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
    
    
    
          </tr>
        )
    })


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
    return (
        <div className="container">
            <div className="btn-post"><Link to="/posts"><button>back <FaArrowCircleLeft /></button></Link></div>
            <div className="img-person">
                <ul className="post-list list-unstyled">
                    <li> <img src="images/per.PNG" /></li>
                    <li>
                        <h4 className="dark bold">john </h4>
                        <p className="gray">hgg</p>
                        <span className="green">Active</span>
                    </li>
                </ul>
            </div>
            <div className="comment-part">
            <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <img src="images/p.PNG"/>
                </div>
                <div className="col-lg-9 col-sm-9">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                </div>
            </div>
</div>
<div className="wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="search">
                            <h1>Users Directory</h1>
                            <p>Lorem ipsum dolor sit amet consecteur</p>
                        </div>
                    </div>
                    <div className="col-lg-6">

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
              <th>body</th>
              <th>Created Data</th>
              <th>Updated Data</th>
                        </tr>
                    </thead>
                    <tbody>

                        {loading ? listPost : <Spinner animation="border"/>}

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Comments
