import React, { useState } from 'react';

const CreateBookForm = () => {
  const [libro, setLibro] = useState({
    Titulo: '',
    Id_autor: '',
    Isbn: '',
    Editorial: '',
    Año_publicacion: '',
    Categoría: '',
    Cantidad_disponible: '',
    Ubicacion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibro({ ...libro, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backejercicio.onrender.com/api/libros/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Libro creado con éxito: ' + data.message);
        setLibro({
          Titulo: '',
          Id_autor: '',
          Isbn: '',
          Editorial: '',
          Año_publicacion: '',
          Categoría: '',
          Cantidad_disponible: '',
          Ubicacion: ''
        });
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('Error al crear el libro: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input type="text" name="Titulo" value={libro.Titulo} onChange={handleChange} />
      </div>
      <div>
        <label>Autor ID:</label>
        <input type="number" name="Id_autor" value={libro.Id_autor} onChange={handleChange} />
      </div>
      <div>
        <label>ISBN:</label>
        <input type="text" name="Isbn" value={libro.Isbn} onChange={handleChange} />
      </div>
      <div>
        <label>Editorial:</label>
        <input type="text" name="Editorial" value={libro.Editorial} onChange={handleChange} />
      </div>
      <div>
        <label>Año de publicación:</label>
        <input type="date" name="Año_publicacion" value={libro.Año_publicacion} onChange={handleChange} />
      </div>
      <div>
        <label>Categoría:</label>
        <input type="text" name="Categoría" value={libro.Categoría} onChange={handleChange} />
      </div>
      <div>
        <label>Cantidad disponible:</label>
        <input type="number" name="Cantidad_disponible" value={libro.Cantidad_disponible} onChange={handleChange} />
      </div>
      <div>
        <label>Ubicación:</label>
        <input type="text" name="Ubicacion" value={libro.Ubicacion} onChange={handleChange} />
      </div>
      <button type="submit">Crear Libro</button>
    </form>
  );
};

export default CreateBookForm;
