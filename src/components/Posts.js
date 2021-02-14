import React, { useState, useEffect } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import axios from "axios";
import "./style.css";
import $ from 'jquery';
import {Spinner} from "react-bootstrap";

const Posts = (props) => {
    
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

    const postFunction = async () => {
        try{
          const data = await axios
          .get('https://gorest.co.in/public-api/posts')
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
            <tr>
                <td>{item.id}</td>
                <Link to="/comments"><td>{item.title}</td></Link>
                <td>{item.body}</td>

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
            <div className="btn-post"><Link to="/"><button>back <FaArrowCircleLeft /></button></Link></div>
            <div className="img-person">
                <ul className="post-list list-unstyled">
                    <li> <img src="images/per.PNG" /></li>
                    <li>
                        <h4 className="dark bold">Bhaaswar Johar </h4>
                        <p className="gray">hgg</p>
                        <span className="green">Active</span>
                    </li>
                </ul>
            </div>

            <div className="stats">
                <ul className="stats-list list-unstyled">
                    <li><h4>ToTal NO OF POSTS</h4> <span className="blue bold">50</span></li>
                    <li><h4>ToTal NO OF POSTS</h4> <span className="red bold">20</span></li>
                    <li><h4>USER CREATION DATA</h4> <span className="gray bold">12-12-2019</span></li>
                    <li><h4>USER UPDATED DATE</h4> <span className="gray bold">12-12-2019</span></li>

                </ul>
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
                            <th>Post ID</th>
                            <th>Post Title</th>
                            <th>Body</th>
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

export default Posts
