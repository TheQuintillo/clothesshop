import { useAddFile } from "../hooks/useAddFile";

// Create a reference to the file we want to download

function Upload() {
  const { archivoHandler, uploadHandler, nameHandler, addFile, searchDATA, selectID, selectIdData } = useAddFile();

  selectID();


  return (
    <>
    <div className="panel_container">
          <form onSubmit={uploadHandler}>
              <input type="text" onChange={nameHandler} name="nombre" placeholder="nombra tu archivo" />
              <input type="file" onChange={archivoHandler} />
              <button type="submit">Subir Foto</button>
          </form>
    </div>
       <input type="text" onChange={searchDATA} name="nombre" placeholder="Busca por Nombre" />
        <select name="select" onClick={selectIdData} className="select_search">
        </select>
       <div className="search_img"></div>
    </>
  );
}

export default Upload;

