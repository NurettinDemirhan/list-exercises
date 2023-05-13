import { useRef, useState, useEffect } from 'react';



function CarDetails({ initialData }) {
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setModel(initialData.model || '');
    setYear(initialData.year || '');
    setColor(initialData.color || '');
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      model: model.trim(),
      year: year.trim(),
      color: color.trim(),
    };
    console.log(data); // or submit the data to an API
    formRef.current.reset();
    setModel('');
    setYear('');
    setColor('');
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input
          id="model-input"
          type="text"
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input
          id="year-input"
          type="text"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input
          id="color-input"
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default CarDetails;