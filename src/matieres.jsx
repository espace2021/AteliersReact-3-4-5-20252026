function Matieres() {
     const matieres=["BD","Java","FCC","UML"];
    return (
        <>
         <h3>Matières préférées</h3>
     <table className="table table-striped">
     <thead>
      <tr>  
      <th>Indice</th>
      <th>Nom</th>
      </tr>
    </thead>
    <tbody>
      {
      matieres.map((mat,ind)=>{
         return(
          <tr key={ind}> 
          <td>{ind+1} </td>
          <td>{mat} </td>
          </tr>
         )
      })
      }
      </tbody>
     </table>
        </>
      );
}

export default Matieres;