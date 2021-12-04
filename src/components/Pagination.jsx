import React from 'react'

const Pagination = ({postPerPage, totalPost, paginate, currentPage, nextPaginate, prevPaginate}) => {
   
  const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i); 
    }

     
    return (
        <div>
            
  <ul className="pagination" >
    <li class={`page-item ${currentPage===1?"disabled":"page-item"}`}>
      <a class="page-link"  onClick={prevPaginate} href="!#">Previous</a>
    </li>
      
      
        {pageNumbers.map((number) => (

            <li class={`page-item ${currentPage===number?"active":"page-item"}`}  key={number}>
            <a class="page-link" onClick={() => paginate(number)} href="!#">{number}</a>
            </li>
        ))}
  

    <li class={`page-item ${(totalPost<=3 || currentPage===Math.ceil(totalPost/postPerPage))?"disabled":"page-item"}`}>
      <a class="page-link" onClick={nextPaginate} href="!#">Next</a>
    </li>
  </ul>
 
        </div>
    )
}

export default Pagination
