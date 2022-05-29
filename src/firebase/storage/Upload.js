import { useAddFile } from "../hooks/useAddFile";
import { useSearchFile } from "../hooks/useSearchFile";
import '../../css/panelAdmin.css';
// Create a reference to the file we want to download

function Upload() {
  const { archivoHandler, uploadHandler, nameHandler } = useAddFile();
  const { searchDATA, selectID, selectIdData, deleteFile } = useSearchFile();

  selectID();
  return (
    <>
    <div className="panel_container">
        <div className="upload_container">
          <form onSubmit={uploadHandler}>
            <h3>Sube Nueva Imagen a Galería</h3>
              <input type="text" onChange={nameHandler} name="nombre" placeholder="Nombra Tu Imagen" />
              <input type="text" className="input_price" name="nombre" placeholder="Precio del Artículo" />
              <input type="file" onChange={archivoHandler} />
              <button type="submit">Subir Foto</button>
          </form>
        </div>
        <div className="search_container">
        <h3>Busca Imagen para Borrar</h3>
          <input type="text" onChange={searchDATA} name="nombre" placeholder="Buscar por Nombre de imagen" className="input_search" />
          <select name="select" onClick={selectIdData} className="input_search select_search"></select>
          <div className="search_img"></div>
          <button onClick={deleteFile}>Borrar Imagen</button>
        </div>
    </div>
    </>
  );
}

export default Upload;

