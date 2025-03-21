import React from "react";

import recipes from "../recipies";
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => { 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your Order has been processing.",
                icon: "success"
              });
            }
          });
    }
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week specials!</h2>
                <button>Order Menu</button>
            </div>
            <div className="cards">
                {recipes.map((recipe) => {
                    return(
                        <div className="menu-items" key={recipe.id}>
                            <img src={recipe.image} alt={recipe.name} />

                            <diV className="menu-content">
                                <div className="heading">
                                <h3>{recipe.name}</h3>
                                <p>${recipe.price}</p>
                                </div>

                            </diV>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    )
                })}
            </div>


        </div>

    )
}


export default Menu;