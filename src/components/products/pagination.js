import React from "react"; 

export default function Pagination({productLength, handlePagination}) {

    const pageNumbers = [];

    for (var i =1; i <= Math.ceil( productLength / 3) ;  i++) {
	pageNumbers.push(i) 
    }

    const pagination = (
    	<nav class="mt-pagination">
    	    <ul class="list-inline">
    	    	{ pageNumbers.map( number => {
    	    		return (
				<li key={number} ><a onClick={handlePagination} id={number}>{number} </a></li>
    	    			)
    	    		}

    	    	)}
    	    </ul>
	</nav>
    )

    return pagination

}

