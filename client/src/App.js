/**
 * app.js
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */


import './App.css';
//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Axios from "axios";


function App() {

    //Set new value with useState to communicate with the api 
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [list, setList] = useState([]);

    //post new items to api
    const submitReview = () => {
        Axios.post("http://localhost:9000/Menu/insert",
        {
            label: label,
            description: description,
            price: price,
            category: category,
            image: image
        });
        //set the local list with the new item
        setList([...list, {
            label: label,
            description: description,
            price: price,
            category: category,
            image: image
        },]); 
    };



    //delete item in the db identify by the label
    const deleteReview = (labelToDelete) => {
        Axios.delete(`http://localhost:9000/Menu/delete/${labelToDelete}`);
    };

    //upadte an item identify by the label in the db
    const updateReview = (label) => {
        Axios.put("http://localhost:9000/Menu/update",
            {
                label : label,
                description: description,
                price: price,
                category: category,
                image: image
            });

        //set the local list with the item updated
        setList([...list, {
            label: label,
            description: description,
            price: price,
            category: category,
            image: image
        },]);
    };

    //get the list of items from the db in continue 
    useEffect(() => {
        Axios.get("http://localhost:9000/Menu/get").then((response) => {
            setList(response.data);
        });
    }); 


    // return the front end to the user navigator 
    return (
        <div className="App">

            <div className="form_1" id="section_1">
                <h1>Web application</h1>
                <label>Label</label> <input type="text" name="label" onChange = {(e) => {
                        setLabel(e.target.value);
                    }} />
               <label>Description</label>
                <input type="text" name="description" onChange={(e) => {
                    setDescription(e.target.value);
                    }} />
                <label>Price</label>
                <input type="number" name="price" onChange={(e) => {
                    setPrice(e.target.value);
                }} />
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
            <div className="titre_1" id="section_2"> <h4>category</h4> <h4>label</h4> <h4>description</h4> <h4>price</h4> <h4>image</h4>  </div>


            <div className="list_1" id="section_3">
            {
                list.sort((a, b) => a.category.localeCompare(b.category)).map((val) => {
                    return (<h5>
                        <input type="text"  placeholder={val.category} name="category" onChange={(e) => {
                            setCategory(e.target.value);
                        }} />

                        <input type="text"  placeholder={val.label} name="label" value={val.label} />
                        
                        <input type="text"  placeholder={val.description} name="description" onChange={(e) => {
                            setDescription(e.target.value);
                        }} />
                        <input type="number"  placeholder={val.price} name="price" onChange={(e) => {
                            setPrice(e.target.value);
                        }} />


                        <img src={val.image} alt={ "./1.jpeg"}/>

                        <button onClick={() => { deleteReview(val.label) }}>Delete</button> <button onClick={() => { updateReview(val.label) }}>Update</button> </h5>)
                })
                }
            </div>
             
        </div>
    );
     
}
     
export default App;
