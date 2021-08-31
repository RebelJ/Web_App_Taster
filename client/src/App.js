import './App.css';
//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Axios from "axios";

function App() {

    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [list, setList] = useState([]);
    
    const submitReview = () => {
        Axios.post("http://localhost:9000/Menu/insert",
            {
                label: label,
                description: description,
                price: price,
                category: category,
                image: image 
            }).then(() => {
                alert("sucessfull insert");
            });
    };

    useEffect(() => {
        Axios.get("http://localhost:9000/Menu/get").then((response) => {
            setList(response.data);
        });
    }); 

    return (
        <div className="App">

            <h1>Web application</h1>

            <div className="form">
                <label>Label</label>
                <input type="text" name="label" onChange = {(e) => {
                    setLabel(e.target.value);
                }} />
                <label>Description</label>
                <input type="text" name="description" onChange={(e) => {
                    setDescription(e.target.value);
                }} />
                <label>Price</label>
                <input type="text" name="price" onChange={(e) => {
                    setPrice(e.target.value);
                }}/>
                <label>Category</label>
                <input type="text" name="category" onChange={(e) => {
                    setCategory(e.target.value);
                }}/>
                <label>Image</label>
                <input type="text" name="image" onChange={(e) => {
                    setImage(e.target.value);
                }}/>

                <button onClick={submitReview}>Submit</button>
            </div>

            {list.map((val) => {
                return <h1>{val.label} {val.category} {val.price}</h1>
                })
            }
             
        </div>
    );
     
}
    
export default App;
