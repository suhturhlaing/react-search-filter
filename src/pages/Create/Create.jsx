import React, { useState, useRef } from 'react'
import { Alert } from 'react-bootstrap'
import "../Create/Create.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const Create = () => {

  //let imageData = null;

  const [name, setName] = useState("");
  const [imageData, setImage] = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef(null);
  const [success, setSuccess] = useState();

  //photo upload base64url 
  const pickerOnChange = (e) => {
    e.preventDefault();
    readURL(inputFileRef.current);
  }

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      let file = input.files[0];
      ///console.log(file.name);
      if (file.type.match('image.*')) {
        var reader = new FileReader();
        reader.onload = function (e) {
          console.log("reader on load");
          //console.log(e.target.result);
          var image = new Image();
          image.onload = function (imageEvent) {
            console.log('image on load');
            // Resize the image
            var canvas = document.createElement('canvas'),
              max_size = 540,// TODO : pull max size from a site config
              width = image.width,
              height = image.height;
            if (width > height) {
              if (width > max_size) {
                height *= max_size / width;
                width = max_size;
              }
            } else {
              if (height > max_size) {
                width *= max_size / height;
                height = max_size;
              }
            }
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(image, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            setImage(dataUrl)
          }
          image.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
      }
    }

  }
  //end readURL

  const handleSave = async (e) => {
    e.preventDefault();
    console.log('You clicked save.');
    if (name === "" && inputFileRef.current.value === "") {
      setError("Name is null and Photo is not choose");
      return;
    }

    try {
      setError('');
      setLoading(true);
      let storeData = await JSON.parse(localStorage.getItem("storeData") || "[]");
      const createdata = {
        name: name,
        image: imageData
      };
      storeData.push(createdata);
      localStorage.setItem('storeData', JSON.stringify(storeData));
    }
    catch (err) {
      setError("Failed to create fruit!")
    }
    setLoading(false);
    inputFileRef.current.value = null;
    setName("");
    setSuccess("Success! Fruit is created");
  }

  const handleCancel = (e) => {
    e.preventDefault();
    inputFileRef.current.value = null;
    setName("");
  }


  return (
    <div>
      <h2 className='text-left mb-4 title'> Create</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <div className='create-form'>
        <div className='left'></div>

        <div className='center'>
          <form>
            <div className='text-group mb-3'>
              <label>Name :</label>
              <input
                type="text"
                className='field'
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            </div>

            <div className='text-group mb-4'>
              <label>Photo :</label>
              <input
                ref={inputFileRef}
                type="file"
                className='field'
                onChange={pickerOnChange}
                accept="image/png, image/jpeg"
                required />
            </div>

            <div className='button-group mb-3'>
              <button
                disabled={loading}
                className='button'
                type='submit'
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className='button-cancel'
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className='right'></div>


      </div>
    </div>
  )
}

export default Create
